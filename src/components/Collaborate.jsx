import React from 'react';
import { motion } from 'framer-motion';

function Collaborate() {
  return (
    <section
      id="contact"
      className='w-full min-h-screen font-["oswald"] rounded-t-2xl relative -mt-20 lg:mt-20'
    >
      <div className="w-full h-full flex items-center justify-center flex-col gap-[30px] bg-[#b892ff] rounded-t-2xl px-4">
        <div className="flex flex-col gap-10 pt-20">
          <div className="flex flex-col items-center">
            <motion.h1
              className="text-[80px] leading-[100px] xl:text-[150px] xl:leading-[130px] lg:text-[100px] lg:leading-[110px] md:text-[70px] md:leading-[80px] sm:text-[50px] sm:leading-[60px] text-center font-bold uppercase pointer-events-none tracking-[-2px]"
              initial={{ y: 50, opacity: 0 }} // Initial position and opacity
              whileInView={{ y: 0, opacity: 1 }} // Animate to final position and opacity
              transition={{ duration: 0.5, delay: 0.1 }} // Duration and delay for the first word
              viewport={{ once: true }} // Allow animation to trigger multiple times
            >
              let us
            </motion.h1>
            <motion.h1
              className="text-[80px] leading-[100px] xl:text-[150px] xl:leading-[130px] lg:text-[100px] lg:leading-[110px] md:text-[70px] md:leading-[80px] sm:text-[50px] sm:leading-[60px] text-center font-bold uppercase pointer-events-none tracking-[-2px]"
              initial={{ y: 50, opacity: 0 }} // Initial position and opacity
              whileInView={{ y: 0, opacity: 1 }} // Animate to final position and opacity
              transition={{ duration: 0.5, delay: 0.3 }} // Duration and delay for the second word
              viewport={{ once: true }} // Allow animation to trigger multiple times
            >
              work
            </motion.h1>
            <motion.h1
              className="text-[80px] leading-[100px] xl:text-[150px] xl:leading-[130px] lg:text-[100px] lg:leading-[110px] md:text-[70px] md:leading-[80px] sm:text-[30px] sm:leading-[60px]  text-center font-bold uppercase pointer-events-none tracking-[-2px]"
              initial={{ y: 50, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true}} 
            >
              together
            </motion.h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 pb-7">
          <ContactButton
            href="https://www.linkedin.com/in/yogeswar-reddy"
            label="LinkedIn"
            iconStroke="black"
            target="_blank"
          />

          <ContactButton
            href="mailto:yogi122502@gmail.com"
            label="Email"
            iconStroke="black"
            target="_blank"
          />

          <ContactButton
            href="https://api.whatsapp.com/send/?phone=%2B916305568170&text&type=phone_number&app_absent=0"
            label="WhatsApp"
            iconStroke="black"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}

const ContactButton = ({ href, label, iconStroke, target }) => {
  return (
    <a href={href} target={target}>
      <div className="group flex items-center border border-black rounded-full px-4 py-2 bg-transparent transition-all duration-300 ease-[.255, .61,.355,1] hover:bg-black hover:rounded-full">
        <p className="text-black group-hover:text-white uppercase mr-4 transition-colors duration-300">
          {label}
        </p>
        <div className="relative w-[45px] h-[45px] flex items-center justify-center">
          <div className="bg-black rounded-full w-[12px] h-[12px] group-hover:scale-0 transition-transform duration-300 absolute"></div>
          <div className="bg-white rounded-full w-[45px] h-[45px] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={iconStroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Collaborate;
