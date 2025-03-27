import Image from 'next/image';
import React from 'react';
import object from '../../../../public/Assets/object.svg';
import about from '../../../../public/Assets/about.svg';
import about2 from '../../../../public/Assets/about2.svg';

type Props = {};

const About = (props: Props) => {
  return (
    <main>
      <Image src={object} alt='object' className='object-contain -mt-24' />
      <div className='flex gap-[1.6rem] justify-center items-end -mt-32'>
        <h1 className='text-[#032D55] text-[2.25rem] font-medium leading-normal'>
          Building the <b>next</b> <br />
          <b>generation</b> of aviation <br />
          professionals through
          <br /> student engagement
          <br />
        </h1>
        <Image
          src={about}
          alt='header-image'
          className='object-contain -mt-7 w-[45.625rem]'
        />
      </div>
      <article className='flex gap-[1.75rem] mt-[2.06rem] justify-center items-start'>
        <Image
          src={about2}
          alt='header-image'
          className='object-contain w-[37.375rem]'
        />
        <div className='bg-[#FFF8B4] w-[31.875rem] h-[33.8125rem] rounded-3xl py-[3.62rem] px-[1.5rem]'>
          <p className='text-[#032D55] font-normal leading-normal text-base'>
            Davidson Initiative is a 501(c)(3) nonprofit organization with a
            mission to build the next generation of aviation professionals
            through student engagement.
            <br /> <br />
            We are supporting students in aviation and connecting them with the
            necessary tools for academic accomplishment and career development.
            <br />
            <br /> Davidson Initiative is working to bridge the workforce gap
            and curb the personnel shortage in aviation by attempting to boost
            student completion rate in FAA training schools and to implement
            engagement strategies for K-12 students thereby inspiring the
            younger generation to pursue aviation and STEM careers.
            <br />
            <br />
            Consequently, we are ensuring a continuous flow of eligible
            candidates in the workforce pipeline, to meet the rising demands of
            an expanding industry.
          </p>
        </div>
      </article>
    </main>
  );
};

export default About;
