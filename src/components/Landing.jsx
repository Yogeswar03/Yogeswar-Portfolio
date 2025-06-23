import { motion } from 'motion/react';
import React from 'react';

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-full z-2 flex flex-col items-start justify-center mt-20'>
      <div className='text  text-[10vw]  lg:text-[6.3vw] pl-6 sm:pl-10 font-["oswald"] tracking-tighter mt-10 sm:mt-20 md:mt-16 lg:mt-20 mb-10 text-left'>
        {["Hello I Am", "Yogeswar", "I develop web apps"].map((item, index) => {
          return (
            <div className='masker overflow-hidden ' key={index}>
              <div className='w-fit flex items-center'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                    className=' w-[10vw] h-[8vw] lg:w-[8vw] lg:h-[5.5vw] relative ml-4 -mr-2 mt-2 rounded object-contain'
                  >
                    <img src="/image.png" alt="yogi" className='w-full h-full ' />
                  </motion.div>
                )}
                <h1 className={`leading-[10vw] lg:leading-[5.5vw] uppercase tracking-tighter px-4 font-bold ${index === 1 ? "text-[#3A3B5A]" : ""}`}>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className='border-t border-zinc-400 mt-10 flex flex-col sm:flex-row items-center justify-between w-full p-6 sm:p-10 font-["Neue_Montreal"]'>
        {["2025 Undergraduate in CSE-AIML", "Chandigarh University"].map((item, index) => (
          <p className='text-base sm:text-lg font-thin tracking-tight leading-none py-2 sm:mr-4 text-center sm:text-left' key={index}>
            {item}
          </p>
        ))}

        <div className='resume flex flex-row sm:flex-row gap-4 sm:gap-3 cursor-pointer items-center justify-center group mt-4 sm:mt-0'>
          <a href="https://drive.google.com/file/d/10_BSB-4pQyvcJkuushesLnGVzOAmw29N/view?usp=sharing" target='_blank' className='flex flex-row sm:flex-row gap-4 sm:gap-3 cursor-pointer items-center justify-center group mt-4 sm:mt-0'>
          <div className='px-5 py-1.5 rounded-full border border-zinc-500 font-medium group-hover:text-[#3A3B5A] uppercase transition-colors'>
            My Resume
          </div>
          <div className='w-10 h-10 rounded-full flex items-center justify-center border border-zinc-500 group-hover:text-white group-hover:bg-[#3A3B5A] transition-all duration-300 ease-[.215,.61,.355,1]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
