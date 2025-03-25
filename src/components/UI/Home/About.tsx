import Image from 'next/image';
import React from 'react';
import about from '../../../../public/Assets/about.svg';
import CustomButton from '@/components/Common/CustomButton';

type Props = {};

const cards = [
  {id: 1,img: },
  {
    id: 2,
    title: 'Support for Aviation Students',
    description:
      'We support students in aviation and connect them with the necessary tools for academic accomplishment and career development.   ',
  },
  {id: 1,img: },
  {
    id: 4,
    title: 'Bridging the Workforce Gap',
    description:
      'We are working to bridge the workforce gap and curb the personnel shortage in aviation by attempting to boost student completion rate in FAA training schools.',
  },
];

const About = (props: Props) => {
  return (
    <main className='px-6 py-24 '>
      <div className='flex justify-between'>
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
            necessary tools for academic accomplishment and career development.
            .
          </p>

          <CustomButton
            text='Learn more'
            customStyles='bg-[#80F2FF] font-semibold'
          />
        </div>
        <Image src={about} alt='about' />
      </div>
      <div></div>
    </main>
  );
};

export default About;
