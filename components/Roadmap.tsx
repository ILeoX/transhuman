import React from 'react';
import Card from './Card';

export default function Roadmap() {
  return (
    <div className='relative flex-col mt-44 mx-20'>
      <section className='absolute inset-0 flex items-center justify-center opacity-20 blur-2xl'>
        <div className='bg-gradient-to-bl from-[#153533] to-[#085f56] w-full h-full rounded-full'></div>
      </section>
      <div className='text-4xl text-center font-bold text-white sticky top-20 bgbackg backdrop-blur-sm bg-opacity-10 py-3 z-30'>
        <p>
          <span className='text-green-500'> Our </span>Roadmap
        </p>
      </div>

      <div className='flex justify-evenly mt-16 flex-wrap m-'>
        {/** import card here with respective props */}

        <Card
          image='/explosion.png'
          heading='Phase One'
          text='Approve Core Developments,Launch Public Sale,Listing on Pancakeswap'
          status='&#10003;'
        />
        <Card
          image='/explosion.png'
          heading='Phase Two'
          text='Promotion Campaign,Marketing Campaign,Hit $2 Million MCap,Registered as a Delaware LLC'
          status='&#10003;'
        />

        <Card
          image='/explosion.png'
          heading='Phase Three'
          text='Make First Donation,Buyback & Burn Weekly,List on Coingecko,List On CoinMarketCap'
          status='&#10003;'
        />

        <Card
          image='/explosion.png'
          heading='Phase Four'
          text='List On Top-Tier CEX, SWFT AllChain Partnership,Transhuman Coin Lottery (Coming Soon),Transhumanist Metaverse Research Network (Coming Soon)'
          status='&#10003;'
        />

        <Card
          image='/explosion.png'
          heading='Phase Five'
          text='Launch staking platform,Launch P2P Exchange,Launch Transhumanist E-store,Bridge to Ethereum,Researchers Apply for Grants,DeFi Lending,Insure THC Ecosystem'
          status='Coming Soon'
        />

        <Card
          image='/explosion.png'
          heading='Phase Six'
          text='Launch of decentralized laboratories in Metaverse,Scientific Advisory Board reports on THC research projects,Invest in Research & Development'
          status='Coming Soon'
        />

        <Card
          image='/explosion.png'
          heading='Phase Final'
          text='THC to the moon &#128640;'
          status='Coming Soon'
        />
      </div>
    </div>
  );
}
