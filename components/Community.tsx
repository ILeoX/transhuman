import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <section className='relative grid grid-cols-2 mt-52 py-32 px-20 bg-[#020202]'>
      <div className='absolute w-full bg-backg bg-black bg-opacity-5 backdrop-blur-sm py-6 -mt-3'></div>
      <div className=''>
        <p className='mb-12 text-4xl text-white font-bold'>
          Join our Community
        </p>
        <p className='text-sm pr-32 mt-2 text-white font-light'>
          Transhumanism is the ideology of enhancing human life through Science
          and Technology. The Transhuman Coin is the first and only token
          dedicated to Transhumanism. As a project driven by a devoted
          community, 2% of every Transaction is redistributed to holders,
          another 2% is sent to the Marketing Wallet, and 2% is sent to the
          Liquidity Pool.
          <br /> <br /> Become a part of the future we are building.
        </p>
      </div>

      <div className='grid grid-cols-2 w-full'>
        <Link href='https://discord.gg/mj72jmyMTw'>
          <div className='flex justify-around mb-5 mr-3 py-8 items-center bg-secaccent rounded-lg border-spacing-4 border-secondary border-l-2 border-b-2'>
            <Image width={40} height={40} src='/discord.svg' alt='' />
            <p className='text-md text-white font-inter font-bold'>
              {' '}
              Discord &#x2197;
            </p>
          </div>
        </Link>

        <Link href='https://t.me/buytranshumancoin'>
          <div className='flex justify-around mb-5 py-8 items-center bg-secaccent rounded-lg border-spacing-4 border-secondary border-l-2 border-b-2'>
            <Image width={40} height={40} src='/telegram.svg' alt='' />
            <p className='text-md text-white font-inter font-bold'>
              {' '}
              Telegram &#x2197;
            </p>
          </div>
        </Link>

        <Link href='https://www.facebook.com/transhumancoin'>
          <div className='flex justify-around mr-5 py-8 items-center bg-secaccent rounded-lg border-spacing-4 border-secondary border-l-2 border-b-2'>
            <Image width={40} height={40} src='/twitter.svg' alt='' />
            <p className='text-md text-white font-inter font-bold'>
              Twitter &#x2197;
            </p>
          </div>
        </Link>

        <Link href='https://www.reddit.com/r/transhumancoin4u/'>
          <div className='flex justify-around py-8 items-center bg-secaccent rounded-lg border-spacing-4 border-secondary border-l-2 border-b-2'>
            <Image width={40} height={40} src='/reddit.svg' alt='' />
            <p className='text-md text-white font-inter font-bold'>
              {' '}
              Reddit &#x2197;
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Community;
