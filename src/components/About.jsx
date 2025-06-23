import { motion } from 'motion/react';
import React from 'react';

function About() {
  return (
    <div
      id='about'
      data-scroll
      data-scroll-section
      data-scroll-speed=".3"
      className="w-full min-h-screen font-['oswald'] py-20 bg-[#9A8CA4] rounded-t-2xl z-10 relative -mt-[33vh] -mb-[30vh]"
    >
      <h1 className="font-bold px-6 sm:px-10 text-4xl sm:text-5xl md:text-6xl mb-10">About Me</h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 px-6 md:px-12">
        <div className="md:w-1/2 w-full font-['Neue_Montreal'] text-base sm:text-lg md:text-xl">
          <ul className="list-disc space-y-4 px-4 sm:px-8">
            <li>Recent Computer Science graduate from Chandigarh University.</li>
            <li>Focused on frontend development using React.js, Tailwind CSS, and Framer Motion.</li>
            <li>Passionate about building responsive, user-friendly interfaces with smooth animations.</li>
            <li>Dedicated to writing clean, maintainable code and delivering high-quality web experiences.</li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full flex justify-center md:justify-end lg:mr-30">
          <div className="h-[60vw] w-[60vw] md:h-[20vw] md:w-[20vw] border border-zinc-600 rounded-xl bg-[#3a3b5a] relative overflow-hidden">
            <p className="text-3xl sm:text-4xl md:text-5xl text-white mt-25 ml-15 lg:mt-25 lg:ml-7  font-bold tracking-tighter z-0">YOGESWAR</p>
            <img
              src="/profile_pic.png"
              alt="picture"
              className="absolute  w-full h-auto left-1/2 top-0 translate-x-[-50%] object-contain z-10"
            />
          </div>
        </div>
      </div>

      <div className="p-5 sm:pl-20 sm:ml-10 mt-10 pl-15">
        <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold font-["oswald"] tracking-tighter uppercase p-4'>
          <span className='text-[#3a3b5a]'>yogeswar</span> reddy.
        </h1>
      </div>
    </div>
  );
}

export default About;
