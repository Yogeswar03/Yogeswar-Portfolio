import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, useScroll, useSpring } from 'motion/react';

import About from './components/About';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Video from './components/Video';
import ProjectsPage from './components/ProjectsPage';

// Top minimal smooth scroll progress indicator
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#3A3B5A] origin-left z-[100] pointer-events-none"
    />
  );
}

// Global Lenis Smooth Inertia Scroll Provider
function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential decay
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      syncTouch: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return children;
}

// Route transition & anchor hash scroll manager
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -30, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <div className="relative bg-[#f8f9fa] text-[#1f2421]">
      <ScrollProgressBar />
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Video />
      <Projects />
      <Skills />
      <Collaborate />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
