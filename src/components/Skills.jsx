import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const skillsData = [
  {
    id: 0,
    title: 'Web Development',
    sub: 'Frontend & Full-Stack Core',
    type: 'Technologies',
    skills: [
      'React.js',
      'Framer Motion',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'JavaScript (ES6+)',
      'Redux Toolkit',
      'Node.js',
      'Next.js',
      'REST APIs',
      'MySQL',
    ],
  },
  {
    id: 1,
    title: 'Languages',
    sub: 'Programming & Scripting',
    type: 'Coding Languages',
    skills: ['JavaScript', 'Python', 'C++', 'SQL'],
  },
  {
    id: 2,
    title: 'Tools & Workflow',
    sub: 'Prototyping & Version Control',
    type: 'Ecosystem',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Vercel', 'Canva'],
  },
  {
    id: 3,
    title: 'Coursework & AI',
    sub: 'Specialized Knowledge',
    type: 'Core Concepts',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Database Management Systems',
      'Computer Networks',
    ],
  },
];

export function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="skills" className="w-full py-24 px-6 sm:px-12 md:px-16 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="w-full border-b border-zinc-400 pb-8 mb-8 flex items-baseline justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Oswald'] font-bold text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-zinc-900"
        >
          My Skills
        </motion.h2>

        <span className="font-mono text-sm text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
          (Capabilities)
        </span>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-zinc-300 font-['Neue_Montreal']">
        {skillsData.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={item.id} className="py-6 sm:py-8 transition-colors">
              <div
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <span className="font-mono text-xs text-zinc-400 font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-['Oswald'] font-bold text-2xl sm:text-3xl uppercase tracking-tight text-zinc-900 group-hover:text-[#3A3B5A] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-zinc-500 hidden md:inline-block">
                    • {item.sub}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 hidden sm:inline-block">
                    {item.type}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-zinc-700" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Expandable Skills Pill Cloud */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 sm:pt-8 flex flex-wrap gap-2 sm:gap-2.5 sm:pl-14">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-[#3A3B5A] hover:text-white border border-zinc-200 text-xs sm:text-sm font-medium text-zinc-800 transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
