import { FC, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { AudioData, ParticlesSphere } from "../classes";

export const AudioSphere: FC = () => {
  const audioEl = useRef<HTMLAudioElement>(null);
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
  let skipFreq = 600; // Skip big frequencies which mess up the sphere
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
      sphereMesh.rotation.y += 0.008;
      sphereMesh.rotation.x += 0.008;
      sphereMesh.rotation.z += 0.008;
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
    if (!audioData) audioData = new AudioData(audioEl.current!);
    isActive ? audioData.play() : audioData.pause();
  };

  useEffect(() => {
    document.addEventListener("dblclick", onClick);

    return () => document.removeEventListener("dblclick", onClick);
  }, []);

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
    <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
      <div className="fixed inset-0" ref={canvasWrapper} />

      <div className="absolute bottom-10 z-10 cursor-pointer">
        <p className="animate-pulse text-center text-2xl text-white">
          Double click anywhere to play/pause
        </p>
        <audio className="hidden" ref={audioEl} src="./sounds/bgm.mp3" loop />
      </div>
    </div>
  );
};

export default AudioSphere;
