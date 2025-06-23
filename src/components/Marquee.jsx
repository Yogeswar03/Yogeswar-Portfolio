import { motion } from 'motion/react';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full bg-[#3A3B5A] z-3 text-white overflow-hidden  rounded-t-2xl pt-[60px] pb-[140px] mt-50">
      <div className="border-t-2 border-b-2 border-zinc-500 whitespace-nowrap flex -mt-3 ">
        <motion.div
          className="flex shrink-0"
          animate={{ x: ['0%', '-50%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 40, // 20s forward, 20s reverse
            repeat: Infinity,
          }}
        >
          <div className="flex uppercase pb-9 -mt-3 text-center font-['oswald']">
            {Array(2).fill(0).map((_, idx) => (
              <React.Fragment key={idx}>
                <h1 className="text-[36vh] leading-none font-semibold tracking-tighter pr-[5vw]">Frontend Developer |</h1>
                <h1 className="text-[36vh] leading-none font-semibold tracking-tighter pr-[5vw]">Machine Learning |</h1>
                <h1 className="text-[36vh] leading-none font-semibold tracking-tighter pr-[5vw]">UI/UX Designer |</h1>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
