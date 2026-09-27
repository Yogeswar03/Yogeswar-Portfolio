import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer id="footer" className="w-full bg-white text-zinc-900 rounded-t-3xl pt-20 pb-12 relative z-30 shadow-2xl">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-zinc-200">
          {/* Left Column: Big Name & IST Clock */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-['Oswald'] font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
                YOGESWAR
              </h2>
              <h2 className="font-['Oswald'] font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.9] text-[#3A3B5A]">
                REDDY.
              </h2>
            </div>

            {/* Live IST clock */}
            <div className="mt-8 inline-flex items-center gap-2.5 text-xs font-mono text-zinc-600 border border-zinc-200 px-3.5 py-1.5 rounded-full w-fit bg-zinc-50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-400">IST:</span>
              <span className="font-semibold text-zinc-900">{time || '00:00:00 AM'}</span>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="lg:col-span-7 flex flex-col justify-between font-['Neue_Montreal']">
            <div>
              <h3 className="font-['Oswald'] font-bold text-3xl sm:text-4xl uppercase tracking-tight text-zinc-900 mb-8">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                {/* Navigation */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-1">
                    Index
                  </span>
                  <a href="#about" className="hover:text-[#3A3B5A] transition-colors">About</a>
                  <a href="#project" className="hover:text-[#3A3B5A] transition-colors">Projects</a>
                  <a href="#skills" className="hover:text-[#3A3B5A] transition-colors">Skills</a>
                  <a href="#contact" className="hover:text-[#3A3B5A] transition-colors">Contact</a>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-1">
                    Presence
                  </span>
                  <a
                    href="https://www.linkedin.com/in/yogeswar-reddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3A3B5A] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.github.com/Yogeswar03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3A3B5A] transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1KyZ_xxPTwc1fIMdVfT1ZvOQRepVxEjjv/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3A3B5A] transition-colors"
                  >
                    Resume
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B916305568170&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3A3B5A] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-1">
                    Location
                  </span>
                  <span className="text-zinc-700">Hyderabad / Chandigarh</span>
                  <span className="text-zinc-500">India</span>
                </div>
              </div>
            </div>

            {/* Direct Email */}
            <div className="pt-8 mt-8 border-t border-zinc-100 flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Direct
              </span>
              <a
                href="mailto:yogi122502@gmail.com"
                className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-zinc-900 hover:text-[#3A3B5A] transition-colors"
              >
                yogi122502@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-['Neue_Montreal'] text-xs text-zinc-500">
          <div className="flex items-center gap-4">
            <img
              src="/logo2_yr.png"
              alt="YR Logo"
              className="h-9 w-9 object-contain"
              onError={(e) => {
                e.currentTarget.src = '/yr1_logo.png';
              }}
            />
            <span>© {new Date().getFullYear()} Yogeswar Reddy. All rights reserved.</span>
          </div>

          {/* Back to top */}
          <button
            onClick={() => {
              if (window.lenis) {
                window.lenis.scrollTo(0, { duration: 1.5 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-all cursor-pointer"
          >
            <span className="uppercase font-semibold tracking-wider text-[11px]">
              Back to Top
            </span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
