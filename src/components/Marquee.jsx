import React, { useState } from 'react';
import { motion } from 'motion/react';

const marqueeItems = [
  'Frontend Developer',
  'Machine Learning',
  'UI/UX Designer',
  'React & Framer Motion',
];

export function Marquee() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full bg-[#3A3B5A] text-white overflow-hidden rounded-t-3xl pt-14 pb-16 md:pb-24 mt-4 sm:mt-10 relative z-20 shadow-2xl cursor-pointer"
    >
      <div className="border-y border-white/20 py-4 whitespace-nowrap flex overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: isHovered ? 7 : 15, // Faster default and super snappy hover
            repeat: Infinity,
          }}
        >
          {/* Repeat twice for continuous loop */}
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <div key={`${copyIndex}-${idx}`} className="flex items-center">
                  <span
                    className={`font-['Oswald'] font-bold text-6xl sm:text-8xl md:text-[14vw] tracking-tighter uppercase px-6 sm:px-10 leading-none select-none transition-colors duration-200 ${
                      isHovered ? 'text-[#c77dff]' : 'text-white'
                    }`}
                  >
                    {item}
                  </span>
                  <span className="text-[#f58549] text-3xl sm:text-6xl md:text-8xl font-light select-none px-2">
                    /
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
          {isHovered ? '⚡ Fast Forwarding' : 'Hover to accelerate'}
        </span>
      </div>
    </section>
  );
}

export default Marquee;
