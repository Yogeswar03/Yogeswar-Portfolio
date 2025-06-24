import { motion, useAnimation } from 'framer-motion'; 
import Collaborate from './Collaborate';
import Footer from './Footer';
import { useRef , useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function ProjectsPage() {

 
   const scrollRef = useRef(null);

   useEffect(() => {
      if (!scrollRef.current) return;

   const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.05,
    });

    return () => {
      if (scroll) scroll.destroy();
       };
     }, []);

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
        className="relative z-5 flex items-center justify-center p-1 w-fit rounded-full font-light border border-zinc-500 text-sm uppercase overflow-hidden group"
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
    <section id='projects'>
        <nav  className='w-full h-[8vh] padding-x fixed z-[999] top-0 left-0 backdrop-blur-[7px] flex items-center justify-between font-light font-["Neue_Montreal"]'>
           <div className='logo w-[50%] ml-9 flex'>
             <a href='/'>
               <img src="/logo2_yr.png" alt="logo" height={'150px'} width={'150px'} />
             </a>
           </div>
           <div ref={scrollRef}  className='sm:flex hidden gap-x-[20px] w-[50%] font-light'>
            <a href='#contact' className='w-fit font-lg capitalize flex flex-col px-120'>
              <div className='group overflow-hidden cursor-pointer transition-all ease-in-out duration-200'>
                <div className='relative transition-all ease-in-out duration-500'>
                  <div>
                     <h1 className='translate-y-[0%] group-hover:translate-y-[-100%] absolute left-0 transition-all ease-in-out duration-500'>
                       <div className='translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500'>Contact</div>
                     </h1>
                     <h1 className='transition-all ease-in-out duration-500'>
                       <div className='translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500'>Contact</div>
                     </h1>
                </div>
                <div className="mt-1 h-[2px] w-0 bg-zinc-800 group-hover:w-full transition-all duration-500 ease-in-out"></div>
               </div>
             </div>
           </a>
         </div>
      </nav>

      <div ref={scrollRef} className='w-full  font-["Neue_Montreal"] overflow-hidden'>
        <div className='w-full px-5 md:px-20 border-b border-zinc-400 py-30 bg-[#b892ff] flex gap-5 items-end justify-start'>
            <h1 className='  text-5xl lg:text-8xl  font-bold tracking-tighter text-black uppercase mt-10 pt-10'>My Projects</h1>
          <div className=' py-3 text-xl'>(10)</div>
        </div>
       <div className='px-5 md:px-20 '>
          <div className='cards flex flex-wrap justify-center items-center gap-5 mt-10 lg:mt-10 '>   
                <div className='card-1 w-full sm:w-[calc(50%-10px)] md:w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[83vh] flex flex-col mt-15 lg:mt-[130px] '>
                     <div className='name flex gap-2 items-center justify-start pb-3 '>
                           <span className='w-3 h-3 rounded-full bg-black'></span>
                           <h1 className='uppercase font-light text-lg md:text-xl'>EduLearn Ai</h1>
                     </div>
                     <motion.div 
                         onHoverStart={() => handleHover(0)} 
                         onHoverEnd={() => handleHoverEnd(0)} 
                         className="w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative"
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
                                  <img src="/projectImages/edulearn.png" alt="EduLearn Ai" className='rounded-2xl h-[27vh] md:h-[31vh] lg:h-[55vh]  top-1/2 left-1/2 ' />
                               </a>
                          </div>
                      </motion.div>
                                      
                        <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://www.github.com/Yogeswar03" text="live project" />
                            <ButtonWithHoverEffect link="https://www.github.com/Yogeswar03" text="github" />
                        </div>
                </div>
                            
                <div className='card-2 w-full sm:w-[calc(50%-10px)] md:w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 md:mt-15 lg:mt-30 '>
                   <div className='name flex gap-2 items-center justify-start pb-3'>
                        <span className='w-3 h-3 rounded-full bg-black'></span>
                        <h1 className='uppercase font-normal text-lg md:text-xl'>Weather Forecast</h1>
                   </div>
                   <motion.div 
                        onHoverStart={() => handleHover(1)} 
                        onHoverEnd={() => handleHoverEnd(1)} 
                        className="w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative"
                        style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                    >
                     <div>                
                        <div className="absolute left-0 top-0 h-1/2 w-full bg-[#7a9e9f] rounded-t-xl  z-0"></div>
                        <div className="absolute right-0 bottom-0 h-1/2 w-full bg-[#b8d8d8] rounded-b-xl z-0"></div>
                     </div>
                          <h1 className='absolute overflow-hidden right-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                               {"weatherforecast".split('').map((item, index) =>
                               <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                               )}
                          </h1>
                           <div className=' absolute p-10 rounded-xl'>
                               <a href="https://www.github.com/Yogeswar03" target='_blank'>
                                   <img src="/projectImages/weather1.png" alt="Discover Chandigarh" className='rounded-2xl h-[27vh] md:h-[31vh] lg:h-[55vh]  top-1/2 left-1/2  object-contain' />
                               </a>
                           </div>
                           </motion.div>
                               <div className='flex gap-2 mt-4 items-center justify-start'>
                                   <ButtonWithHoverEffect link="https://www.github.com/Yogeswar03" text="live project" />
                                   <ButtonWithHoverEffect link="https://www.github.com/Yogeswar03" text="github" />
                               </div>
                    </div>
                           
                <div className='card-3 w-full sm:w-[calc(50%-10px)] md:w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20'>
                                                  <div className='name flex gap-2 items-center justify-start pb-3'>
                                                    <span className='w-3 h-3 rounded-full bg-black'></span>
                                                    <h1 className='uppercase text-lg md:text-xl'>lane detection</h1>
                                                  </div>
                                                  <motion.div 
                                                    onHoverStart={() => handleHover(2)} 
                                                    onHoverEnd={() => handleHoverEnd(2)} 
                                                    className='w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative'
                                                    style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                                                  >
                                                   <div>                
                                                      <div className="absolute left-0 top-0 h-1/2 w-full bg-[#ff6d00]  rounded-t-xl  z-0"></div>
                                                      <div className="absolute right-0 bottom-0 h-1/2 w-full bg-[#f79256] rounded-b-xl z-0"></div>
                                                    </div>
                                                    <h1 className='absolute overflow-hidden left-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 -translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                                                      {"lanedetection".split('').map((item, index) =>
                                                        <motion.span initial={{ y: "100%" }} animate={cards[2]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                                                      )}
                                                    </h1>
                                                    <div className='absolute z-10 w-full object-contain p-10'>
                                                      <a href="https://www.github.com/Yogeswar03/WeatherApp" target='_blank'>
                                                        <img src="/projectImages/rrld.png" alt="lane detection" className='rounded-xl  h-[27vh] md:h-[31vh] lg:h-[55vh] ' />
                                                      </a>
                                                    </div>
                                                  </motion.div>
                                                  <div className='flex gap-2 mt-4 items-center justify-start'>
                                                    <ButtonWithHoverEffect link="https://weather-forecast-yogi092503-gmailcoms-projects.vercel.app/" text="live project" />
                                                    <ButtonWithHoverEffect link="https://www.github.com/Yogeswar03/WeatherApp" text="github" />
                                                  </div>
                </div>
                                    
                <div className='card-4 w-full sm:w-[calc(50%-10px)] w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20'>
                                      <div className='name flex gap-2 items-center justify-start pb-3'>
                                        <span className='w-3 h-3 rounded-full bg-black'></span>
                                        <h1 className='uppercase font-normal text-lg md:text-xl'>discover chandigarh</h1>
                                      </div>
                                      <motion.div 
                                        onHoverStart={() => handleHover(3)} 
                                        onHoverEnd={() => handleHoverEnd(3)} 
                                       className="w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative"
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
                                            <img src="/projectImages/ixc.png" alt="Weather Forecast" className='rounded-xl  h-[27vh] md:h-[31vh] lg:h-[55vh]' />
                                          </a>
                                        </div>
                                      </motion.div>
                                      <div className='flex gap-2 mt-4 items-center justify-start'>
                                        <ButtonWithHoverEffect link="https://discover-chandigarh.vercel.app/" text="live project" />
                                        <ButtonWithHoverEffect link="https://github.com/Yogeswar03/discoverChandigarh" text="github" />
                                      </div>
                </div>

                <div className='card-5 w-full sm:w-[calc(50%-10px)] w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20 '>
                          <div className='name flex gap-2 items-center justify-start pb-3 '>
                            <span className='w-3 h-3 rounded-full bg-black'></span>
                            <h1 className='uppercase font-light text-lg md:text-xl'>movie review</h1>
                          </div>
                          
                          <motion.div 
                            onHoverStart={() => handleHover(4)} 
                            onHoverEnd={() => handleHoverEnd(4)} 
                            className="w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative"
                            style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }}  
                          >
                            <div>                
                              <div className="absolute left-0 top-0 h-1/2 w-full bg-[#eec170] rounded-t-xl  z-0"></div>
                              <div className="absolute right-0 bottom-0 h-1/2 w-full bg-[#ff9505] rounded-b-xl z-0"></div>
                            </div>
                            <h1 className='absolute overflow-hidden left-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 -translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                              {"moviereview".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={cards[4]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                              )}
                            </h1>
                            <div className='absolute z-10 p-10  object-contain'>
                              <a href="https://github.com/Yogeswar03/Movie-Review-using-NLP" target='_blank'>
                                <img src="/projectImages/movie.png" alt="movie review" className='rounded-xl h-[27vh] md:h-[31vh] lg:h-[55vh]  ' />
                              </a>
                            </div>
                          </motion.div>
                          
                          <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Movie-Review-using-NLP" text="live project" />
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Movie-Review-using-NLP" text="github" />
                          </div>
                </div>
                
                <div className='card-6 w-full sm:w-[calc(50%-10px)] w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20 '>
                          <div className='name flex gap-2 items-center justify-start pb-3'>
                            <span className='w-3 h-3 rounded-full bg-black'></span>
                            <h1 className='uppercase font-normal text-lg md:text-xl'>digit scan</h1>
                          </div>
                          <motion.div 
                            onHoverStart={() => handleHover(5)} 
                            onHoverEnd={() => handleHoverEnd(5)} 
                            className="w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative"
                            style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                          >
                            <div>                
                              <div className="absolute left-0 top-0 w-1/2 h-full bg-[#7a9e9f] rounded-l-xl  z-0"></div>
                              <div className="absolute right-0 top-0 w-1/2 h-full bg-[#b8d8d8] rounded-r-xl z-0"></div>
                            </div>
                            <h1 className='absolute overflow-hidden right-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                              {"digitscan".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={cards[5]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                              )}
                            </h1>
                            <div className=' absolute p-10  object-contain'>
                              <a href="https://github.com/Yogeswar03/digitScan" target='_blank'>
                              <img src="/projectImages/digit.png" alt="Digit scan" className='rounded-xl h-[27vh] md:h-[31vh] lg:h-[55vh]  top-1/2 left-1/2 ' />
                              </a>
                            </div>
                          </motion.div>
                          <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/digitScan" text="live project" />
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/digitScan" text="github" />
                          </div>
                </div>
               
                <div className='card-7 w-full sm:w-[calc(50%-10px)] w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20'>
                                      <div className='name flex gap-2 items-center justify-start pb-3'>
                                        <span className='w-3 h-3 rounded-full bg-black'></span>
                                        <h1 className='uppercase text-lg md:text-xl'>Expense Tracker</h1>
                                      </div>
                                      <motion.div 
                                        onHoverStart={() => handleHover(6)} 
                                        onHoverEnd={() => handleHoverEnd(6)} 
                                        className='w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative'
                                        style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                                      >
                                       <div>                
                                          <div className="absolute left-0 top-0 h-1/2 w-full bg-[#706677] rounded-t-xl  z-0"></div>
                                          <div className="absolute right-0 bottom-0 h-1/2 w-full bg-[#565264] rounded-b-xl z-0"></div>
                                        </div>
                                        <h1 className='absolute overflow-hidden left-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 -translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                                          {"expensetracker".split('').map((item, index) =>
                                            <motion.span initial={{ y: "100%" }} animate={cards[6]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                                          )}
                                        </h1>
                                        <div className='absolute z-10 object-contain p-10'>
                                          <a href="https://github.com/Yogeswar03/Expense-Tracker" target='_blank'>
                                            <img src="/projectImages/expense.png" alt="Expense Tracker" className='rounded-xl  h-[27vh] md:h-[31vh] lg:h-[55vh]' />
                                          </a>
                                        </div>
                                      </motion.div>
                                      <div className='flex gap-2 mt-4 items-center justify-start'>
                                        <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Expense-Tracker" text="live project" />
                                        <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Expense-Tracker" text="github" />
                                      </div>
                </div>
                        
                <div className='card-8 w-full sm:w-[calc(50%-10px)] w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20'>
                          <div className='name flex gap-2 items-center justify-start pb-3'>
                            <span className='w-3 h-3 rounded-full bg-black'></span>
                            <h1 className='uppercase font-normal text-lg md:text-xl'>random password</h1>
                          </div>
                          <motion.div 
                            onHoverStart={() => handleHover(7)} 
                            onHoverEnd={() => handleHoverEnd(7)} 
                           className="w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative"
                            style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                          >
                            <div className="absolute left-0 top-0 w-full h-full bg-[#3c6e71] rounded-xl  z-0"></div>
                            <h1 className='absolute overflow-hidden right-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                              {"randompassword".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={cards[7]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                              )}
                            </h1>
                            <div className='absolute  z-10 pl-10 lg:pl-15 p-10 object-contain'>
                              <a href="https://github.com/Yogeswar03/Random-Password-Generator" target='_blank'>
                                <img src="/projectImages/image.png" alt="random password" className='rounded-xl  h-[27vh] md:h-[31vh] lg:h-[55vh]' />
                              </a>
                            </div>
                          </motion.div>
                          <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Random-Password-Generator" text="live project" />
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/Random-Password-Generator" text="github" />
                          </div>
                </div>

                <div className='card-9 w-full sm:w-[calc(50%-10px)] w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20'>
                                      <div className='name flex gap-2 items-center justify-start pb-3'>
                                        <span className='w-3 h-3 rounded-full bg-black'></span>
                                        <h1 className='uppercase text-lg md:text-xl'>8 Puzzle</h1>
                                      </div>
                                      <motion.div 
                                        onHoverStart={() => handleHover(8)} 
                                        onHoverEnd={() => handleHoverEnd(8)} 
                                        className='w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative'
                                        style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                                      >
                                       <div>                
                                          <div className="absolute left-0 top-0 w-1/2 h-full bg-[#7f5539] rounded-l-xl  z-0"></div>
                                          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#b08968] rounded-r-xl z-0"></div>
                                        </div>
                                        <h1 className='absolute overflow-hidden left-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 -translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                                          {"8puzzle".split('').map((item, index) =>
                                            <motion.span initial={{ y: "100%" }} animate={cards[8]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                                          )}
                                        </h1>
                                        <div className='absolute z-10 object-contain p-10'>
                                          <a href="https://github.com/Yogeswar03/8Puzzle" target='_blank'>
                                            <img src="/projectImages/puzzle.png" alt="Expense Tracker" className='rounded-xl  h-[27vh] md:h-[31vh] lg:h-[55vh] ' />
                                          </a>
                                        </div>
                                      </motion.div>
                                      <div className='flex gap-2 mt-4 items-center justify-start'>
                                        <ButtonWithHoverEffect link="https://github.com/Yogeswar03/8Puzzle" text="live project" />
                                        <ButtonWithHoverEffect link="https://github.com/Yogeswar03/8Puzzle" text="github" />
                                      </div>
                </div>

                <div className='card-10 w-full sm:w-[calc(50%-10px)] w-[calc(50%-10px)] lg:w-[calc(49%-10px)] h-[82vh] -mt-70 lg:mt-20 '>
                          <div className='name flex gap-2 items-center justify-start pb-3'>
                            <span className='w-3 h-3 rounded-full bg-black'></span>
                            <h1 className='uppercase font-normal text-lg md:text-xl'>smart home security system</h1>
                          </div>
                          <motion.div 
                            onHoverStart={() => handleHover(9)} 
                            onHoverEnd={() => handleHoverEnd(9)} 
                           className="w-full h-[35vh] md:h-[39vh] lg:h-[68vh] relative"
                            style={{ pointerEvents: window.innerWidth < 640 ? 'none' : 'auto' }} 
                          >
                            <div className="absolute left-0 top-0 w-full h-full bg-[#b5838d] rounded-xl  z-0"></div>
                            <h1 className='absolute overflow-hidden right-full uppercase font-["oswald"] font-bold text-8xl z-[20] top-1/2 -translate-y-1/2 translate-x-1/2 tracking-tighter text-[#c77dff] whitespace-nowrap'>
                              {"smarthomesecurity".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={cards[9]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' key={index}>{item}</motion.span>
                              )}
                            </h1>
                            <div className='absolute  z-10   pl-12  p-10 object-contain'>
                              <a href="https://github.com/Yogeswar03/IOT-based-Smart-Home-Security-prototype-using-alert-system" target='_blank'>
                                <img src="/projectImages/smarthouse.png" alt="random password" className='rounded-xl  h-[27vh] md:h-[31vh] lg:h-[55vh]' />
                              </a>
                            </div>
                          </motion.div>
                          <div className='flex gap-2 mt-4 items-center justify-start'>
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/IOT-based-Smart-Home-Security-prototype-using-alert-system" text="live project" />
                            <ButtonWithHoverEffect link="https://github.com/Yogeswar03/IOT-based-Smart-Home-Security-prototype-using-alert-system" text="github" />
                          </div>
                </div>
          </div>
        </div>
        <div>
          <Collaborate />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
