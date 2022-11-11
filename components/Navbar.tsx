import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className='px-20 py-[3rem] bg-backg bg-opacity-10 backdrop-blur-md h-16 top-0 z-50 flex justify-between bg-none sticky items-center w-auto min-w-max'>
      <div className='flex items-center text-2xl font-semibold'>
        <Image src='/logo.png' height={40} width={40} alt={''} />
        <span className='ml-2'> transhuman</span>
        <span className='text-green-500 font-bold'>coin</span>
      </div>

      <div className=''>
        <ul className='flex text-sm justify-evenly'>
          <Link href=''>
            <li className='ml-3'> Tokenomics </li>
          </Link>
          <Link href='https://www.transhumancoin.finance/whitepaperthc.pdf'>
            <li className='ml-3'> Whitepaper </li>
          </Link>

          <Link href=''>
            <li className='ml-3'> Our Team </li>
          </Link>
          <Link href=''>
            <li className='ml-3'> FAQs </li>
          </Link>
          <Link href=''>
            <li className='ml-3'> Roadmap </li>
          </Link>
        </ul>
      </div>

      <div className='text-sm'>
        <Link href=''>
          <span className='border-[1px] border-white rounded-lg p-3'>
            Join the Mission
          </span>{' '}
        </Link>

        <Link href=''>
          <span className='ml-4 p-3 bg-green-500 rounded-lg font-bold'>
            {' '}
            Buy THC
          </span>
        </Link>
      </div>
    </div>
  );
}
