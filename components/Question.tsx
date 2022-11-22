import React, { useState, LegacyRef } from 'react';
import useElementOnScreen from '../utils/useElementOnScreen';

export default function Question({ question, answer }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    const openQ = document.querySelectorAll('.answer');
    openQ.forEach((element) => {
      element.setAttribute('id', 'hidden');
      setOpen(!open);
    });
  };

  return (
    <>
      {/* <span ref={containerRefY}></span> */}
      <div
        className={`${
          true
            ? 'relative clip border-2 border-gray-500 text-center p-5 mx-56 mb-8 cursor-pointer'
            : 'invis'
        }`}
        onClick={handleClick}
      >
        <div className='absolute -inset-1 border-4 border-green-300'>
          <div className='absolute inset-0 flex items-center justify-center opacity-20 blur-2xl z-50'>
            <div className='bg-gradient-to-bl from-[#36CFB5] to-[#113434] scale-125 w-[33rem] h-24 rounded-full'></div>
          </div>
        </div>
        <div onMouseDown={handleClick} className='cursor-pointer'>
          <p className='font-bold text-base'> {question} </p>
        </div>
        <div>
          <p
            className='text-sm answer text-gray-300 transition-all'
            id={`${open ? 'open' : 'hidden'}`}
          >
            {answer}
          </p>
        </div>
      </div>
    </>
  );
}
