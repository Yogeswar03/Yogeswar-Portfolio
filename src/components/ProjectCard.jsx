import React, { useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

/* Interactive pill button with expanding circle */
function HoverButton({ href, text, primary = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black text-xs font-semibold uppercase tracking-wider overflow-hidden transition-colors duration-300 bg-white"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1.6 : 0 }}
        transition={{ duration: 0.35, ease: [0.255, 0.61, 0.355, 1] }}
        className="absolute inset-0 rounded-full bg-black z-0 origin-center"
      />
      <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 flex items-center gap-1.5">
        {text}
        {primary && <ArrowUpRight className="w-3.5 h-3.5" />}
      </span>
    </a>
  );
}

export function ProjectCard({ project, index = 0, priority = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const titleControls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    titleControls.start({ y: '0%' });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    titleControls.start({ y: '100%' });
  };

  // Even index = left column (overhangs right on desktop), Odd index = right column (overhangs left on desktop)
  const isLeftColumn = index % 2 === 0;
  const slug = project.slug || project.title.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <div
      className={`w-full flex flex-col relative transition-all duration-300 ${
        isHovered ? 'z-40' : 'z-10'
      }`}
    >
      {/* Project name indicator */}
      <div className="flex items-center gap-2.5 pb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-black" />
        <h3 className="font-['Neue_Montreal'] font-medium text-lg md:text-xl uppercase tracking-tight text-zinc-900">
          {project.title}
        </h3>
      </div>

      {/* Main card canvas — no overflow-hidden so letter reveal can overhang */}
      <div
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] relative rounded-2xl cursor-pointer"
      >
        {/* Background color panels (clipped to rounded corners) */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden z-0 shadow-sm transition-shadow duration-500 hover:shadow-xl">
          {project.bgStyle === 'split-lr' && (
            <>
              <div
                className="absolute left-0 top-0 w-1/2 h-full z-0"
                style={{ backgroundColor: project.color1 || '#eec170' }}
              />
              <div
                className="absolute right-0 top-0 w-1/2 h-full z-0"
                style={{ backgroundColor: project.color2 || '#f58549' }}
              />
            </>
          )}

          {project.bgStyle === 'split-tb' && (
            <>
              <div
                className="absolute left-0 top-0 w-full h-1/2 z-0"
                style={{ backgroundColor: project.color1 || '#7a9e9f' }}
              />
              <div
                className="absolute right-0 bottom-0 w-full h-1/2 z-0"
                style={{ backgroundColor: project.color2 || '#b8d8d8' }}
              />
            </>
          )}

          {(!project.bgStyle || project.bgStyle === 'solid') && (
            <div
              className="absolute inset-0 z-0"
              style={{ backgroundColor: project.color1 || '#5b8e7d' }}
            />
          )}
        </div>

        {/* Project Image */}
        <div className="absolute inset-0 z-10 p-6 sm:p-10 flex items-center justify-center pointer-events-none">
          <img
            src={project.image}
            alt={project.title}
            loading={priority ? 'eager' : 'lazy'}
            className="rounded-xl max-h-[82%] max-w-[88%] object-contain shadow-md transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = '/banner_img.png';
            }}
          />
        </div>

        {/* Letter-by-letter Animated Heading */}
        <h2
          className={`absolute overflow-hidden font-['Oswald'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] xl:text-[6.5vw] z-50 top-1/2 -translate-y-1/2 tracking-tighter text-[#c77dff] uppercase whitespace-nowrap pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] ${
            isLeftColumn
              ? 'left-1/2 -translate-x-1/2 lg:left-full lg:-translate-x-1/2'
              : 'left-1/2 -translate-x-1/2 lg:right-full lg:left-auto lg:translate-x-1/2'
          }`}
        >
          {slug.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: '100%' }}
              animate={titleControls}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.04,
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 items-center relative z-20">
        {project.liveUrl && (
          <HoverButton href={project.liveUrl} text="Live Project" primary />
        )}
        {project.githubUrl && (
          <HoverButton href={project.githubUrl} text="GitHub" />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
