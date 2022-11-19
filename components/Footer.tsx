import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex px-20 py-12 items-baseline justify-between bg-black'>
      <div className='flex-col rise-anim'>
        <div className='flex text-2xl font-semibold'>
          <Image className='' src='/logo.png' width={30} height={30} alt='' />
          <span className='ml-2'> transhuman</span>
          <span className='text-green-500 font-bold'>coin</span>
        </div>

        <div className='mt-8 px-3 w-28 bg-gray-700 py-4 text-sm text-white rounded-md'>
          <select
            className='outline-none bg-gray-700'
            name='language'
            id='languages'
          >
            <option defaultValue={''} value='English'>
              English
            </option>
            <option value='Spanish'>Spanish</option>
            <option value='French'>French</option>
            <option value='Chinese'>Chinese</option>
          </select>
        </div>

        <p className='mt-8 text-md text-secondary'>© 2022 Transhuman Coin</p>
      </div>{' '}
      {/** Footer Linsk */}
      <div className='rise-anim'>
        <p className=' text-secondary font-semibold'> Community </p>
        <ul className='text-sm flex-col'>
          <div className='pt-3 text-white hover:text-green-400'>
            <Link href='https://www.facebook.com/transhumancoin'>
              <span> Facebook </span>
            </Link>
          </div>
          <div className='pt-3 text-white hover:text-green-400'>
            <Link href='https://discord.gg/mj72jmyMTw'>
              <span> Discord</span>
            </Link>
          </div>
          <div className='pt-3 text-white hover:text-green-400'>
            <Link href='https://twitter.com/transhumancoin'>
              <span> Twitter</span>
            </Link>
          </div>
          <div className='pt-3 text-white hover:text-green-400'>
            <Link href='https://t.me/buytranshumancoin'>
              <span> Telegram </span>
            </Link>
          </div>

          <div className='pt-3 text-white hover:text-green-400'>
            <Link href='https://www.reddit.com/r/transhumancoin4u/'>
              <span> Reddit </span>
            </Link>
          </div>

          <div className='pt-3 text-white hover:text-green-400'>
            <Link href='https://youtu.be/5BeIURgwa8g'>
              <span> YouTube </span>
            </Link>
          </div>
        </ul>
      </div>
      <div className='flex-col rise-anim'>
        <p className=' font-semibold text-secondary'>Contact</p>
        <ul className='text-sm'>
          <div className='pt-3 text-white hover:text-green-400 transition-colors'>
            <Link href=''>Open Roles</Link>
          </div>
          <div className='pt-3 text-white hover:text-green-400'>
            <Link href=''>Get in Touch</Link>
          </div>
        </ul>
      </div>
    </footer>
  );
}
