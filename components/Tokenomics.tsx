import React, { LegacyRef } from 'react';
import Link from 'next/link';
import useElementOnScreen from '../utils/useElementOnScreen';

type Props = {};

const Tokenomics = (props: Props) => {
  const [containerRef, isVisible] = useElementOnScreen() as [
    LegacyRef<HTMLSpanElement>,
    boolean
  ];
  return (
    <div
      className='relative pt-32 flex-col justify-center clip '
      id='tokenomics'
    >
      <div
        className={`${
          isVisible
            ? 'text-4xl text-center font-bold text-white py-3 pb-24 fall-anim'
            : 'invis'
        }`}
      >
        <p className={`${true ? '' : 'invis'}`}>
          {/* <span ref={containerRef}></span> */}
          <span className='text-green-500'> Tokenomics </span>
        </p>
      </div>
      <span ref={containerRef}></span>

      <div
        className={`${
          isVisible
            ? 'relative clip border-2 text-center p-5 mx-56 mb-8 z-50 slide-anim-right'
            : 'invis'
        }`}
      >
        <div className='absolute -inset-1 border-4 border-green-300 -z-10'>
          <div className='absolute inset-0 flex items-center justify-center opacity-20 blur-2xl'>
            <div className='bg-gradient-to-bl from-[#36CFB5] to-[#113434] scale-125 w-[26rem] h-[12rem] rounded-full animate-flow'></div>
          </div>
        </div>
        <div className='mb-10 mt-10 slide-anim-right'>
          <p className='font-bold text-green-700 text-2xl'>
            {' '}
            <span className='text-white text-sm opacity-50'>
              {' '}
              Total Supply:
            </span>{' '}
            7,000,000,000{''}
          </p>

          <p className='font-bold text-green-700 text-2xl mt-10'>
            {' '}
            <span className='text-white text-sm opacity-50'>
              {' '}
              Listing Pancake Price
            </span>{' '}
            1BNB = 3,122,990,000
          </p>
        </div>
        <div>
          <p className='text-sm text-gray-100 transition-all mb-10 mx-32'>
            2% of every Transaction is sent to the Liquidity Pool, 2% is
            redistributed to holders including the Transhuman Fund Wallet and 2%
            is allocated for marketing.
          </p>
        </div>

        <div className='z-50'>
          <Link href='https://bscscan.com/address/0x56083560594E314b5cDd1680eC6a493bb851BBd8'>
            <button className='ml-4 px-3 py-2 border-[1px] border-green-800 text-sm text-gray-400 hover:text-gray-300 hover:border-green-500'>
              Token Contract
            </button>
          </Link>

          <Link href='https://coinmarketcap.com/currencies/transhuman-coin/'>
            <button className='ml-4 px-3 py-2 border-[1px] border-green-800 text-sm text-gray-400 hover:text-gray-300 hover:border-green-500'>
              Coinmarketcap
            </button>
          </Link>

          <Link href='https://pancakeswap.finance/swap?outputCurrency=0x56083560594E314b5cDd1680eC6a493bb851BBd8'>
            <button className='ml-4 px-3 py-2 border-[1px] border-green-800 text-sm text-gray-400 hover:text-gray-300 hover:border-green-500'>
              Pancake Swap
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
