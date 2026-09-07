import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const STAGES = [
  { id: 0, name: "Farmer", role: "Origin Harvest", desc: "Batch generation & produce logging with timestamp", color: 0x10b981 },
  { id: 1, name: "Supplier", role: "Logistics Hub", desc: "Cold-chain verification and transit checkpoints", color: 0x06b6d4 },
  { id: 2, name: "Verification", role: "Consensus Audit", desc: "Cryptographic hash validation & buyer signature", color: 0x8b5cf6 },
  { id: 3, name: "Product", role: "Packaged Good", desc: "Tamper-evident tokenized batch serialization", color: 0x3b82f6 },
  { id: 4, name: "Consumer", role: "Provenance Scan", desc: "End-to-end authentic farm-to-table verification", color: 0x00f2fe },
];

export default function SupplyChain3D() {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Node configuration along a subtle arc
    const nodeMeshes = [];
    const nodeCount = STAGES.length;
    const spacing = 1.6;
    const startX = -((nodeCount - 1) * spacing) / 2;

    const group = new THREE.Group();
    scene.add(group);

    // Create 5 Nodes
    STAGES.forEach((stage, i) => {
      const x = startX + i * spacing;
      const y = Math.sin((i / (nodeCount - 1)) * Math.PI) * 0.4 - 0.2;

      // Sphere Node
      const geo = new THREE.SphereGeometry(0.35, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: stage.color,
        emissive: stage.color,
        emissiveIntensity: i === 0 ? 0.8 : 0.4,
        roughness: 0.2,
        metalness: 0.8,
      });
      const sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(x, y, 0);
      group.add(sphere);

      // Outer ring for node
      const ringGeo = new THREE.TorusGeometry(0.5, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: stage.color,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(x, y, 0);
      group.add(ring);

      nodeMeshes.push({ sphere, ring, mat, x, y, stage });
    });

    // Connecting Tubes / Curves
    const curvePoints = nodeMeshes.map(n => new THREE.Vector3(n.x, n.y, 0));
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.04, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      emissive: 0x1e293b,
      roughness: 0.4,
      metalness: 0.6,
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    group.add(tube);

    // Traveling Data Packets (Pulsing glowing spheres moving from 0 to 1 along curve)
    const packets = [];
    const packetGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });

    for (let i = 0; i < 3; i++) {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      group.add(mesh);
      packets.push({ mesh, progress: i * 0.33 });
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 20);
    pointLight.position.set(0, 3, 4);
    scene.add(pointLight);

    // Raycaster for hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Gentle wave tilt
      group.rotation.y = Math.sin(elapsed * 0.5) * 0.15;
      group.rotation.x = Math.cos(elapsed * 0.4) * 0.05;

      // Animate node rings
      nodeMeshes.forEach((n, i) => {
        n.ring.rotation.x += 0.02;
        n.ring.rotation.y += 0.015;
        n.sphere.position.y = n.y + Math.sin(elapsed * 2 + i) * 0.05;
        n.ring.position.y = n.sphere.position.y;
      });

      // Animate packets along the spline
      packets.forEach((p) => {
        p.progress = (p.progress + delta * 0.25) % 1;
        const pt = curve.getPoint(p.progress);
        p.mesh.position.copy(pt);
      });

      // Raycast check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map(n => n.sphere));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const found = nodeMeshes.find(n => n.sphere === hit);
        if (found) {
          setActiveStage(found.stage.id);
        }
      }

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
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      nodeMeshes.forEach(n => {
        n.sphere.geometry.dispose();
        n.ring.geometry.dispose();
        n.mat.dispose();
      });
      tubeGeo.dispose();
      tubeMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full bg-dark-900/80 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyber-emerald animate-pulse" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-emerald">
            Interactive 3D Supply Chain Traceability
          </span>
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Hover over nodes to inspect consensus flow
        </div>
      </div>

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-56 sm:h-64 cursor-grab active:cursor-grabbing relative"
      />

      {/* Stage Detail Card */}
      <div className="mt-4 pt-4 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {STAGES.map((stg) => {
          const isActive = stg.id === activeStage;
          return (
            <button
              key={stg.id}
              onClick={() => setActiveStage(stg.id)}
              className={`text-left p-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-slate-800/90 border border-cyber-cyan/50 shadow-glow-blue'
                  : 'bg-dark-850/40 border border-slate-800 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-mono text-slate-500">0{stg.id + 1}</span>
                <span className={`text-xs font-bold ${isActive ? 'text-cyber-cyan' : 'text-slate-300'}`}>
                  {stg.name}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium truncate">
                {stg.role}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Callout */}
      <motion.div
        key={activeStage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-3 p-3 rounded-lg bg-cyber-cyan/5 border border-cyber-cyan/20 text-xs text-slate-300 flex items-center justify-between"
      >
        <span>
          <strong className="text-cyber-cyan font-mono mr-1">
            [{STAGES[activeStage].name}]:
          </strong>
          {STAGES[activeStage].desc}
        </span>
        <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 text-cyber-cyan border border-cyber-cyan/30">
          BLOCKCHAIN VERIFIED
        </span>
      </motion.div>
    </div>
  );
}
