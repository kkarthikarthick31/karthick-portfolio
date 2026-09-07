import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the entire digital core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core - Geometric Octahedron with wireframe and inner core
    const coreGeo = new THREE.OctahedronGeometry(1.3, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x051329,
      emissive: 0x0a2540,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Wireframe cage over core
    const wireGeo = new THREE.OctahedronGeometry(1.35, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // 2. Gimbal Rings (Cyan & Purple)
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00a8b5,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.4, 0.025, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x6b21a8,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    coreGroup.add(ring2);

    // 3. Floating Database Nodes (Cylinders)
    const dbNodes = [];
    const dbGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.35, 16);
    const dbMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      metalness: 0.7,
      roughness: 0.3,
    });

    for (let i = 0; i < 3; i++) {
      const dbMesh = new THREE.Mesh(dbGeo, dbMat);
      const angle = (i * Math.PI * 2) / 3;
      dbMesh.position.set(Math.cos(angle) * 2.8, Math.sin(angle) * 1.2, Math.sin(angle) * 1.5);
      coreGroup.add(dbMesh);
      dbNodes.push({ mesh: dbMesh, angle, speed: 0.01 + i * 0.005, radius: 2.8, yOffset: Math.sin(angle) * 1.2 });
    }

    // 4. Floating Small Glowing Cubes (Data packets / Microservices)
    const cubes = [];
    const cubeGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: false,
    });

    for (let i = 0; i < 16; i++) {
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      const phi = Math.acos(-1 + (2 * i) / 16);
      const theta = Math.sqrt(16 * Math.PI) * phi;
      const r = 2.2 + (Math.random() - 0.5) * 0.6;

      cube.position.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      coreGroup.add(cube);
      cubes.push(cube);
    }

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 3, 20);
    cyanLight.position.set(4, 3, 4);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3, 20);
    purpleLight.position.set(-4, -3, -2);
    scene.add(purpleLight);

    // Mouse Interaction
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

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;

      coreGroup.rotation.y = targetX + elapsedTime * 0.2;
      coreGroup.rotation.x = targetY + Math.sin(elapsedTime * 0.5) * 0.1;
      coreGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

      // Rotate individual components
      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.z += 0.003;
      wireMesh.rotation.y -= 0.007;

      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;

      // Orbit DB nodes
      dbNodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.rotation.y += 0.02;
        node.mesh.rotation.x += 0.01;
      });

      // Animate cubes
      cubes.forEach((cube, idx) => {
        cube.rotation.x += 0.015;
        cube.rotation.y += 0.015;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      dbGeo.dispose();
      dbMat.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[550px] flex items-center justify-center pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
}
