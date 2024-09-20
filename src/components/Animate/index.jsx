import { useEffect, useRef } from "react";
import * as THREE from "three";

export function RenderBackground() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const frameIdRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    const scaleFactor = 1.2;

    function updateSize() {
      const width = window.innerWidth * scaleFactor;
      const height = window.innerHeight * scaleFactor;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;
      canvasRef.current.style.position = "fixed";
      canvasRef.current.style.top = `${(window.innerHeight - height) / 2}px`;
      canvasRef.current.style.left = `${(window.innerWidth - width) / 2}px`;
    }

    updateSize();

    camera.position.z = 20;

    function addStars() {
      const geometry = new THREE.SphereGeometry(0.1, 24, 24);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(400));

      star.position.set(x, y, z);
      starsRef.current.push(star);
      scene.add(star);
    }

    Array(400).fill().forEach(addStars);

    function animate() {
      starsRef.current.forEach((star) => {
        star.position.x -= 0.05;

        if (star.position.x < -100) {
          star.position.x = 100;
        }
      });

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(frameIdRef.current);

      renderer.dispose();
      starsRef.current.forEach((star) => {
        scene.remove(star);
        star.geometry.dispose();
        star.material.dispose();
      });
      starsRef.current = [];
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default RenderBackground;
