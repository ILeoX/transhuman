import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { connectWallet } from '../utils/Context';

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
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

  useEffect(() => {
    if (mobileMenu) {
      var TopScroll = window.pageYOffset || document.documentElement.scrollTop;
      var LeftScroll =
        window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(LeftScroll, TopScroll);
      };
    }

    if (!mobileMenu) {
      window.onscroll = function () {};
    }
  }, [mobileMenu]);

  return (
    <div className='mobile:px-8 tablet:px-8 mobile:py-2 px-20 py-7 bg-gray-700 bg-backg bg-opacity-5 backdrop-blur-md top-0 z-[60] flex justify-between sticky items-center w-full h-auto'>
      <div className='flex items-center font-semibold'>
        <Image
          className='mobile:w-5 mobile:h-5'
          src='/logo.png'
          height={40}
          width={40}
          alt={''}
        />

        <div className='mobile:hidden'>
          <span className='mobile:text-base ml-2'> transhuman</span>
          <span className='mobile:text-base text-green-500 font-bold'>
            coin
          </span>
        </div>
      </div>

      <div>
        <button
          className='mobile:block tablet:block hidden focus:border-[1px] border-gray-300 rounded-lg p-0'
          onClick={() =>
            mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
          }
        >
          <Image src='/menu.svg' height={30} width={30} alt={''} />
        </button>
      </div>

      <div className='mobile:hidden tablet:hidden flex text-sm justify-between items-center fall-anim '>
        <Link className='px-2 hover:text-green-500' href='/#tokenomics'>
          Tokenomics{' '}
        </Link>

        <Link
          className='px-2 hover:text-green-500'
          href='https://www.transhumancoin.finance/whitepaperthc.pdf'
        >
          <span className='nav-link'> Whitepaper</span>
        </Link>

        <Link className='px-2 hover:text-green-500' href='/#team'>
          <span className='nav-link'> Our Team </span>
        </Link>
        <Link className='px-2 hover:text-green-500' href='/#faqs'>
          <span className='nav-link'> FAQs</span>
        </Link>
        <Link className='px-2 nav-link hover:text-green-500' href='/#roadmap'>
          <span className='nav-link'> Roadmap</span>
        </Link>
      </div>

      {mobileMenu && (
        <div className='mobile:block tablet:block text-center absolute z-50 top-20 block w-[80vmin] mx-8 bg-gray-800 bg-opacity-90 rounded-md h-fit'>
          <div className='border-2 border-gray-900 hover:border-green-900 active:border-green-900 p-5 rounded-md'>
            <Link
              onClick={() => setMobileMenu(false)}
              className=' hover:text-green-500'
              href='/#tokenomics'
            >
              Tokenomics
            </Link>
          </div>

          <div className='border-2 border-gray-900 hover:border-green-900 active:border-green-900 p-5 rounded-md'>
            <Link
              onClick={() => setMobileMenu(false)}
              className='px-2 hover:text-green-500'
              href='https://www.transhumancoin.finance/whitepaperthc.pdf'
            >
              Whitepaper
            </Link>
          </div>

          <div className='border-2 border-gray-900 hover:border-green-900 active:border-green-900 p-5 rounded-md'>
            <Link
              onClick={() => setMobileMenu(false)}
              className='px-2 hover:text-green-500'
              href='/#team'
            >
              Our Team
            </Link>
          </div>

          <div className='border-2 border-gray-900 hover:border-green-900 active:border-green-900 p-5 rounded-md'>
            <Link
              onClick={() => setMobileMenu(false)}
              className='px-2 hover:text-green-500'
              href='/#faqs'
            >
              FAQs
            </Link>
          </div>

          <div className='border-2 border-gray-900 hover:border-green-900 active:border-green-900 p-5 rounded-md'>
            <Link
              onClick={() => setMobileMenu(false)}
              className='px-2 nav-link hover:text-green-500'
              href='/#roadmap'
            >
              Roadmap
            </Link>
          </div>

          <div className='border-2 border-gray-900 hover:border-green-900 active:border-green-900 p-5 rounded-md'>
            <Link onClick={() => setMobileMenu(false)} href=''>
              Join the Mission
            </Link>
          </div>
        </div>
      )}

      <div className='mobile:hidden tablet:hidden text-sm '>
        <Link href=''>
          <span className='border-[1px] border-white p-3 hover:border-green-500'>
            Join the Mission
          </span>{' '}
        </Link>

        <button
          className={
            !isConnected
              ? 'ml-4 px-3 py-[.65rem] bg-green-500 hover:border-[1px] font-bold hover:border-green-500 hover:bg-transparent transition-colors cursor-pointer'
              : 'ml-4 px-3 py-[.65rem] border-[1px] border-green-500 font-bold cursor-pointer'
          }
          onClick={handleConnect}
        >
          {isConnected ? 'Connected' : 'Connect Wallet'}
        </button>
      </div>
    </div>
  );
}
