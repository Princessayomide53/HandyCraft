import Image from 'next/image';
import React from 'react';
import bg from '../../../../public/Assets/bg.svg';
import hero from '../../../../public/Assets/hero.png';
import CustomButton from '@/components/Common/CustomButton';

const Hero = () => {
  return (
    <header className='relative w-full h-screen flex items-center justify-center'>
      {/* Background Image */}
      <Image
        src={bg}
        alt='background'
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Content (Text + Hero Image) */}
      <div className='relative z-10 w-full'>
        {/* Left: Text Section */}
        <div className='absolute inset-0 py-[12rem] flex flex-col items-start justify-start text-left z-20 px-6'>
          <h1 className='text-[#032D55] font text-[3.75rem] font-bold leading-[4rem]'>
            Bridging the Gap,
            <br /> Building the Future
          </h1>

          <p className='text-[#032D55] pt-[1rem] font-medium leading-[1.875rem] text-xl'>
            Building the next generation of aviation <br />
            professionals through student engagement.
          </p>
          <CustomButton
            text='Learn more'
            customStyles='bg-white rounded-md font-semibold px-[4rem]'
          />
        </div>

        {/* Right: Hero Image */}
        <div className='-mt-1'>
          <Image src={hero} alt='hero' className='w-full object-contain' />
        </div>
      </div>
    </header>
  );
};

export default Hero;
