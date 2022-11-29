import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import useElementOnScreen from '../utils/useElementOnScreen';

const Community = () => {
  const ref = useRef();
  const isVisible = useElementOnScreen(ref);
  return (
    <>
      <span ref={ref}></span>
      <section className='mobile:px-8 mobile:mt-24 mobile:grid-cols-1 tablet:grid-cols-1  relative grid grid-cols-2 mt-52 py-32 px-20 bg-white'>
        <div className={`${isVisible ? 'slide-anim' : 'invis'}`}>
          <p className='mobile:text-center tablet:text-center mb-12 text-4xl text-black font-bold'>
            Join our Community
          </p>
          <p className='mobile:pr-0 mobile:text-center tablet:text-center tablet:pr-0 text-sm pr-32 mt-2 text-black font-light'>
            Transhumanism is the ideology of enhancing human life through
            Science and Technology. The Transhuman Coin is the first and only
            token dedicated to Transhumanism. As a project driven by a devoted
            community, 2% of every Transaction is redistributed to holders,
            another 2% is sent to the Marketing Wallet, and 2% is sent to the
            Liquidity Pool.
            <br /> <br /> Become a part of the future we are building.
          </p>
        </div>

        <div
          className={`${
            isVisible
              ? 'mobile:justify-center mobile:mt-10 mobile:gap-0 tablet:mt-20 tablet:justify-center flex flex-wrap gap-3 w-full slide-anim-right'
              : 'invis'
          }`}
        >
          <Link href='https://discord.gg/mj72jmyMTw'>
            <div className='flex justify-evenly py-8 items-center rounded-lg border-spacing-4 border-2 bg-gradient-to-b from-slate-900 to-black transition-all hover:shadow-md hover:shadow-gray-800 max-w-xs w-60 mb-2'>
              <Image width={40} height={40} src='/discord.svg' alt='' />
              <p className='text-md text-white font-inter font-bold'>
                {' '}
                Discord &#x2197;
              </p>
            </div>
          </Link>

          <Link href='https://t.me/buytranshumancoin'>
            <div className='flex justify-evenly py-8 items-center rounded-lg border-spacing-4 border-2 bg-gradient-to-b from-slate-900 to-black transition-all hover:shadow-md hover:shadow-gray-800 max-w-xs w-60 mb-2'>
              <Image width={40} height={40} src='/telegram.svg' alt='' />
              <p className='text-md text-white font-inter font-bold'>
                {' '}
                Telegram &#x2197;
              </p>
            </div>
          </Link>
          <span ref={ref}></span>
          <Link href='https://www.facebook.com/transhumancoin'>
            <div className='flex justify-evenly py-8 items-center rounded-lg border-spacing-4 border-2 bg-gradient-to-b from-slate-900 to-black transition-all hover:shadow-md hover:shadow-gray-800 max-w-xs w-60 mb-2'>
              <Image width={40} height={40} src='/twitter.svg' alt='' />
              <p className='text-md text-white font-inter font-bold'>
                Twitter &#x2197;
              </p>
            </div>
          </Link>

          <Link href='https://www.reddit.com/r/transhumancoin4u/'>
            <div className='flex justify-evenly py-8 items-center rounded-lg border-spacing-4 border-2 bg-gradient-to-b from-slate-900 to-black transition-all hover:shadow-md hover:shadow-gray-800 max-w-xs w-60 mb-2'>
              <Image width={40} height={40} src='/reddit.svg' alt='' />
              <p className='text-md text-white font-inter font-bold'>
                {' '}
                Reddit &#x2197;
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Community;
