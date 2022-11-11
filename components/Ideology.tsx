import Image from 'next/image';

export default function Ideology() {
  return (
    <div className='mt-40 mx-20'>
      <div className='text-4xl text-center font-bold text-white sticky top-20 bgbackg backdrop-blur-sm bg-opacity-10 py-3 z-40'>
        <p>
          Our<span className='text-green-500'> ideology </span>
        </p>
      </div>

      <div className='relative h-full w-full flex flex-row-reverse items-center mt-20 mb-14'>
        <section className='absolute inset-0 flex items-center justify-center opacity-20 blur-2xl'>
          <div className='bg-gradient-to-bl from-[#36CFB5] to-[#113434] scale-125 w-96 h-80 rounded-full animate-flow'></div>
        </section>

        <div className='realtive z-30 side-left w-1/2 items-center justify-center h-[85vh] overflow-y-scroll border-gray-700 border-[1px] rounded-lg scroller ml-20'>
          <div className='sticky top-0 flex justify-center bg-black bg-backg bg-opacity-10 backdrop-blur-sm rounded-lg py-3 -mt-3'>
            <Image src='/logo.png' width={50} height={50} alt='' />
          </div>
          <p className='text-sm font-light mt-6 px-10'>
            What is The Fire Under Transhuman Coin? Transhumanism is a
            philosophical movement devoted to promoting the research and
            development of robust human-enhancement technologies. Such
            technologies would augment or increase human sensory reception,
            emotive ability, or cognitive capacity as well as radically improve
            human health and extend human life spans. <br />
            <br /> The Transhuman Coin is a cryptocurrency dedicated to funding
            researches and development of technologies that enhance Human Life
            Experience. We will donate to causes that promote human life. In 1
            year after launching, we hope to report on a successful project
            funded by the Transhuman Coin. <br /> <br /> There have been a lot
            of RFI type projects lately but none of them had an actual utility
            that would make the project useful longterm. THC isthe coin that
            invests in Future Human Technologies. We are futuristic.
            <br />
            <br /> Our solution is to make a token that will not only give
            holders 2% reward on every transaction, but also send 2% of every
            transaction to the Transhuman Charity Wallet while manually making
            regular donations to the Binance charity donation wallet. We will
            ensure transparency and accountability by ensuring that all
            donations are made to reputable research centers which will be made
            public while employing reputable auditors to check the books.the
            coin that invests in Future Human Technologies. We are futuristic.{' '}
            <br />
            <br />
            Our solution is to make a token that will not only give holder 2%
            reward on every transaction, but also send 2% of every transaction
            to the Transhuman Charity Wallet while manually making regular
            donations to the Binance charity donation wallet. We will ensure
            transparency and accountability by ensuring that all donations are
            made to reputable research centers which will be made public while
            employing reputable auditors to check the books.
          </p>
          <div className='sticky bottom-0 bg-black bg-backg bg-opacity-10 backdrop-blur-sm py-6 rounded-lg -mb-3'></div>
          {/* <div className='flex mt-14 text-sm'>
          <Link className='border-[1px] border-white rounded-lg p-3' href=''>
            Understand our objective
          </Link>

          <Link className='ml-4 p-3 bg-green-500 rounded-lg font-bold' href=''>
            Visit Store
          </Link>
          </div>*/}
        </div>

        <div className='side-right w-1/2 flex items-center justify-center'>
          <Image src='/sphere.png' alt={'The Cell'} width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
