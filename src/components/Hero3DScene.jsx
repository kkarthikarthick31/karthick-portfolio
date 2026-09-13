import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect WebGL capability
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    let width = container.clientWidth || 440;
    let height = container.clientHeight || 440;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // Master Full-Stack Core Group
    const coreGroup = new THREE.Group();
    coreGroup.scale.set(0.85, 0.85, 0.85);
    scene.add(coreGroup);

    // ==========================================
    // 1. CENTRAL DATABASE / ENGINE CORE (Inner)
    // ==========================================
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x07152b,
      emissive: 0x0d2b45,
      emissiveIntensity: 0.6,
      roughness: 0.25,
      metalness: 0.9,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // Inner wireframe lattice
    const wireGeo = new THREE.IcosahedronGeometry(1.22, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // ==========================================
    // 2. LAYER RINGS: Frontend, API, Backend, DB
    // ==========================================
    // Ring 1: FRONTEND LAYER (Outer Cyan Ring)
    const ring1Geo = new THREE.TorusGeometry(2.7, 0.024, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x0090a8,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    coreGroup.add(ring1);

    // Ring 2: REST API LAYER (Sky Blue Mid-Ring)
    const ring2Geo = new THREE.TorusGeometry(2.35, 0.022, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0369a1,
      emissiveIntensity: 0.55,
      metalness: 0.85,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3.8;
    ring2.rotation.x = Math.PI / 5.5;
    coreGroup.add(ring2);

    // Ring 3: BACKEND / SPRING BOOT LAYER (Violet Tech Ring)
    const ring3Geo = new THREE.TorusGeometry(1.95, 0.02, 16, 120);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x581c87,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.25,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring3);

    // Ring 4: DATABASE PERSISTENCE LAYER (Dark Slate / Teal Base Ring)
    const ring4Geo = new THREE.TorusGeometry(1.6, 0.018, 16, 100);
    const ring4Mat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x034a6e,
      emissiveIntensity: 0.45,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring4 = new THREE.Mesh(ring4Geo, ring4Mat);
    ring4.rotation.y = -Math.PI / 4;
    coreGroup.add(ring4);

    // ==========================================
    // 3. ORBITING DATA PACKET CYLINDERS / TOKENS
    // ==========================================
    const tokenGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.22, 16);
    const tokenMat1 = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.7,
      metalness: 0.9,
      roughness: 0.2,
    });
    const tokenMat2 = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0xa855f7,
      emissiveIntensity: 0.7,
      metalness: 0.9,
      roughness: 0.2,
    });

    const orbitNodes = [];
    for (let i = 0; i < 4; i++) {
      const mat = i % 2 === 0 ? tokenMat1 : tokenMat2;
      const mesh = new THREE.Mesh(tokenGeo, mat);
      coreGroup.add(mesh);
      orbitNodes.push({
        mesh,
        mat,
        angle: (i * Math.PI * 2) / 4,
        radius: 2.5 + (i % 2) * 0.3,
        speed: 0.008 + i * 0.003,
        tiltY: (i * Math.PI) / 4,
      });
    }

    // ==========================================
    // 4. FLOATING MICRO PARTICLES (Data Points)
    // ==========================================
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // ==========================================
    // 5. CINEMATIC LIGHTING
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0x00f2fe, 2.4, 25);
    keyLight.position.set(4.5, 3.5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xa855f7, 2.2, 25);
    rimLight.position.set(-4.5, -3, -2);
    scene.add(rimLight);

    const centerGlow = new THREE.PointLight(0x38bdf8, 1.2, 10);
    centerGlow.position.set(0, 0, 0);
    scene.add(centerGlow);

    // ==========================================
    // 6. MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      mouseX = (x / width) * 1.6;
      mouseY = -(y / height) * 1.6;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (expensive, controlled feeling)
      targetX += (mouseX * 0.35 - targetX) * 0.04;
      targetY += (mouseY * 0.35 - targetY) * 0.04;

      coreGroup.rotation.y = targetX + elapsedTime * 0.14;
      coreGroup.rotation.x = targetY + Math.sin(elapsedTime * 0.4) * 0.08;
      coreGroup.position.y = Math.sin(elapsedTime * 0.9) * 0.1;

      // Inner core slow internal counter-rotation
      innerCore.rotation.y -= 0.003;
      innerCore.rotation.z += 0.002;
      wireMesh.rotation.y += 0.005;

      // Ring relative rotations
      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.004;
      ring3.rotation.z += 0.003;
      ring4.rotation.z -= 0.002;

      // Orbit nodes
      orbitNodes.forEach((node, idx) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = Math.sin(node.angle * 2 + node.tiltY) * 0.6;
        node.mesh.rotation.y += 0.02;
        node.mesh.rotation.x += 0.01;
      });

      particleSystem.rotation.y = -elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 440;
      height = container.clientHeight || 440;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="relative w-64 h-64 rounded-full border border-cyber-cyan/30 flex items-center justify-center animate-spin-slow">
          <div className="w-48 h-48 rounded-full border border-cyber-purple/40 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-cyber-blue/50 flex items-center justify-center bg-dark-900/80 shadow-glow-cyan">
              <span className="text-xs font-mono text-cyber-cyan font-bold tracking-wider">FULL STACK CORE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[420px] sm:h-[460px] md:h-[500px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Full Stack Engineering Core"
    />
  );
}