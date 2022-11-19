import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <div className='relative loader bg-black'>
          <div className='absolute inset-0 loader-im'></div>
          <div className='ring'></div>
          <span>loading...</span>
        </div>
      ) : (
        <>
          {' '}
          <div className='mt-0 pb-0 scroll-smooth theapp'>{children}</div>
          <div className='laptop:hidden text-center flex justify-center items-center h-screen text-2xl mx-10'>
            Switch to a Desktop Browser. Mobile mode is in development.
          </div>
        </>
      )}
    </div>
  );
}
