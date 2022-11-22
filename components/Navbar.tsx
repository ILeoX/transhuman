import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { connectWallet } from '../utils/Context';

export default function Nav() {
  const connWallet = useContext(connectWallet);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  async function handleConnect() {
    if (!isConnected) {
      const connData = await connWallet();

      if (connData && 'connectedX' in connData && connData.connectedX !== null)
        setIsConnected(true);
    }
  }

  useEffect(function () {
    const alreadyConnected = localStorage.getItem(
      'walletAddress-transhumancoin'
    );

    if (alreadyConnected) {
      handleConnect();
    }
  });

  return (
    <div className='px-20 py-7 bg-gray-700 bg-backg bg-opacity-5 backdrop-blur-md top-0 z-[60] flex justify-between sticky items-center w-full h-auto'>
      <div className='flex items-center text-2xl font-semibold'>
        <Image src='/logo.png' height={40} width={40} alt={''} />
        <span className='ml-2'> transhuman</span>
        <span className='text-green-500 font-bold'>coin</span>
      </div>

      <div className='flex text-sm justify-between items-center fall-anim'>
        <Link className='px-2 nav-link' href='/#tokenomics'>
          Tokenomics{' '}
        </Link>

        <Link
          className='px-2 nav-link'
          href='https://www.transhumancoin.finance/whitepaperthc.pdf'
        >
          <span className='nav-link'> Whitepaper</span>
        </Link>

        <Link className='px-2 nav-link' href='/#team'>
          <span className='nav-link'> Our Team </span>
        </Link>
        <Link className='px-2 nav-link' href='/#faqs'>
          <span className='nav-link'> FAQs</span>
        </Link>
        <Link className='px-2 nav-link' href='/#roadmap'>
          <span className='nav-link'> Roadmap</span>
        </Link>
      </div>

      <div className='text-sm'>
        <Link href=''>
          <span className='border-[1px] border-white p-3 '>
            Join the Mission
          </span>{' '}
        </Link>

        <Link href=''>
          <button
            className={
              !isConnected
                ? 'ml-4 px-3 py-[.65rem] bg-green-500 hover:border-[1px] font-bold hover:border-green-500 hover:bg-transparent transition-colors'
                : 'ml-4 px-3 py-[.65rem] border-[1px] border-green-500 font-bold'
            }
            onClick={handleConnect}
          >
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </button>
        </Link>
      </div>
    </div>
  );
}
