import Image from 'next/image';
import React from 'react';
import bg2 from '../../../../public/Assets/bg2.svg';
import CustomButton from '@/components/Common/CustomButton';

type Props = {};

const Programs = (props: Props) => {
  return (
    <section>
      <div className='relative w-full'>
        <Image
          src={bg2}
          alt='bg2'
          className='w-full object-cover -mt-16 absolute inset-0 -z-10'
        />

        <p
          className=' text-[#140111] pt-32 text-center font-bold leading-normal
        fonts text-4xl '
        >
          Programs
        </p>

        <CustomButton
          text='View all programs'
          customStyles='bg-[#80F2FF] font-semibold'
        />
      </div>
    </section>
  );
};

export default Programs;
