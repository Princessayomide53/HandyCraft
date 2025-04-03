import Headers from '@/components/Common/Headers';
import Header from '@/components/UI/About/Header';
import React from 'react';
import mentor from '../../../public/Assets/mentor.svg';
import CustomButton from '@/components/Common/CustomButton';

const page = () => {
  return (
    <div>
      <Header text='Mentor Cafe' />
      <Headers
        text='Mentor Cafe is the career mentorship platform of Davidson Initiative and it creates an avenue for students to connect with industry professionals for the purpose of career advising. This engagement puts into perspective the myriads of opportunities in the industry and helps students to decide, define, and design their career pathway of interest.<br/>
Whether you’re a student studying at K-12, college-level, or FAA (Federal Aviation Administration) training schools; or you’re an aspiring professional with an interest in aviation and aerospace, then you are well suited for our mentoring program. The mentoring program is designed to help students to connect with industry professionals and be introduced to the plethora of opportunities in the industry.'
        img={mentor}
        text2='With the rise in demand for aerospace professionals in the United States, the Rising Forum was conceived with the end goal of ensuring a sustainable influx of individuals in the workforce pipeline. We showcase the immense opportunities and ignite the passion of youngsters to start for the industry.<br/>

Rising Forum is hosted in K-12 schools across South Florida. Interested schools should kindly fill out a Program Request Form.'
      />

      <CustomButton
        text='Fill Program Request Form'
        customStyles='bg-[#FFD159] rounded-2xl px-5 my-[5rem]'
      />
    </div>
  );
};

export default page;
