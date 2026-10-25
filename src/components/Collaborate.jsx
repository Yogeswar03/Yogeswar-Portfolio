import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

function ActionPill({ href, label, target = '_blank' }) {
  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <div className="group flex items-center border border-black rounded-full px-5 py-2.5 bg-white/70 backdrop-blur-sm transition-all duration-300 ease-[.255,.61,.355,1] hover:bg-black hover:rounded-full cursor-pointer shadow-sm hover:shadow-lg">
        <p className="font-['Oswald'] text-black group-hover:text-white uppercase text-sm tracking-wider mr-4 transition-colors duration-300">
          {label}
        </p>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="bg-black rounded-full w-2.5 h-2.5 group-hover:scale-0 transition-transform duration-300 absolute" />
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <ArrowUpRight className="w-4 h-4 text-black" />
          </div>
        </div>
      </div>
    </a>
  );
}

export function Collaborate() {
  const [copied, setCopied] = useState(false);
  const email = 'yogi122502@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const words = [
    { text: 'let us', delay: 0.1 },
    { text: 'work', delay: 0.25 },
    { text: 'together', delay: 0.4 },
  ];

  return (
    <section id="contact" className="w-full relative z-20 mt-16 sm:mt-24">
      <div className="w-full min-h-[85vh] flex items-center justify-center flex-col gap-10 bg-[#b892ff] rounded-t-3xl px-6 py-20 text-zinc-900 shadow-2xl">
        {/* Giant Kinetic Wordmark */}
        <div className="flex flex-col items-center select-none">
          {words.map(({ text, delay }) => (
            <div key={text} className="overflow-hidden leading-none">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-['Oswald'] font-black text-6xl sm:text-8xl md:text-[13vw] uppercase tracking-tighter text-center leading-[0.88]"
              >
                {text}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Copy Email Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-md font-mono text-xs sm:text-sm"
        >
          <span className="text-zinc-900 select-all font-medium">{email}</span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-sans uppercase font-bold hover:bg-black transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <ActionPill
            href="https://www.linkedin.com/in/ccyogeswar-reddy2502"
            label="LinkedIn"
          />
          <ActionPill
            href="mailto:yogi122502@gmail.com"
            label="Email Me"
            target="_self"
          />
          <ActionPill
            href="https://api.whatsapp.com/send/?phone=%2B916305568170&text&type=phone_number&app_absent=0"
            label="WhatsApp"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Collaborate;
