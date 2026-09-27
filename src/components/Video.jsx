import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

export function Video() {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Floating cursor coordinates
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // 3D tilt interaction driven by cursor on white canvas
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Deep slow parallax scroll: sits underneath About and rolls under Projects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const slowY = useTransform(
    scrollYProgress,
    [0, 1],
    isTouchDevice ? ['-5%', '5%'] : ['-35%', '35%']
  );

  // Auto-advances through all projects continuously like a single seamless video
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 3600);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeProject = projectsData[currentIndex];

  const handleMouseMove = (e) => {
    if (!mediaRef.current) return;
    const rect = mediaRef.current.getBoundingClientRect();

    // Normalized coordinates for 3D tilt (-0.5 to 0.5)
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);

    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-zinc-900 py-16 sm:py-24 relative z-10 overflow-hidden"
    >
      {/* Slower Parallax Content Wrapper */}
      <motion.div
        style={{ y: slowY }}
        className="max-w-[1100px] mx-auto px-5 sm:px-8 md:px-12 will-change-transform"
      >
        {/* Minimal Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-5 mb-8 border-b border-zinc-200">
          <div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 block mb-1">
              (Continuous Single Reel)
            </span>
            <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-zinc-900">
              Project Reel
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
              {isPlaying ? 'Playing' : 'Paused'} • {String(currentIndex + 1).padStart(2, '0')}/{String(projectsData.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* 3D Kinetic White Showcase Stage (Different Approach: Clean White Stage with 3D Tilt & Cursor Control) */}
        <div style={{ perspective: 1200 }} className="w-full">
          <motion.div
            ref={mediaRef}
            style={{
              rotateX: isTouchDevice ? 0 : tiltX,
              rotateY: isTouchDevice ? 0 : tiltY,
              transformStyle: 'preserve-3d',
            }}
            onMouseEnter={() => !isTouchDevice && setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={togglePlay}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[520px] rounded-3xl bg-white border border-zinc-200/90 shadow-[0_30px_90px_rgba(0,0,0,0.07)] overflow-hidden cursor-pointer sm:cursor-none flex flex-col select-none group"
          >
            {/* Top Clean Chrome Bar */}
            <div className="relative z-20 flex items-center justify-between px-5 py-3.5 bg-zinc-50/80 backdrop-blur-sm border-b border-zinc-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              </div>

              {/* URL Pill */}
              <div className="px-4 py-1 rounded-full bg-white border border-zinc-200 text-[11px] font-mono text-zinc-600 shadow-2xs max-w-[260px] sm:max-w-md truncate">
                {activeProject.liveUrl ? activeProject.liveUrl.replace('https://', '') : `${activeProject.slug}.app`}
              </div>

              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest hidden sm:inline-block">
                Auto-Loop
              </span>
            </div>

            {/* Main Stage: Projects Glide in Seamlessly on White Canvas */}
            <div className="relative flex-1 bg-gradient-to-b from-white via-zinc-50/50 to-white flex items-center justify-center p-6 sm:p-10 overflow-hidden">
              {/* Soft Radial Backlight matching project accent */}
              <div
                className="absolute inset-0 opacity-25 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${activeProject.color1 || '#eec170'} 0%, transparent 65%)`,
                }}
              />

              {/* Continuous Video Project Slide Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.02,
                    y: -12,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10"
                >
                  {/* Left Column: Bold Project Identity */}
                  <div className="sm:w-2/5 flex flex-col justify-center text-left order-2 sm:order-1">
                    <span className="font-mono text-xs text-[#3A3B5A] font-bold mb-1">
                      PROJECT 0{currentIndex + 1}
                    </span>
                    <h3 className="font-['Oswald'] font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-zinc-900 leading-[0.95]">
                      {activeProject.title}
                    </h3>
                    <p className="font-['Neue_Montreal'] text-xs sm:text-sm text-zinc-500 mt-2 line-clamp-2">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {activeProject.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-mono text-zinc-600 border border-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Project Showcase Canvas */}
                  <div className="sm:w-3/5 w-full h-[180px] sm:h-full flex items-center justify-center order-1 sm:order-2">
                    <div className="relative w-full h-full max-h-[280px] sm:max-h-[340px] flex items-center justify-center rounded-2xl bg-white p-3 sm:p-4 border border-zinc-200 shadow-md">
                      <motion.img
                        animate={
                          isPlaying
                            ? { scale: [1, 1.02, 1] }
                            : { scale: 1 }
                        }
                        transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="max-w-full max-h-full object-contain rounded-xl drop-shadow-md"
                        onError={(e) => {
                          e.currentTarget.src = '/banner_img.png';
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Running Video Progress Line at Bottom of White Stage */}
            <div className="relative h-1 bg-zinc-100 overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={isPlaying ? { width: '100%' } : { width: '0%' }}
                transition={isPlaying ? { duration: 3.6, ease: 'linear' } : { duration: 0 }}
                className="h-full bg-[#3A3B5A]"
              />
            </div>

            {/* ONLY THE CURSOR CONTROLS: Floating Magnetic Play/Pause Cursor Badge on Desktop */}
            {!isTouchDevice && (
              <motion.div
                style={{
                  left: cursorPos.x,
                  top: cursorPos.y,
                }}
                animate={{
                  scale: isHovering ? 1 : 0,
                  opacity: isHovering ? 1 : 0,
                }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 280,
                  mass: 0.4,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black text-white flex flex-col items-center justify-center pointer-events-none z-30 shadow-2xl backdrop-blur-sm"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span className="font-['Oswald'] text-[8px] tracking-widest uppercase font-bold mt-0.5">
                      PAUSE
                    </span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                    <span className="font-['Oswald'] text-[8px] tracking-widest uppercase font-bold mt-0.5">
                      PLAY
                    </span>
                  </>
                )}
              </motion.div>
            )}

            {/* Mobile Tap Feedback Indicator */}
            <div className="sm:hidden absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-zinc-900/80 text-white text-[9px] font-mono pointer-events-none">
              {isPlaying ? 'Tap to Pause' : 'Tap to Play'}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Video;
