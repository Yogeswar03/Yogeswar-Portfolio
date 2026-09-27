import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Landing() {
  const containerRef = useRef(null);
  const headline = ['Hello I Am', 'Yogeswar', 'I develop web apps'];

  // Scroll parallax: content moves down as user scrolls, making the scroll feel slow & heavy
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const slowScrollY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[95vh] flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-16 max-w-[1400px] mx-auto overflow-hidden"
    >
      <motion.div
        style={{ y: slowScrollY, opacity: fadeOutOpacity }}
        className="w-full flex-1 flex flex-col justify-between"
      >
        {/* Top subtle meta tag */}
        <div className="flex justify-end pt-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500"
          >
            <span className="w-2 h-2 rounded-full bg-[#3A3B5A]" />
            <span>Based in India</span>
          </motion.div>
        </div>

        {/* Main Massive Headline */}
        <div className="my-auto py-6 sm:py-10">
          {headline.map((item, index) => (
            <div className="overflow-hidden leading-none" key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'clamp(60px, 8.8vw, 130px)', opacity: 1 }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 2.4,
                      delay: 0.5,
                    }}
                    className="h-[8vw] max-h-[85px] min-h-[44px] relative mr-2 sm:mr-4 ml-1 rounded-md sm:rounded-xl overflow-hidden shadow-sm flex-shrink-0"
                  >
                    <motion.img
                      initial={{ scale: 1.45 }}
                      animate={{ scale: 1 }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 2.4,
                        delay: 0.5,
                      }}
                      src="/image.png"
                      alt="Yogeswar"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = '/profile_pic.png';
                      }}
                    />
                  </motion.div>
                )}

                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    ease: [0.16, 1, 0.3, 1],
                    duration: 1.6,
                    delay: index * 0.2,
                  }}
                  className={`font-['Oswald'] font-bold uppercase text-[12vw] sm:text-[9vw] lg:text-[7.6vw] tracking-tighter leading-[0.95] ${
                    index === 1 ? 'text-[#3A3B5A]' : 'text-zinc-900'
                  }`}
                >
                  {item}
                </motion.h1>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Bottom Meta Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.2 }}
          className="border-t border-zinc-300 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-['Neue_Montreal']"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 text-sm text-zinc-600">
            <span className="font-medium text-zinc-900">2025 Undergraduate in CSE-AIML</span>
            <span className="hidden sm:inline-block text-zinc-300">•</span>
            <span>Chandigarh University</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1KyZ_xxPTwc1fIMdVfT1ZvOQRepVxEjjv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="px-6 py-2.5 rounded-full border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-900 group-hover:bg-[#3A3B5A] group-hover:border-[#3A3B5A] group-hover:text-white transition-all duration-300">
                My Resume
              </div>
              <div className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-900 group-hover:bg-[#3A3B5A] group-hover:border-[#3A3B5A] group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Landing;
