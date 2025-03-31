import CustomButton from '@/components/Common/CustomButton';
import React from 'react';

type Props = {};

const Requirement = (props: Props) => {
  return (
    <section className='mt-[10.75rem] mb-[7rem] space-y-[4rem] max-w-7xl mx-auto'>
      <div>
        {' '}
        <h2 className='text-[#032D55] text-center font-bold leading-normal text-4xl'>
          Requirements
        </h2>
        <p className='leading-normal pt-[1.5rem] font-normal text-base text-[#032D55]'>
          We welcome high school and college students, as well as professionals
          to serve in any capacity. Although the Davidson Initiative promotes
          aerospace and STEM, volunteers do not have to be in those fields to
          work with us. We are looking for individuals who are passionate about
          giving back and impacting others to join our team. We typically
          encourage technical operators to put in a minimum of 3 hours weekly
          and officers, 5 hours weekly. Membership is also required for the two
          aforementioned service categories. While membership or time input is
          not required for event facilitators, event facilitators would need to
          attend event rehearsals or dry runs. Since the Davidson Initiative is
          based in Pembroke Pines, Florida, we typically are looking to have
          volunteers from the South Florida Area.
        </p>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-[#032D55] text-center font-bold leading-normal text-4xl'>
          Membership
        </h2>
        <p className='leading-normal pt-[1.5rem] font-normal text-base text-[#032D55]'>
          We welcome high school and college students, as well as professionals
          to serve in any capacity. Although the Davidson Initiative promotes
          aerospace and STEM, volunteers do not have to be in those fields to
          work with us. We are looking for individuals who are passionate about
          giving back and impacting others to join our team. We typically
          encourage technical operators to put in a minimum of 3 hours weekly
          and officers, 5 hours weekly. Membership is also required for the two
          aforementioned service categories. While membership or time input is
          not required for event facilitators, event facilitators would need to
          attend event rehearsals or dry runs. Since the Davidson Initiative is
          based in Pembroke Pines, Florida, we typically are looking to have
          volunteers from the South Florida Area.
        </p>
        <CustomButton
          text='Membership'
          customStyles='bg-[#80F2FF] px-6 rounded-[0.9375rem] mt-[2rem]'
        />
      </div>
      <div>
        <h2 className='text-[#032D55] text-center font-bold leading-normal text-4xl'>
          Application
        </h2>
        <p className='leading-normal pt-[1.5rem] font-normal text-base text-[#032D55]'>
          Ready to join our dynamic team? Then send in your application because
          we can’t wait to connect and work with you! Click on "Volunteer
          Application" below to apply for the executive committee officer
          positions. Use the "Officer Honours & Awards" and "Officer
          Responsibilities" buttons to view open positions, requirements, and
          benefits.
        </p>
        <div className='flex justify-around'>
          <CustomButton
            text='Volunteer Application'
            customStyles='bg-[#80F2FF] px-6 rounded-[0.9375rem] mt-[2rem]'
          />{' '}
          <CustomButton
            text='Officer Honours & Awards'
            customStyles='bg-[#80F2FF] px-6 rounded-[0.9375rem] mt-[2rem]'
          />{' '}
          <CustomButton
            text='Officer Responsibilities'
            customStyles='bg-[#80F2FF] px-6 rounded-[0.9375rem] mt-[2rem]'
          />
        </div>
      </div>
      <p></p>
    </section>
  );
};

export default Requirement;
