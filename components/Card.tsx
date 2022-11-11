import Image from 'next/image';

interface Props {
  image: string;
  heading: string;
  text: string;
  status: string;
}

const Card = ({ image, heading, text, status }: Props) => {
  const steps = text.split(',').map((step: string) => {
    return (
      <li key={step} className='list-none mt-2'>
        <span className='text-green-400'>
          {status.toLowerCase() == 'coming soon' ? 'o' : <>&#10003;</>}
        </span>{' '}
        {step}
      </li>
    );
  });

  return (
    <div className='flex-col border-[1px] rounded-2xl border-green-700 min-w-[20rem] max-w-xs pb-10 mt-8'>
      <div className='py-14 relative flex items-center justify-center rounded-2xl'>
        <Image className='pt-8' src={image} alt='' width={100} height={100} />
        <p
          className={
            status.toLowerCase() == 'coming soon'
              ? 'absolute top-8 right-7 p-1 px-2 bg-slate-500 rounded-2xl bg-opacity-90 text-black font-dm font-bold text-sm'
              : 'absolute top-8 right-7 py-1 px-2 rounded-[50%] bg-green-500 bg-opacity-90 text-black font-dm font-bold text-sm'
          }
        >
          {status}
        </p>
      </div>

      <div className='h-3/6 relative flex-col px-8 pt-7 pb-2 -mt-7 bg-secaccent rounded-b-2xl'>
        <p className='text-4xl text-white font-bold'>{heading}</p>
        <div className='text-sm mt-3 text-white'>{steps}</div>
      </div>
    </div>
  );
};

export default Card;
