import useElementOnScreen from '../utils/useElementOnScreen';
import Card from './Card';
import { LegacyRef, useRef } from 'react';

export default function Roadmap() {
  const ref = useRef();
  let inView: boolean = false;

  const isVisible = useElementOnScreen(ref);

  return (
    <div>
      <div
        className='mobile:pt-24 mobile:px-4 tablet:px-8 relative flex-col pt-32 px-52 w-fit'
        id='roadmap'
      >
        <span ref={ref}></span>
        <section className='mobile:hidden tablet:hidden absolute inset-0 flex items-center justify-center opacity-20 blur-2xl'>
          <div className='bg-gradient-to-bl from-[#19193d] to-[#0f0f31] w-[50%] h-[50%] rounded-full'></div>
        </section>
        <div className='mobile:text-3xl text-4xl text-center font-bold text-white py-3'>
          <p
            className={`${isVisible ? ' opacity-100 fall-anim' : ' opacity-0'}`}
          >
            <span className='text-green-500'> Our </span>
            Roadmap
          </p>
        </div>

        <div className='flex flex-wrap gap-4 justify-center mt-12'>
          {/** import card here with respective props */}

          <Card
            image='/robot.png'
            heading='Phase One'
            text='Approve Core Developments,Launch Public Sale,Listing on Pancakeswap'
            status='&#10003;'
          />

          <Card
            image='/robot.png'
            heading='Phase Two'
            text='Promotion Campaign,Marketing Campaign,Hit $2 Million MCap,Registered as a Delaware LLC'
            status='&#10003;'
          />

          <Card
            image='/robot.png'
            heading='Phase Three'
            text='Make First Donation,Buyback & Burn Weekly,List on Coingecko,List On CoinMarketCap'
            status='&#10003;'
          />

          <Card
            image='/robot.png'
            heading='Phase Four'
            text='List On Top-Tier CEX, SWFT AllChain Partnership,Transhuman Coin Lottery (Coming Soon),Transhumanist Metaverse Research Network (Coming Soon)'
            status='&#10003;'
          />

          <Card
            image='/robot.png'
            heading='Phase Five'
            text='Launch staking platform,Launch P2P Exchange,Launch Transhumanist E-store,Bridge to Ethereum,Researchers Apply for Grants,DeFi Lending,Insure THC Ecosystem'
            status='Coming Soon'
          />

          <Card
            image='/robot.png'
            heading='Phase Six'
            text='Launch of decentralized laboratories in Metaverse,Scientific Advisory Board reports on THC research projects,Invest in Research & Development'
            status='Coming Soon'
          />

          <Card
            image='/robot.png'
            heading='Phase Final'
            text='THC to the moon &#128640;'
            status='Coming Soon'
          />
        </div>
      </div>
    </div>
  );
}
