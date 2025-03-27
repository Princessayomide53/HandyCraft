import Image from 'next/image';
import React from 'react';
import Headers from '../../../../public/Assets/Header.svg';

type Props = {
  text: string;
};

const Header = ({ text }: Props) => {
  return (
    <header className='relative'>
      <Image
        src={Headers}
        alt='header-image'
        className='object-cover h-auto w-full'
      />

      <h1 className=' font-bold flex justify-center items-center text-white font text-[3.75rem] absolute inset-0'>
        {' '}
        {text}
      </h1>
    </header>
  );
};

export default Header;
