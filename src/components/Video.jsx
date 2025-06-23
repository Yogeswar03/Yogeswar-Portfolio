import React from 'react';
import { motion } from 'framer-motion';

function Video() {
  return (
    <motion.section
      className="w-full h-full overflow-hidden relative z-0  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      transition={{ duration: .1 }}  
    >
      <div
        data-scroll 
        data-scroll-section
        data-scroll-speed="-.9"
        className="w-full h-screen overflow-hidden bg-[#1d3557]"
      >
        <div
          className="w-full h-full bg-cover bg-center "
           style={{ backgroundImage: `url("/banner_img.png")` }} 
        ></div>
      </div>
    </motion.section>
  );
}

export default Video;
