import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

export function Projects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="w-full bg-[#f8f9fa] rounded-t-3xl relative z-20 shadow-[0_-30px_70px_rgba(0,0,0,0.07)] -mt-8">
      <section id="project" className="w-full py-24 px-6 sm:px-12 md:px-16 max-w-[1400px] mx-auto overflow-visible relative">
        {/* Section Header */}
        <div className="w-full border-b border-zinc-400 pb-8 mb-16 flex items-baseline justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Oswald'] font-bold text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-zinc-900"
          >
            Featured Projects
          </motion.h2>

          <span className="font-mono text-sm text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
            (06 Selected)
          </span>
        </div>

        {/* 2-Column Balanced Gallery (Row 1: Cards 0 & 1, Row 2: Cards 2 & 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start overflow-visible">
          {featured.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: (idx % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-visible"
            >
              <ProjectCard
                project={project}
                index={idx}
                priority={idx < 2}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="w-full flex items-center justify-center mt-20 pt-8 border-t border-zinc-200">
          <Link to="/projects">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 border border-zinc-900 rounded-full px-6 py-3.5 bg-white hover:bg-zinc-900 transition-colors duration-300 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <span className="font-['Oswald'] font-bold text-sm tracking-wider uppercase text-zinc-900 group-hover:text-white transition-colors duration-300">
                View All Projects ({projectsData.length})
              </span>
              <div className="w-8 h-8 rounded-full bg-zinc-900 group-hover:bg-white text-white group-hover:text-zinc-900 flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Projects;
