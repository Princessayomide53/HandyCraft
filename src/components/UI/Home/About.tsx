import Image from 'next/image';
import React from 'react';
import about from '../../../../public/Assets/about.svg';

type Props = {};

const About = (props: Props) => {
  return (
    <main className='px-6 py-24 flex justify-between'>
      <div>
        <h1 className='text-[#032D55] font text-[2.25rem] font-bold leading-normal'>
          Get to know Davidson Initiative
        </h1>
        <p className='text-[#032D55] pt-[2.25rem] text-base font-normal leading-normal'>
          Davidson Initiative is a 501(c)(3) nonprofit organization with a
          mission to build
          <br /> the next generation of aviation professionals through student
          engagement.
          <br />
          <br />
          We are supporting students in aviation and connecting them with the
          <br />
          necessary tools for academic accomplishment and career development. .
        </p>
      </div>
      <Image src={about} alt='about' />
    </main>
  );
};

export default About;
