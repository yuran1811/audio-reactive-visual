import { useEffect } from "react";
import { World } from "../classes";

export const XMas = () => {
  useEffect(() => {
    const w = new World({
      canvas: document.querySelector("canvas.webgl")!,
      cameraPosition: { x: 0, y: 0, z: 4.5 },
    });

    w.start();

    return () => w.stop();
  }, []);

  return (
    <div className="fixed inset-0">
      <canvas className="webgl" />

      <button id="play-music" type="button">
        Play music
      </button>

      <footer>
        <p>Built with Three.js and GSAP.</p>
        <p>
          Inspired by{" "}
          <a href="https://threejs-audio-reactive-visual.netlify.app/">
            this demo by Francesco Michelini
          </a>
        </p>
      </footer>
    </div>
  );
};

export default XMas;
