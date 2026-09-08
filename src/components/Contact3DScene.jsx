import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Contact3DScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // --------------------------------------------------
    // NETWORK ORB — points on a sphere, connected by
    // faint lines to nearby neighbors (signal/network motif)
    // --------------------------------------------------

    const POINT_COUNT = 60;
    const RADIUS = 1.9;
    const points = [];

    const pointGeo = new THREE.SphereGeometry(0.035, 8, 8);
    const pointMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
    const pointMatAlt = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    for (let i = 0; i < POINT_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / POINT_COUNT);
      const theta = Math.sqrt(POINT_COUNT * Math.PI) * phi;

      const x = RADIUS * Math.cos(theta) * Math.sin(phi);
      const y = RADIUS * Math.sin(theta) * Math.sin(phi);
      const z = RADIUS * Math.cos(phi);

      const mesh = new THREE.Mesh(pointGeo, i % 5 === 0 ? pointMatAlt : pointMat);
      mesh.position.set(x, y, z);
      group.add(mesh);
      points.push({ mesh, basePos: new THREE.Vector3(x, y, z) });
    }

    // Connect each point to its nearest few neighbors
    const linePositions = [];
    for (let i = 0; i < points.length; i++) {
      const distances = points
        .map((p, idx) => ({ idx, dist: points[i].basePos.distanceTo(p.basePos) }))
        .filter((d) => d.idx !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 2);

      distances.forEach((d) => {
        linePositions.push(
          points[i].basePos.x, points[i].basePos.y, points[i].basePos.z,
          points[d.idx].basePos.x, points[d.idx].basePos.y, points[d.idx].basePos.z
        );
      });
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    // Thin outer ring for elegance
    const ringGeo = new THREE.TorusGeometry(2.3, 0.006, 8, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);

    // Soft ambient + rim light for depth on the points
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Mouse interaction (gentle parallax, not raycasting)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      mouseX = (x / width) * 2;
      mouseY = -(y / height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX * 0.3 - targetX) * 0.04;
      targetY += (mouseY * 0.3 - targetY) * 0.04;

      group.rotation.y = elapsed * 0.12 + targetX;
      group.rotation.x = Math.sin(elapsed * 0.3) * 0.1 + targetY;

      ring.rotation.z += 0.0015;

      // Gentle breathing pulse on points
      points.forEach((p, i) => {
        const pulse = 1 + Math.sin(elapsed * 1.5 + i * 0.3) * 0.08;
        p.mesh.scale.setScalar(pulse);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      pointGeo.dispose();
      pointMat.dispose();
      pointMatAlt.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
}