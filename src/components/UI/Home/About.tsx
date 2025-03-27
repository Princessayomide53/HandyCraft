import Image from 'next/image';
import React from 'react';
import about from '../../../../public/Assets/about.svg';
import CustomButton from '@/components/Common/CustomButton';
import card1 from '../../../../public/Assets/card1.png';
import card2 from '../../../../public/Assets/card2.png';
import card3 from '../../../../public/Assets/card3.png';
import card4 from '../../../../public/Assets/card4.png';
import wallpaper2 from '../../../../public/Assets/wallpaper2.svg';
import wallpaper from '../../../../public/Assets/wallpaper.png';

type Props = {};

const cards = [
  { id: 1, img: card1 },
  {
    id: 2,
    title: 'Support for Aviation Students',
    description:
      'We support students in aviation and connect them with the necessary tools for academic accomplishment and career development.   ',
  },
  { id: 3, img: card2 },
  {
    id: 4,
    title: 'Bridging the Workforce Gap',
    description:
      'We are working to bridge the workforce gap and curb the personnel shortage in aviation by attempting to boost student completion rate in FAA training schools.',
  },
  {
    id: 5,
    title: 'Inspiring the younger generation',
    description:
      'We strive to increase student completion rates in FAA training schools and implement engagement strategies for K-12 students, inspiring the younger generation to pursue careers in aviation and STEM fields.',
  },
  { id: 6, img: card3 },
  {
    id: 7,
    title: 'Ensuring Eligible Workforce Candidate',
    description:
      'Consequently, we are ensuring a continuous flow of eligible candidates in the workforce pipeline, to meet the rising demands of an expanding industry.',
  },
  { id: 8, img: card4 },
];

const About = (props: Props) => {
  return (
    <main className='mt-24 '>
      <div className='px-8 flex justify-between'>
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
      <div className='relative'>
        <Image
          src={wallpaper}
          alt='wallpaper'
          className='object-contain w-[15.5rem] absolute inset-0 mr-auto -mt-[7rem] -z-10'
        />
      </div>

      <div className=' grid grid-cols-4 relative z-20 px-2 place-items-center gap-y-[1.6rem] mt-[7rem]'>
        {cards.map((card, index) =>
          card.img ? (
            <Image
              key={index}
              src={card.img}
              alt='Card Image'
              className='w-[18.75rem] h-[18.75rem]'
            />
          ) : (
            <div
              key={index}
              className={`w-[18.75rem] h-[18.75rem] 
                ${index === 1 ? 'bg-[#E25559]' : ''}
                 ${index === 3 ? 'bg-[#B3EA7B]' : ''} 
                ${index === 4 ? 'bg-[#D756ED]' : ''} ${
                index === 6 ? 'bg-[#56FFFF]' : ''
              } rounded-2xl ${index === 4 ? 'py-[0.767rem]' : ''} ${
                index === 6 ? 'py-[1rem]' : ''
              }  py-[2.28rem] px-[1.75rem]`}
            >
              <h2
                className={`${
                  index === 6 ? 'text-[#1F6474]' : 'text-white'
                } font text-[1.3rem] font-bold leading-normal`}
              >
                {card.title}
              </h2>
              <p
                className={` ${
                  index === 6 ? 'text-[#1F6474]' : 'text-white'
                } pt-[1rem] text-base font-normal leading-normal`}
              >
                {card.description}
              </p>
            </div>
          )
        )}
      </div>
      <Image
        src={wallpaper2}
        alt='wallpaper2'
        className='object-contain w-[17.5rem] ml-auto -mt-[13rem] -z-10'
      />
    </main>
  );
};

export default About;
