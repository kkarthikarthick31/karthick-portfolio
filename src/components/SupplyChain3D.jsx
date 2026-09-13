import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const STAGES = [
  {
    id: 0,
    name: "FARMER",
    role: "Origin & Batch Genesis",
    desc: "Registers harvest lot, farm geolocation, timestamp, and product identity at source.",
    color: 0x00f2fe,
  },
  {
    id: 1,
    name: "SUPPLIER",
    role: "Supplier Management Workflow",
    desc: "Validates supplier credentials, logistics intake, and signs custody transfer.",
    color: 0x38bdf8,
  },
  {
    id: 2,
    name: "PRODUCT",
    role: "Product Tracking & Specifications",
    desc: "Immutable specifications, batch metadata, and packaging serialization.",
    color: 0x818cf8,
  },
  {
    id: 3,
    name: "TRANSACTION",
    role: "Product Transaction Data & Ledger",
    desc: "Cryptographically records timestamped custody transactions into the blockchain.",
    color: 0xa855f7,
  },
  {
    id: 4,
    name: "BUYER",
    role: "Buyer Verification Workflow",
    desc: "Verifies retail/wholesale buyer authentication and confirms authorized delivery receipt.",
    color: 0xc084fc,
  },
  {
    id: 5,
    name: "CONSUMER",
    role: "Farmer-to-Consumer Traceability",
    desc: "Allows end consumer to verify the complete authenticated provenance journey from farm to fork.",
    color: 0x10b981,
  },
];

export default function SupplyChain3D() {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(1); // default on Supplier

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodeCount = STAGES.length;
    const spacing = 1.4;
    const startX = -((nodeCount - 1) * spacing) / 2;

    const nodeMeshes = [];

    // Create 6 Nodes
    STAGES.forEach((stage, i) => {
      const x = startX + i * spacing;
      const y = Math.sin((i / (nodeCount - 1)) * Math.PI) * 0.45 - 0.2;

      // Sphere Node
      const geo = new THREE.SphereGeometry(0.3, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: stage.color,
        emissive: stage.color,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8,
      });
      const sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(x, y, 0);
      group.add(sphere);

      // Outer glowing ring
      const ringGeo = new THREE.TorusGeometry(0.42, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: stage.color,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(x, y, 0);
      group.add(ring);

      nodeMeshes.push({ sphere, ring, mat, x, y, stage, index: i });
    });

    // Connecting Curve across 6 nodes
    const curvePoints = nodeMeshes.map(n => new THREE.Vector3(n.x, n.y, 0));
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 72, 0.035, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      emissive: 0x0f172a,
      roughness: 0.3,
      metalness: 0.8,
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    group.add(tube);

    // Traveling glowing data packets along the curve
    const packets = [];
    const packetGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });

    for (let i = 0; i < 4; i++) {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      group.add(mesh);
      packets.push({ mesh, progress: i * 0.25 });
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x00f2fe, 1.8, 15);
    light1.position.set(startX, 2, 3);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xa855f7, 1.8, 15);
    light2.position.set(-startX, -2, 3);
    scene.add(light2);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Move data packets along curve
      packets.forEach(p => {
        p.progress += 0.005;
        if (p.progress > 1) p.progress = 0;
        const pt = curve.getPoint(p.progress);
        p.mesh.position.copy(pt);
      });

      // Pulse active stage node
      nodeMeshes.forEach((n) => {
        const isActive = n.index === activeStage;
        n.ring.rotation.z += 0.015;
        if (isActive) {
          n.mat.emissiveIntensity = 0.95;
          n.ring.scale.set(1.2, 1.2, 1.2);
        } else {
          n.mat.emissiveIntensity = 0.35;
          n.ring.scale.set(1.0, 1.0, 1.0);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 300;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeStage]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-[220px] sm:h-[260px] relative cursor-pointer"
      />

      {/* Interactive Stage Selectors & Info Card */}
      <div className="w-full max-w-2xl px-4 mt-2">
        {/* Node Button Selector Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {STAGES.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onMouseEnter={() => setActiveStage(stage.id)}
                onClick={() => setActiveStage(stage.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-glow-cyan scale-105'
                    : 'bg-dark-850/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: isActive ? '#00f2fe' : '#64748b' }}
                />
                <span>{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 rounded-xl bg-dark-850/90 border border-cyber-cyan/30 text-left shadow-lg backdrop-blur-md"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-wider">
              {STAGES[activeStage].name}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {STAGES[activeStage].role}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            "{STAGES[activeStage].desc}"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
