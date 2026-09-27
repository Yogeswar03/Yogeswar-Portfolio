import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Terminal,
      title: 'Academic Foundation',
      desc: 'B.Tech in CSE (AIML) at Chandigarh University. Strong foundation in data structures, algorithms, and deep learning.',
    },
    {
      icon: Code2,
      title: 'Frontend Engineering',
      desc: 'Deep focus on React, Tailwind CSS, and Framer Motion to build fluid, high-performance web applications.',
    },
    {
      icon: Cpu,
      title: 'AI & Vision Systems',
      desc: 'Experience training computer vision models, NLP sentiment classifiers, and autonomous lane detection pipelines.',
    },
    {
      icon: Sparkles,
      title: 'Craft & Usability',
      desc: 'Obsessed with tactile micro-interactions, responsive design systems, and thoughtful UX architecture.',
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen py-20 sm:py-24 bg-[#9A8CA4] text-zinc-900 rounded-t-3xl rounded-b-3xl relative z-20 -mt-10 shadow-2xl overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Section Heading */}
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Oswald'] font-bold text-5xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#1f2421]"
          >
            About Me
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8 font-['Neue_Montreal']">
            <p className="text-xl sm:text-2xl text-zinc-900 font-light leading-relaxed">
              I am a Computer Science graduate specializing in AI & Machine Learning with a deep passion for frontend craftsmanship. I bridge the gap between intelligent backend models and sleek, memorable user interfaces.
            </p>

            {/* Value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 hover:bg-white/60 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#3A3B5A] text-white flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Oswald'] font-bold text-lg uppercase tracking-tight text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-800 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Signature Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[340px] aspect-[4/5] rounded-3xl bg-[#3A3B5A] relative overflow-hidden shadow-2xl border border-black/10 group"
            >
              {/* Giant Background Monogram / Name */}
              <span className="absolute top-10 left-6 font-['Oswald'] font-black text-6xl sm:text-7xl text-white/20 uppercase tracking-tighter select-none leading-none">
                YOGESWAR
              </span>

              {/* Real Photo */}
              <img
                src="/profile_pic.png"
                alt="Yogeswar Reddy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                onError={(e) => {
                  e.currentTarget.src = '/image.png';
                }}
              />

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 flex items-center justify-between">
                <div>
                  <p className="font-['Oswald'] uppercase font-bold text-white text-lg tracking-wide">
                    Yogeswar Reddy
                  </p>
                  <p className="text-xs text-zinc-300 font-['Neue_Montreal']">
                    B.Tech CSE-AIML • 2025
                  </p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Massive Signature Bottom Text */}
        <div className="mt-20 pt-8 border-t border-black/10 overflow-hidden">
          <motion.h3
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Oswald'] font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] uppercase tracking-tighter leading-none"
          >
            <span className="text-[#3A3B5A]">YOGESWAR</span> REDDY.
          </motion.h3>
        </div>
      </div>
    </section>
  );
}

export default About;
