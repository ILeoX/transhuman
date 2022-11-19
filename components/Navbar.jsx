import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className='px-20 py-7 bg-gray-700 bg-backg bg-opacity-5 backdrop-blur-md top-0 z-[60] flex justify-between sticky items-center w-full h-auto'>
      <div className='flex items-center text-2xl font-semibold'>
        <Image src='/logo.png' height={40} width={40} alt={''} />
        <span className='ml-2'> transhuman</span>
        <span className='text-green-500 font-bold'>coin</span>
      </div>

      <div className='flex text-sm justify-between items-center fall-anim'>
        <Link className='px-2 nav-link' href=''>
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
          <span className='ml-4 p-3 bg-green-500 hover:border-[1px] font-bold over:border-[1px] hover:border-green-500 hover:bg-transparent transition-colors'>
            {' '}
            Buy THC
          </span>
        </Link>
      </div>
    </div>
  );
}
