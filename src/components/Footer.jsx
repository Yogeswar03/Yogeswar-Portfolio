import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer id='footer' className='w-full min-h-screen z-30 relative rounded-t-2xl bg-white'>
      <div className='w-full h-full px-6 sm:px-10 md:px-10 lg:pt-20 flex flex-col md:flex-row gap-10 rounded-2xl'>

        <motion.div
          className='md:w-1/2 w-full font-["oswald"] font-bold tracking-tighter flex flex-col uppercase text-5xl sm:text-6xl md:text-7xl px-4 md:px-10'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h1>Yogeswar</h1>
          <h1>Reddy</h1>
        </motion.div>

        <motion.div
          className='md:w-1/2 w-full px-4 font-["oswald"] md:px-5 font-bold text-3xl sm:text-4xl md:text-6xl'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className='uppercase text-4xl sm:text-5xl tracking-tighter'>connect with me</h1>

          <div className='pt-10 font-["Neue_Montreal"] text-base sm:text-lg flex flex-col font-light p-2 capitalize'>
            <p className='pb-2'>M :</p>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Experience</a>
            <a href="#">Contact</a>
          </div>

          <div className='flex flex-col sm:flex-row font-["Neue_Montreal"] justify-between'>
            <div className='pt-10 text-base sm:text-lg flex flex-col p-2 font-light capitalize'>
              <p className='pb-2'>P :</p>
              <a href="https://www.linkedin.com/in/yogeswar-reddy" target='_blank'>LinkedIn</a>
              <a href="https://drive.google.com/file/d/14BB6_cQ8dFLz84E5nSdXOeThkvavBHDF/view?usp=sharing" target='_blank'>Resume</a>
              <a href="https://www.github.com/Yogeswar03" target='_blank'>GitHub</a>
              <a href="https://api.whatsapp.com/send/?phone=%2B916305568170&text&type=phone_number&app_absent=0" target='_blank'>WhatsApp</a>
              <a href="https://www.instagram.com/yogeswar_reddy_25" target='_blank'>Instagram</a>
            </div>

            <div className='pt-10 font-["Neue_Montreal"] text-base sm:text-lg flex flex-col p-2 font-light capitalize'>
              <p className='pb-2'>L :</p>
              <a href="https://www.google.com/search?q=hyderabad" target='_blank'>Hyderabad,</a>
              <a href="https://www.google.com/search?q=telangana" target='_blank'>Telangana,</a>
              <a href="https://www.google.com/search?q=india" target='_blank'>India</a>
            </div>
          </div>

          <div className='pt-10 font-["Neue_Montreal"] text-base sm:text-lg flex flex-col p-2 font-light'>
            <p className='pb-2'>E:</p>
            <a href="mailto:yogi122502@gmail.com">yogi122502@gmail.com</a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='w-full mt-10 font-["Neue_Montreal"] flex flex-col sm:flex-row justify-between items-center gap-6 font-light px-6 md:px-20 border-t pt-6'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className='flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto'>
          <img src="logo2_yr.png" alt="logo" className='h-[100px] w-[100px] object-contain' />
          <div className='text-center sm:text-left text-zinc-400 text-base sm:text-md flex flex-col sm:flex-row gap-2 sm:gap-10'>
            <p>© Yogeswar Reddy Portfolio</p>
            <p>Website by Yogeswar</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
