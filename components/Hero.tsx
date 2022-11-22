import Image from 'next/image';
import Link from 'next/link';
import Hero2 from '../public/Herobg.jpg';

export default function Hero() {
  return (
    <div className='relative h-screen flex items-center -mt-10'>
      {/**Image Holder */}
      <div className='absolute hero h-screen w-full'>
        <span>
          <Image
            src={Hero2}
            height={2000}
            width={2000}
            priority={true}
            alt=''
          />
        </span>
      </div>

      {/**Moving Anim */}
      <div className='absolute inset-0 flex items-center justify-center opacity-20 blur-2xl z-50'>
        <div className='bg-gradient-to-bl from-[#36CFB5] to-[#113434] scale-125 w-96 h-80 rounded-full animate-flow'></div>
      </div>

      {/**Blurring Div */}

      <div className='absolute inset-0 flex items-center justify-center opacity-100 bg-backg bg-opacity-20 backdrop-blur-xs bg-black py-10'>
        <div className='bg-[#c0a117] w-auto h-screen'></div>
      </div>

      {/**Main Content */}

      <section className='mx-20 z-50 relative flex'>
        <div className='side-left w-1/2 pr-28 items-center justify-center'>
          <p className='text-6xl font-semibold tracking-tight fall-anim'>
            {' '}
            Transhumanism powered by the blockchain.
          </p>
          <p className='text-base mt-6 text-anim'>
            We believe in the future where humans live long, without the fear of
            death, or the stigma of disease. We are powering that vision by the
            innovativeness of the blockchain. We are transhumanists.
          </p>

          <div className='flex mt-14 text-sm slide-anim'>
            <Link className='border-[1px] border-white p-3' href=''>
              Understand our objective
            </Link>

            <Link
              className='ml-4 p-3 font-bold hover:border-[1px] hover:border-green-500 hover:bg-transparent bg-green-500  '
              href=''
            >
              Visit Store
            </Link>
          </div>
        </div>

        <div className='side-right w-1/2 flex items-center justify-center slide-img'>
          <span className='slide-img2'>
            <Image
              src='/sidebg.png'
              alt={''}
              width={500}
              height={500}
              priority={true}
            />{' '}
          </span>
        </div>
      </section>
    </div>
  );
}
