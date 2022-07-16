import { FC, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class AudioData {
  audio: any;
  audioContext: any;
  audioSource: any;
  analyser: any;
  frequencyData: any;

  constructor(audio: any, fftSize = 8192, smoothing = 0.8) {
    this.audio = audio;
    this.audioContext = new AudioContext();

    this.audioSource = this.audioContext.createMediaElementSource(this.audio);

    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = fftSize;
    this.analyser.smoothingTimeConstant = smoothing;

    this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);

    this.audioSource.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
  }

  play() {
    this.audioContext
      .resume()
      .then(() => this.audio.play())
      .catch(console.error);
  }

  pause = () => this.audio.pause();

  get frequency() {
    this.analyser.getByteFrequencyData(this.frequencyData);
    return this.frequencyData;
  }
}

class ParticlesSphere {
  geometry: any;
  initPositions: any;
  lineMaterial: any;
  numParticles: any;
  radius: any;
  step: any;
  turns: any;

  constructor(radius = 100, numParticles = 4000, turns = 60) {
    this.numParticles = numParticles;
    this.radius = radius;
    this.step = 2 / numParticles;
    this.turns = turns;
    this.geometry = new THREE.BufferGeometry();
    this.lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    this.initPositions = new Float32Array(numParticles * 3);
    this.init();
  }

  /*  Info: 
        https://gist.github.com/aptxwang/628a2b038c6d01ecbc57
        https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2007GC001581 Equation (3) - Page 2 
        https://en.wikipedia.org/wiki/Spherical_coordinate_system middle page
  */
  init() {
    const positions = new Float32Array(this.numParticles * 3);

    let index = 0;
    for (let i = -1; i <= 1; i += this.step) {
      const phi = Math.acos(i); // azimuth
      const theta = (2 * this.turns * phi) % (2 * Math.PI); // inclination

      // The inversion (in cos, sin theta) is caused since the Cartesian coordinate system in Three.js
      // has different rotation which is visualized in math courses
      positions[index++] = this.radius * Math.sin(phi) * Math.cos(theta);
      positions[index++] = this.radius * Math.sin(phi) * Math.sin(theta);
      positions[index++] = this.radius * Math.cos(phi);
    }
    this.initPositions = [...positions];
    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  }

  set positionNeedsUpdate(bool: boolean) {
    this.geometry.getAttribute("position").needsUpdate = bool;
    this.geometry.computeBoundingBox();
    this.geometry.computeBoundingSphere();
  }

  get lineMesh() {
    return new THREE.Line(this.geometry, this.lineMaterial);
  }
}

const AudioSphere: FC = () => {
  const audioEl = useRef<HTMLAudioElement>(null);
  const audioControlEl = useRef<HTMLDivElement>(null);
  const canvasWrapper = useRef<HTMLDivElement>(null);

  let activeAudio = false;
  let isInteracting = false;

  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;
  let controls: OrbitControls;

  let animationId: number;
  let audioData: AudioData;
  let center: number;
  let particlesSphere: ParticlesSphere;
  let skipFreq = 630; // Skip big frequencies which mess up the sphere
  let sphereMesh: THREE.Line<any, any>;

  const onClick = () => setActiveAudio(!activeAudio);
  const onAudioEnded = () => setActiveAudio(false);
  const onMouseUp = () => (isInteracting = false);
  const onMouseDown = () => (isInteracting = true);
  const onWindowResize = (resizeEvent: any) => {
    if (!renderer || !camera || !canvasWrapper.current) return;
    const width = canvasWrapper.current.offsetWidth;
    const height = canvasWrapper.current.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  const init = () => {
    const container = canvasWrapper.current;
    if (!container) return;

    const ratio = container.offsetWidth / container.offsetHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, ratio, 0.001, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    controls = new OrbitControls(camera, container);

    camera.position.set(0, 100, 500);
    renderer.setPixelRatio(ratio);
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    Object.assign(controls, {
      enableDamping: true,
      enableZoom: false,
      enablePan: false,
    });

    particlesSphere = new ParticlesSphere(100, 2000, 30);
    sphereMesh = particlesSphere.lineMesh;
    center = Math.floor(particlesSphere.numParticles / 2);
    scene.add(sphereMesh);

    container.appendChild(renderer.domElement);
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseup", onMouseUp);
  };
  const render = () => {
    animationId = requestAnimationFrame(render);

    if (!isInteracting) {
      sphereMesh.rotation.y += 0.01;
      sphereMesh.rotation.x += 0.01;
      sphereMesh.rotation.z += 0.01;
    }

    const frequencyData = audioData?.frequency;
    if (frequencyData) {
      const positions = particlesSphere.geometry.getAttribute("position").array;

      for (let i = 0; i <= center; i++) {
        if (i + skipFreq >= frequencyData.length) continue;

        const factor = frequencyData[i + skipFreq] / 256 + 1; // between 1 and 2

        const updateOnFreq = (idx: number) => {
          for (let x = 0; x < 3; x++)
            positions[idx * 3 + x] = particlesSphere.initPositions[idx * 3 + x] * factor;
        };

        updateOnFreq(center + i);
        updateOnFreq(center - i);
      }

      particlesSphere.positionNeedsUpdate = true;
    }

    controls.update();
    renderer.render(scene, camera);
  };
  const stop = () => {
    if (!animationId) return;

    cancelAnimationFrame(animationId);

    const container = canvasWrapper.current;
    container?.removeEventListener("mousedown", onMouseDown);
    container?.removeEventListener("mouseup", onMouseUp);
  };

  const setActiveAudio = (isActive: boolean) => {
    activeAudio = isActive;
    if (!audioData) audioData = new AudioData(audioEl.current);
    isActive ? audioData.play() : audioData.pause();
    audioControlEl.current && audioControlEl.current.classList.toggle("animate-ping", isActive);
  };

  useEffect(() => {
    const audio = audioEl.current;

    try {
      init();
      render();
    } catch (err) {
      console.error(err);
    }

    setActiveAudio(activeAudio);

    audio?.addEventListener("ended", onAudioEnded);
    window.addEventListener("resize", onWindowResize);

    return () => {
      stop();
      audio?.removeEventListener("ended", onAudioEnded);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[600px] mx-auto">
      <div className="w-full h-full" ref={canvasWrapper} />
      <div
        className="cursor-pointer absolute bottom-0 mx-auto w-[3.6rem] h-[3.6rem] rounded-[50%] bg-blue-400"
        onClick={onClick}
      >
        <div className="w-[3.6rem] h-[3.6rem] rounded-[50%] bg-blue-400" ref={audioControlEl} />
        <audio className="hidden" ref={audioEl} src="./bgm.mp3" loop />
      </div>
    </div>
  );
};

export default AudioSphere;
