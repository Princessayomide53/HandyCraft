import Image from 'next/image';
import React from 'react';
import bg from '../../../../public/Assets/bg.svg';
import hero from '../../../../public/Assets/hero.png';

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
          <h1 className='text-[#032D55] text-[3.75rem] font-bold leading-[4rem]'>
            Bridging the Gap,
            <br /> Building the Future
          </h1>

          <p className='text-[#032D55] pt-[1rem] font-medium leading-[1.875rem] text-xl'>
            Building the next generation of aviation <br />
            professionals through student engagement.
          </p>
          <button className='mt-[2rem] px-[5rem] py-[1rem] leading-normal bg-white text-[#032D55] text-lg rounded-md font-bold'>
            Learn More
          </button>
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
