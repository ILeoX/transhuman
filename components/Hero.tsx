import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='relative h-full flex items-center mt-24 mb-14 mx-20'>
      <section className='absolute inset-0 flex items-center justify-center opacity-20 blur-2xl'>
        <div className='bg-gradient-to-bl from-[#36CFB5] to-[#113434] scale-125 w-96 h-80 rounded-full animate-flow'></div>
      </section>
      <div className='realtive z-40 side-left w-1/2 pr-28 items-center justify-center'>
        <p className='text-6xl font-semibold'>
          {' '}
          Transhumanism powered by the blockchain.
        </p>
        <p className='text-base mt-6'>
          We believe in the future where humans live long, without the fear of
          death, or the stigma of disease. We are powering that vision by the
          innovativeness of the blockchain. We are transhumanists.
        </p>

        <div className='flex mt-14 text-sm'>
          <Link className='border-[1px] border-white rounded-lg p-3' href=''>
            Understand our objective
          </Link>

          <Link className='ml-4 p-3 bg-green-500 rounded-lg font-bold' href=''>
            Visit Store
          </Link>
        </div>
      </div>

      <div className='side-right w-1/2 flex items-center justify-center'>
        <Image src='/sphere.png' alt={'The Cell'} width={500} height={500} />
      </div>
    </div>
  );
}
