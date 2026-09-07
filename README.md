# Karthick K — Premium Futuristic Portfolio Website

> **Java Full Stack Developer** | Tamil Nadu, India  
> *"Building scalable applications from database to interface."*

This repository contains the complete personal portfolio web application built with **ReactJS**, **Three.js**, **Framer Motion**, and **Tailwind CSS**.

---

## ⚡ Tech Stack & Architecture
- **Core Frontend**: ReactJS 18 (Vite Bundler)
- **3D Graphics & Visuals**: Three.js (Interactive Digital Core & Supply Chain Traceability Visualizer)
- **Motion & Interaction**: Framer Motion (Spring-based physics, magnetic cursor & buttons, 3D card tilt)
- **Background Atmosphere**: Interactive HTML5 Canvas Particle System with proximity connections
- **Styling**: Tailwind CSS + Custom Glassmorphism & Neon Glow Utilities
- **Icons**: React Icons (OpenJDK, Spring Boot, React, MySQL, Postman, LeetCode, GitHub, LinkedIn, etc.)
- **Celebration Effects**: Canvas Confetti (Contact form dispatch & resume download)

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Navigate into the portfolio directory:
```bash
cd C:\Users\kkart\.gemini\antigravity\scratch\karthick-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live portfolio.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure
```
karthick-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── data/
    │   └── portfolioData.js          # Centralized resume metrics & configuration placeholders
    ├── hooks/
    │   ├── useMousePosition.js       # Dynamic normalized coordinates & interaction state
    │   └── useScrollSpy.js           # Viewport tracking for smooth navigation indicator
    ├── styles/
    │   └── index.css                 # Glassmorphism, animations, custom scrollbars
    ├── components/
    │   ├── CustomCursor.jsx          # Smooth dual-ring lag cursor (disabled on mobile)
    │   ├── ParticleBackground.jsx    # Interactive canvas particle network
    │   ├── Navbar.jsx                # Futuristic fixed bar with layoutId indicator & mobile drawer
    │   ├── Hero.jsx                  # Main headline, core stack badges, magnetic CTAs
    │   ├── Hero3DScene.jsx           # Three.js 3D developer core with rotating rings & nodes
    │   ├── About.jsx                 # Career narrative, approach quote, 5 verified stat cards
    │   ├── Skills.jsx                # Categorized tabs, 3D tilt cards, rotating icons
    │   ├── Experience.jsx            # Cinematic drawing vertical timeline with internship roles
    │   ├── Projects.jsx              # Enterprise Inventory System & Blockchain Traceability
    │   ├── SupplyChain3D.jsx         # Interactive 3D Farmer → Consumer traceability node flow
    │   ├── ProjectDownloads.jsx      # Source packages with configurable archive links
    │   ├── Articles.jsx              # Upcoming architectural blueprints & modal reader
    │   ├── CodingProfiles.jsx        # LeetCode Top SQL 50 mastery with SQL query simulator
    │   ├── Achievements.jsx          # NPTEL 71%, MD Honors, and verified credentials
    │   ├── Contact.jsx               # Direct email, copy-to-clipboard, mailto & API dispatch form
    │   ├── ResumeModal.jsx           # Clean printable PDF resume preview with one-click print
    │   ├── CTA.jsx                   # High-impact closing call-to-action
    │   ├── Footer.jsx                # Brand signature, navigation shortcuts, back-to-top button
    │   └── UI/
    │       ├── MagneticButton.jsx    # Spring-based magnetic button component
    │       ├── TiltCard.jsx          # 3D perspective mouse tilt card
    │       └── SectionHeading.jsx    # Consistent cyber badge & gradient heading
    ├── App.jsx                       # Master page coordinator
    └── main.jsx                      # React 18 DOM mount point
```

---

## 🔒 Strict Content Rule & Verification
- **No Hallucinated Data**: All statistics, experience items (Top Tech Developers, Chennai & Crud Academy, Karur), education (80% MCA), certification (NPTEL 71%), and projects are strictly sourced from Karthick K's resume.
- **Configurable Placeholders**: Missing external links (`LEETCODE_PROFILE_URL`, `PROJECT_DOWNLOAD_URL`, `PROJECT_GITHUB_URL`, etc.) are centralized inside `src/data/portfolioData.js` for instant updates.
