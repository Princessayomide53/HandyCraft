import Image from 'next/image';
import React from 'react';
import bg2 from '../../../../public/Assets/bg2.svg';
import pro1 from '../../../../public/Assets/Pro1.png';
import pro2 from '../../../../public/Assets/Pro2.png';
import pro3 from '../../../../public/Assets/Pro3.png';
import CustomButton from '@/components/Common/CustomButton';

type Props = {};

const Programs = (props: Props) => {
  const program = [
    {
      id: 1,
      title: 'Rising Forum',
      img: pro1,
      text: 'Showcasing aerospace careers to K-12 students and igniting their passion to pursue the same.',
    },
    {
      id: 2,
      title: 'FlyDay South Florida',
      img: pro2,
      text: 'Connecting young aspiring aviators with their passion for flight.',
    },
    {
      id: 3,
      title: 'Handycraft Symposium',
      img: pro3,
      text: 'Showcasing aerospace careers to K-12 students and igniting their passion to pursue the same.',
    },
  ];
  return (
    <section>
      <div className='relative w-full -mt-[24rem]'>
        <Image
          src={bg2}
          alt='bg2'
          className='w-full object-cover absolute inset-0 -z-10'
        />

        <p
          className=' text-[#140111] pt-[12rem] text-center font-bold leading-normal
        fonts text-4xl '
        >
          Programs
        </p>

        <div className='flex px-10 justify-between mt-[4rem]'>
          {program.map((item) => (
            <div key={item.id} className='relative'>
              <Image
                src={item.img}
                alt={item.title}
                className='object-cover w-[24.75rem] h-auto '
              />

              <div className='absolute inset-0 flex flex-col justify-end p-14'>
                <p className='text-white text-[1.875rem] leading-normal font-bold'>
                  {item.title}
                </p>

                <p className='text-white text-base font-medium leading-[1.5625rem]'>
                  {item.text}
                </p>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-12'>
          <CustomButton
            text='View all programs'
            customStyles='bg-[#80F2FF] font-semibold'
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;
