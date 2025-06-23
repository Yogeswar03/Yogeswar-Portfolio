import { motion, useAnimation } from 'framer-motion'; 
import React from 'react';
import ProjectsPage from './ProjectsPage';
import { Link } from 'react-router-dom';

function Projects() {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: '0' });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  const ButtonWithHoverEffect = ({ link, text }) => {
    const scope = useAnimation(); 

    const handleButtonHoverStart = () => {
      scope.start({ scale: 1, backgroundColor: 'black' }); 
    };

    const handleButtonHoverEnd = () => {
      scope.start({ scale: 0, backgroundColor: 'rgba(82, 82, 82, 0)' });
    };

    return (
      <a 
        href={link} 
        target='_blank' 
        className="relative flex items-center justify-center p-1 w-fit rounded-full font-light border border-zinc-500 text-sm uppercase overflow-hidden group"
        onMouseEnter={handleButtonHoverStart}
        onMouseLeave={handleButtonHoverEnd}
      >
        <motion.span 
          initial={{ scale: 0 }} 
          animate={scope} 
          transition={{ duration: 0.3, ease: [0.255, 0.61, 0.355, 1] }}
          className="absolute inset-0 rounded-full bg-zinc-500 z-0"
        ></motion.span>
        <span className="relative z-10 px-3 py-1 text-zinc-800 transition-colors duration-300 group-hover:text-white">
          {text}
        </span>
      </a>
    );
  };

  return (
    <section id='project'>
      <div className='w-full py-15 font-["Neue_Montreal"] overflow-hidden'>
        <div className='w-full px-5 md:px-20 border-b border-zinc-400 py-10'>
          <h1 className='text-5xl font-light tracking-tight text-zinc-800'>Featured Projects</h1>
        </div>
        <div className='px-5 md:px-20'>
          <div className='cards flex flex-wrap justify-center items-center gap-5 '>
                 
                        <div className='card-1 w-full sm:w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] flex flex-col mt-15 lg:mt-[130px] '>
                          <div className='name flex gap-2 items-center justify-start pb-3 '>
                            <span className='w-3 h-3 rounded-full bg-black'></span>
                            <h1 className='uppercase font-light text-lg md:text-xl'>EduLearn Ai</h1>
                          </div>
                          
                          <motion.div 
                            onHoverStart={() => handleHover(0)} 
                            onHoverEnd={() => handleHoverEnd(0)} 
                            className="w-full h-[35vh] md:h-[43vh] lg:h-[68vh] relative"
                            style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }}  
                          >
                            <div>                
                              <div className="absolute left-0 top-0 w-1/2 h-full bg-[#eec170] rounded-l-xl  z-0"></div>
                              <div className="absolute right-0 top-0 w-1/2 h-full bg-[#f58549] rounded-r-xl z-0"></div>
                            </div>
                            <h1 className='absolute overflow-hidden left-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 -translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                              {"edulearn ai".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                              )}
                            </h1>
                            <div className='absolute z-10 p-10 rounded-2xl'>
                              <a href="https://www.github.com/Yogeswar03" target='_blank'>
                                <img src="/projectImages/edulearn.png" alt="EduLearn Ai" className='rounded-2xl h-[27vh] md:h-[45vh] lg:h-[55vh]  top-1/2 left-1/2 ' />
                              </a>
                            </div>
                          </motion.div>
                          
                          <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://www.github.com/Yogeswar03" text="live project" />
                            <ButtonWithHoverEffect link="https://www.github.com/Yogeswar03" text="github" />
                          </div>
                        </div>
                
                        <div className='card-2 w-full sm:w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-30 '>
                          <div className='name flex gap-2 items-center justify-start pb-3'>
                            <span className='w-3 h-3 rounded-full bg-black'></span>
                            <h1 className='uppercase font-normal text-lg md:text-xl'>Weather Forecast</h1>
                          </div>
                          <motion.div 
                            onHoverStart={() => handleHover(1)} 
                            onHoverEnd={() => handleHoverEnd(1)} 
                            className="w-full h-[35vh] md:h-[43vh] lg:h-[68vh] relative"
                            style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                          >
                            <div>                
                              <div className="absolute left-0 top-0 w-full h-1/2 bg-[#7a9e9f] rounded-t-xl  z-0"></div>
                              <div className="absolute right-0 bottom-0 w-full h-1/2 bg-[#b8d8d8] rounded-b-xl z-0"></div>
                            </div>
                            <h1 className='absolute overflow-hidden right-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                              {"weatherforecast".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                              )}
                            </h1>
                            <div className=' absolute p-10 rounded-xl'>
                              <a href="https://github.com/Yogeswar03/WeatherApp" target='_blank'>
                              <img src="/projectImages/weather1.png" alt="Discover Chandigarh" className='rounded-2xl h-[27vh] md:h-[45vh] lg:h-[55vh]  top-1/2 left-1/2  object-contain' />
                              </a>
                            </div>
                          </motion.div>
                          <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://weather-forecast-yogi092503-gmailcoms-projects.vercel.app/" text="live project" />
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/WeatherApp" text="github" />
                          </div>
                        </div>
               
                        <div className='card-3 w-full sm:w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20'>
                                      <div className='name flex gap-2 items-center justify-start pb-3'>
                                        <span className='w-3 h-3 rounded-full bg-black'></span>
                                        <h1 className='uppercase text-lg md:text-xl'>Lane detection</h1>
                                      </div>
                                      <motion.div 
                                        onHoverStart={() => handleHover(2)} 
                                        onHoverEnd={() => handleHoverEnd(2)} 
                                        className='w-full h-[35vh] md:h-[43vh] lg:h-[68vh] relative'
                                        style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                                      >
                                       <div>                
                                          <div className="absolute left-0 top-0 w-full h-1/2 bg-[#ff6d00] rounded-t-xl  z-0"></div>
                                          <div className="absolute right-0 bottom-0 w-full h-1/2 bg-[#f79256] rounded-b-xl z-0"></div>
                                        </div>
                                        <h1 className='absolute overflow-hidden left-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 -translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                                          {"lanedetection".split('').map((item, index) =>
                                            <motion.span initial={{ y: "100%" }} animate={cards[2]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                                          )}
                                        </h1>
                                        <div className='absolute z-10 w-full p-10 object-contain'>
                                          <a href="https://github.com/Yogeswar03/Precision-Pathways-for-Safer-Driving" target='_blank'>
                                            <img src="/projectImages/rrld.png" alt="lane detection" className='rounded-xl  h-[27vh] md:h-[45vh] lg:h-[55vh] ' />
                                          </a>
                                        </div>
                                      </motion.div>
                                      <div className='flex gap-2 mt-4 items-center justify-start'>
                                        <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Precision-Pathways-for-Safer-Driving" text="live project" />
                                        <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Precision-Pathways-for-Safer-Driving" text="github" />
                                      </div>
                        </div>
                        
                        <div className='card-4 w-full sm:w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20'>
                          <div className='name flex gap-2 items-center justify-start pb-3'>
                            <span className='w-3 h-3 rounded-full bg-black'></span>
                            <h1 className='uppercase font-normal text-lg md:text-xl'>discoverchandigarh</h1>
                          </div>
                          <motion.div 
                            onHoverStart={() => handleHover(3)} 
                            onHoverEnd={() => handleHoverEnd(3)} 
                           className="w-full h-[35vh] md:h-[43vh] lg:h-[68vh] relative"
                            style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                          >
                            <div className="absolute left-0 top-0 w-full h-full bg-[#5b8e7d] rounded-xl  z-0"></div>
                            <h1 className='absolute overflow-hidden right-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                              {"discoverchandigarh".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={cards[3]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                              )}
                            </h1>
                            <div className='absolute  z-10  w-full p-10 object-contain'>
                              <a href="https://github.com/Yogeswar03/discoverChandigarh" target='_blank'>
                                <img src="/projectImages/ixc.png" alt="Weather Forecast" className='rounded-xl  h-[27vh] md:h-[45vh] lg:h-[55vh]' />
                              </a>
                            </div>
                          </motion.div>
                          <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://discover-chandigarh.vercel.app/" text="live project" />
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/discoverChandigarh" text="github" />
                          </div>
                        </div>

          </div>
        </div>

        <div className="w-full flex items-center justify-center -mt-50 md:mt-10 lg:mt-30">
          <a to='/projects' target="_blank" rel="noopener noreferrer">
            <div className="group flex items-center border border-black rounded-full px-3 py-2 bg-white transition-all duration-300 ease-[.255, .61,.355,1] hover:bg-black hover:rounded-full">
              <p className="text-black group-hover:text-white uppercase mr-4 transition-colors duration-300">
                View All Projects
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
                    stroke="black"
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
        </div>
      </div>
    </section>
  );
}

export default Projects;
