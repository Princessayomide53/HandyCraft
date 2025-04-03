import Image from 'next/image';
import React from 'react';

type Props = {
  text: string;
  text2: string;
  img: string;
};

const Headers: React.FC<Props> = ({ text, text2, img }: Props) => {
  return (
    <main className='max-w-[66.25rem] mt-[4.74rem] mx-auto'>
      <p
        className='text-[#53465F] text-base font-normal leading-normal'
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Image src={img} alt='' className='my-[3.75rem] object-contain' />
      <p
        className='text-[#032D55] text-base font-normal leading-normal'
        dangerouslySetInnerHTML={{ __html: text2 }}
      />
    </main>
  );
};

export default Headers;
