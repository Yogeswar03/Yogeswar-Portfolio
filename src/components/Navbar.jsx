import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#project' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  const getHref = (hash) => {
    return isHomePage ? hash : `/${hash}`;
  };

  const handleNavClick = (e, item) => {
    if (isHomePage && item.href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(item.href);
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -30, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-zinc-200/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
            aria-label="Yogeswar Reddy - Home"
          >
            <img
              src="/logo2_yr.png"
              alt="Yogeswar Logo"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/yr1_logo.png';
              }}
            />
            <span className="font-['Oswald'] text-xl font-bold tracking-tight text-[#3A3B5A] hidden sm:inline-block">
              YOGESWAR<span className="text-[#f58549]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={getHref(item.href)}
                onClick={(e) => handleNavClick(e, item)}
                className="group relative py-1 text-sm font-medium tracking-wide text-zinc-700 hover:text-zinc-950 transition-colors uppercase"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3A3B5A] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}

            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3A3B5A] text-white text-xs uppercase tracking-wider font-semibold hover:bg-black transition-all duration-300 shadow-sm hover:shadow"
            >
              <span>All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-800 hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3A3B5A]"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Slide-in */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <img src="/logo2_yr.png" alt="Logo" className="h-8 w-auto" />
                    <span className="font-['Oswald'] text-lg font-bold text-[#3A3B5A]">YOGESWAR</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={getHref(item.href)}
                      onClick={(e) => handleNavClick(e, item)}
                      className="px-4 py-3 rounded-xl text-base font-semibold uppercase tracking-wider text-zinc-800 hover:bg-zinc-100 hover:text-[#3A3B5A] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Link
                    to="/projects"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-[#3A3B5A] text-white text-base font-semibold uppercase tracking-wider"
                  >
                    <span>All Projects (10)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200 text-xs text-zinc-500">
                <p>Yogeswar Reddy • Frontend Engineer</p>
                <a
                  href="mailto:yogi122502@gmail.com"
                  className="mt-1 block text-zinc-900 font-medium hover:underline"
                >
                  yogi122502@gmail.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
