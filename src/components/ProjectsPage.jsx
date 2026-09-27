import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import Collaborate from './Collaborate';
import Footer from './Footer';

const categories = ['All', 'Web Apps', 'AI & ML', 'Tools'];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on active category & search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-between">
      {/* Dedicated Header for Projects Catalog */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-zinc-200/80 py-4 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A3B5A] hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link to="/" className="flex items-center gap-2">
            <img src="/logo2_yr.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-['Oswald'] text-lg font-bold text-[#3A3B5A]">
              YOGESWAR<span className="text-[#f58549]">.</span>
            </span>
          </Link>

          <a
            href="#contact"
            className="text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-[#3A3B5A] text-white hover:bg-black transition-all"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-28 pb-16 flex-1 max-w-7xl mx-auto px-6 sm:px-10 w-full">
        {/* Hero Title Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#3A3B5A] to-[#2b2c45] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden my-6">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs uppercase tracking-widest font-semibold mb-4 border border-white/15">
                <Layers className="w-3.5 h-3.5 text-[#f58549]" />
                <span>Complete Project Archive</span>
              </div>
              <h1 className="font-['Oswald'] text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight">
                All Projects
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
                Full repository of commercial web applications, computer vision models, NLP systems, and developer utility experiments.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-3">
              <span className="font-['Oswald'] text-3xl font-bold text-[#f58549]">
                {projectsData.length}
              </span>
              <span className="text-xs uppercase tracking-wider text-zinc-300 font-medium">
                Engineered Works
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8 pb-8 border-b border-zinc-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3A3B5A] text-white shadow'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-zinc-200 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#3A3B5A] focus:border-transparent transition-all shadow-sm placeholder:text-zinc-400"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="py-4 flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span>
            Showing {filteredProjects.length} of {projectsData.length} projects
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#3A3B5A] hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-4"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-['Oswald'] text-2xl font-bold uppercase text-zinc-800">
              No matching projects found
            </h3>
            <p className="text-zinc-500 text-sm mt-1">
              Try adjusting your search terms or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#3A3B5A] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer and Contact Sections */}
      <div>
        <Collaborate />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;
