
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full h-[8vh] padding-x sticky z-[999] top-0 left-0 backdrop-blur-[7px] flex items-center justify-between font-light font-["Neue_Montreal"]'>
      <div className='logo w-[50%] ml-9'>
        <a href='/'>
          <img src="logo2_yr.png" alt="logo" height={'150px'} width={'150px'} />
        </a>
      </div>

      <div className='sm:flex hidden gap-x-[20px] w-[50%] font-light'>
        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item, index) => (
          <a href={`#${item.toLowerCase()}`} key={index} className={`w-fit font-lg capitalize flex flex-col ${index === 4 && 'px-50'}`}>
            <div className='group overflow-hidden cursor-pointer transition-all ease-in-out duration-200'>
              <div className='relative transition-all ease-in-out duration-500'>
                <div>
                  <h1 className='translate-y-[0%] group-hover:translate-y-[-100%] absolute left-0 transition-all ease-in-out duration-500'>
                    <div className='translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500'>{item}</div>
                  </h1>
                  <h1 className='transition-all ease-in-out duration-500'>
                    <div className='translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500'>{item}</div>
                  </h1>
                </div>
                <div className="mt-1 h-[2px] w-0 bg-zinc-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className='sm:hidden flex pr-4'>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {toggle && (
        <div className='absolute top-[8vh] left-0 w-full bg-white z-40 flex flex-col items-center sm:hidden shadow-md'>
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={index}
              className='py-4 hover:text-zinc-400 w-full text-center font-light'
              onClick={() => setToggle(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
