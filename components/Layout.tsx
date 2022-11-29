import { useState, useEffect } from 'react';
import THC from '../utils/THC.json';

const address = '0x56083560594E314b5cDd1680eC6a493bb851BBd8';
const abi = THC.abi;

export default function Layout({ children }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4600);

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
          <div className='mt-0 pb-0 scroll-smooth mobile:w-screen'>
            {children}
          </div>
        </>
      )}
    </div>
  );
}
