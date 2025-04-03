import Headers from '@/components/Common/Headers';
import Header from '@/components/UI/About/Header';
import React from 'react';
import forum from '../../../public/Assets/forum.svg';
import CustomButton from '@/components/Common/CustomButton';

const page = () => {
  return (
    <div>
      <Header text='Handycraft Symposium' />
      <Headers
        text='The Rising Forum is one of our K-12 Outreach programs that is designed to introduce young students to the limitless possibilities of a career in the aerospace industry. This career awareness strategy is achieved by having aerospace professionals engage students in a panel discussion; sharing their inspiring success stories to spark students’ interest in aerospace. On this platform, we spur young students to dream big and look beyond the barriers they might face on their journey to relevance.'
        img={forum}
        text2='With the rise in demand for aerospace professionals in the United States, the Rising Forum was conceived with the end goal of ensuring a sustainable influx of individuals in the workforce pipeline. We showcase the immense opportunities and ignite the passion of youngsters to start for the industry. <br />
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
