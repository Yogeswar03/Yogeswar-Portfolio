import React, { useState } from 'react';

function Skills() {
    const [show, setShow] = useState([false, false, false, false]);

    const toggleShow = (index) => {
        const newShowVisibility = [...show];
        newShowVisibility[index] = !newShowVisibility[index];
        setShow(newShowVisibility);
    };

    return (
        <section id='skills'>
            <div className='w-full min-h-screen py-15 font-["Neue_Montreal"] overflow-hidden' >
                <div className='w-full px-5 md:px-20 border-b border-zinc-400 py-10'>
                    <h1 className='text-5xl font-light tracking-tight text-zinc-800'>My Skills</h1>
                </div>

                <div className='w-full flex py-[10px] flex-col border-zinc-500'>
                    <div className='w-full flex items-center justify-between py-[10px] px-5 md:px-20'>
                        <div className='w-[50%] flex items-center'>
                            <div className='w-[40%] sm:w-auto'>Web Development</div>
                            <div className='w-auto hidden sm:block'>
                                <h3 className='text-sm text-[#212121] opacity-0 transition-all duration-200 ease-in-out'>Frontend & Backend Development</h3>
                            </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-between'>
                            <div className='w-[40%] sm:w-auto'>
                                <h3 className='text-sm text-[#212121]'>Technologies</h3>
                            </div>
                            <div className='w-[10%] sm:w-auto flex items-end justify-end'>
                                <button onClick={() => toggleShow(0)} className='text-sm uppercase transition-all duration-200 ease-in-out text-[#212121] link-flash cursor-pointer'>
                                    {show[0] ? 'Hide' : 'Read'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full flex justify-between sm:flex-col ${show[0] ? 'max-h-[200px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                        <div className='w-[20%] sm:w-auto'></div>
                        <div className='w-[30%] sm:w-auto flex flex-wrap gap-x-[5px] sm:pt-[10px]'></div>
                        <div className='w-[40%] sm:w-auto'>
                            <div style={{ opacity: "1", height: "auto" }}>
                                <div className='flex flex-col gap-10 mb-[30px] flex-wrap px-4'>
                                    <p className='text-sm tracking-wider text-[#212121] text-right'>
                                        HTML | CSS | Bootstrap | React | Tailwind CSS | Material UI | <br />
                                        Redux | Framer Motion | MySQL | NodeJS | NextJS |
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[10%] sm:w-auto'></div>
                    </div>
                </div>

                <div className='w-full flex py-[10px] flex-col border-y border-zinc-500'>
                    <div className='w-full flex items-center justify-between py-[10px] px-5 md:px-20'>
                        <div className='w-[50%] flex items-center'>
                            <div className='w-[40%] sm:w-auto'>Languages</div>
                            <div className='w-auto hidden sm:block'>
                                <h3 className='text-sm text-[#212121] opacity-0 transition-all duration-200 ease-in-out'>Programming & Scripting</h3>
                            </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-between'>
                            <div className='w-[40%] sm:w-auto'>
                                <h3 className='text-sm text-[#212121]'>Coding Languages</h3>
                            </div>
                            <div className='w-[10%] sm:w-auto flex items-end justify-end'>
                                <button onClick={() => toggleShow(1)} className='text-sm uppercase transition-all duration-200 ease-in-out text-[#212121] link-flash cursor-pointer'>
                                    {show[1] ? 'Hide' : 'Read'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full flex justify-between sm:flex-col ${show[1] ? 'max-h-[200px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                        <div className='w-[20%] sm:w-auto'></div>
                        <div className='w-[30%] sm:w-auto flex flex-wrap gap-x-[5px] sm:pt-[10px]'></div>
                        <div className='w-[40%] sm:w-auto'>
                            <div style={{ opacity: "1", height: "auto" }}>
                                <div className='flex flex-col gap-10 mb-[30px] flex-wrap px-4'>
                                    <p className='text-sm tracking-wider text-[#212121] text-right'>
                                        JavaScript | Python | C++ | SQL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[10%] sm:w-auto'></div>
                    </div>
                </div>

                <div className='w-full flex py-[10px] flex-col border-zinc-500'>
                    <div className='w-full flex items-center justify-between py-[10px] px-5 md:px-20'>
                        <div className='w-[50%] flex items-center'>
                            <div className='w-[40%] sm:w-auto'>Tools</div>
                            <div className='w-auto hidden sm:block'>
                                <h3 className='text-sm text-[#212121] opacity-0 transition-all duration-200 ease-in-out'>UI/UX and Prototyping</h3>
                            </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-between'>
                            <div className='w-[40%] sm:w-auto'>
                                <h3 className='text-sm text-[#212121]'>Technologies & Tools</h3>
                            </div>
                            <div className='w-[10%] sm:w-auto flex items-end justify-end'>
                                <button onClick={() => toggleShow(2)} className='text-sm uppercase transition-all duration-200 ease-in-out text-[#212121] link-flash cursor-pointer'>
                                    {show[2] ? 'Hide' : 'Read'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full flex justify-between sm:flex-col ${show[2] ? 'max-h-[200px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                        <div className='w-[20%] sm:w-auto'></div>
                        <div className='w-[30%] sm:w-auto flex flex-wrap gap-x-[5px] sm:pt-[10px]'></div>
                        <div className='w-[40%] sm:w-auto'>
                            <div style={{ opacity: "1", height: "auto" }}>
                                <div className='flex flex-col gap-10 mb-[30px] flex-wrap px-4'>
                                    <p className='text-sm tracking-wider text-[#212121] text-right'>
                                        Git | GitHub | VS Code | Canva
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[10%] sm:w-auto'></div>
                    </div>
                </div>

                <div className='w-full flex py-[10px] flex-col border-y border-zinc-500'>
                    <div className='w-full flex items-center justify-between py-[10px] px-5 md:px-20'>
                        <div className='w-[50%] flex items-center'>
                            <div className='w-[40%] sm:w-auto'>Coursework</div>
                            <div className='w-auto hidden sm:block'>
                                <h3 className='text-sm text-[#212121] opacity-0 transition-all duration-200 ease-in-out'>Course</h3>
                            </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-between'>
                            <div className='w-[40%] sm:w-auto'>
                                <h3 className='text-sm text-[#212121]'>Course</h3>
                            </div>
                            <div className='w-[10%] sm:w-auto flex items-end justify-end'>
                                <button onClick={() => toggleShow(3)} className='text-sm uppercase transition-all duration-200 ease-in-out text-[#212121] link-flash cursor-pointer'>
                                    {show[3] ? 'Hide' : 'Read'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full flex justify-between sm:flex-col ${show[3] ? 'max-h-[200px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                        <div className='w-[20%] sm:w-auto'></div>
                        <div className='w-[30%] sm:w-auto flex flex-wrap gap-x-[5px] sm:pt-[10px]'></div>
                        <div className='w-[40%] sm:w-auto'>
                            <div style={{ opacity: "1", height: "auto" }}>
                                <div className='flex flex-col gap-10 mb-[30px] flex-wrap px-4'>
                                    <p className='text-sm tracking-wider text-[#212121] text-right'>
                                        Machine Learning | Data Structures & Algorithms | Computer Networks <br /> Deep Learning 
                                        Database Management System | Object Oriented Programming 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[10%] sm:w-auto'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
