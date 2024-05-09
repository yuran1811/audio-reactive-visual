import { BufferGeometry, LineBasicMaterial, BufferAttribute, Line } from "three";

class AudioData {
  audio: HTMLMediaElement;
  audioContext: AudioContext;
  audioSource: MediaElementAudioSourceNode;
  analyser: AnalyserNode;
  frequencyData: Uint8Array;

  constructor(audio: HTMLMediaElement, fftSize = 8192, smoothing = 0.8) {
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
  geometry: BufferGeometry;
  lineMaterial: LineBasicMaterial;
  initPositions: Float32Array;
  numParticles: number;
  radius: number;
  step: number;
  turns: number;

  constructor(radius = 100, numParticles = 4000, turns = 60) {
    this.numParticles = numParticles;
    this.radius = radius;
    this.step = 2 / numParticles;
    this.turns = turns;
    this.geometry = new BufferGeometry();
    this.lineMaterial = new LineBasicMaterial({ color: 0xffffff });
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

      // The inversion (in cos, sin theta) is caused since the Cartesian coordinate system in threejs
      // has different rotation which is visualized in math courses
      positions[index++] = this.radius * Math.sin(phi) * Math.cos(theta);
      positions[index++] = this.radius * Math.sin(phi) * Math.sin(theta);
      positions[index++] = this.radius * Math.cos(phi);
    }

    this.initPositions = new Float32Array([...positions]);
    this.geometry.setAttribute("position", new BufferAttribute(positions, 3));
  }

  set positionNeedsUpdate(bool: boolean) {
    this.geometry.getAttribute("position").needsUpdate = bool;
    this.geometry.computeBoundingBox();
    this.geometry.computeBoundingSphere();
  }

  get lineMesh() {
    return new Line(this.geometry, this.lineMaterial);
  }
}

export { AudioData, ParticlesSphere };
