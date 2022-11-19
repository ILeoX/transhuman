import Question from './Question';

export default function Faq() {
  const faq = [
    {
      question: 'What`s Transhuman Coin?',
      answer:
        'Transhumanism is the ideology of enhancing human life through Science and Technology. The Transhuman Coin is the first and only token dedicated to Transhumanism..',
    },
    {
      question: 'Where can I find a whitepaper?',
      answer: 'Our Whitepaper has been updated. You can find it here.',
    },
    {
      question: 'Where can I find out about the charities?',
      answer:
        'Transhuman Coin seeks to change the existing charity environment using the power of cryptocurrencies and decentralising the decision process. Initially a 1% tax is applied to all trading transactions of Transhuman, which is sent to a publicly viewable Binance Charity Wallet. Transparency and accountability The charity wallet for Transhuman will be publicly viewable on the block chain so that holders are not only aware of the funds raised, but how the funds are being spent.Whenever donations are sent to recipients, the transactions are captured and added to the publicly searchable database on our website. https://www.binance.charity/binance-charity-wallet/',
    },
    {
      question: 'Where can I buy and what`s the slippage?',
      answer:
        'You can buy Transhuman token at PancakeSwap. Chart can be found at PooCoin and BoggedFinance. Set the slippage to 10% or more and you`ll be a happy mooner with us.',
    },
    {
      question: 'What are the tokenomics?',
      answer:
        'Tokenomics total supply 7,000,000,000 2% of every Transaction is sent to Marketing Wallet, 2% is redistributed to holders including the Transhuman Fund Wallet and 2% is sent to the Liquidity Pool. Listing Pancake Price 1BNB = 3,122,990,000.',
    },
    {
      question: 'Why the slippage should be 10%?',
      answer:
        'Slippage is 10% or more, 6% Tax on each transaction, 2% goes to marketing, 2% Sent To Liquidity Pool, and 2% redistributed proportionately to each holder as our “thank you” for being an investor.',
    },
    {
      question: 'What purpose of charity?',
      answer:
        'Each transaction will be charged 2% tax fee and deposited in a Transhuman donation wallet to fund Pro-life Technologies and a portion from this will be manually donated to Binance Charity Wallet. https://www.binance.charity/binance-charity-wallet/',
    },
  ];

  return (
    <div
      className={`${
        true ? 'relative pt-32 flex-col justify-center clip fall-anim' : 'invis'
      }`}
      id='faqs'
    >
      <section className='absolute inset-0 flex items-center justify-center opacity-20 blur-2xl'>
        <div className='bg-gradient-to-bl from-[#19193d] to-[#0f0f31] w-32 h-32 rounded-full'></div>
      </section>
      <div className='text-4xl text-center font-bold text-white py-3 pb-24'>
        <p className={`${true ? '' : 'invis'}`}>
          {/* <span ref={containerRef}></span> */}
          <span className='text-green-500'> Frequently </span>
          Asked Questions
        </p>
      </div>

      {faq.map((quest) => {
        return <Question question={quest.question} answer={quest.answer} />;
      })}
    </div>
  );
}
