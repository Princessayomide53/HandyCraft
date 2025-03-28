import Image from 'next/image';
import React from 'react';
import bg3 from '../../../../public/Assets/bg3.svg';
import cloud from '../../../../public/Assets/cloud.svg';
import airplane from '../../../../public/Assets/airplane.svg';

type Props = {};

const Story = (props: Props) => {
  return (
    <section className='relative'>
      <Image
        src={cloud}
        alt='background-image'
        className=' object-contain left-10 top-5  z-10 absolute'
      />
      <Image
        src={airplane}
        alt='background-image'
        className='object-contain right-2 z-20 absolute'
      />
      <div className='relative'>
        <Image
          src={bg3}
          alt='background-image'
          className='w-full object-cover  '
        />
        <div className='absolute inset-0 z-10 pt-[13rem]'>
          <h2 className='text-center text-[#032D55] font text-[2.25rem] font-bold leading-normal'>
            Our Story
          </h2>

          <p className='w-[65rem] mx-auto pt-[2.25rem] text-[#032D55] text-base font-normal leading-normal'>
            The Davidson Initiative is evolving from the story of the vision of
            a boy who watched airplanes taking off and landing at a nearby
            airport while growing up, to the story of passionate individuals
            imbued with a desire to make a difference in the aviation community.
            Our story is typified in the testimonials of individuals who through
            our programs have unleashed their full academic and professional
            potentials. Having identified the imperatives for student success,
            the Davidson Initiative is committed to being at the forefront of
            crafting innovative solutions to support students and aspiring
            professionals in their quest for unbridled success.
            <br />
            <br />
            Established as a 501(c)(3) nonprofit corporation in the state of
            Florida, the Davidson Initiative Inc is continuing to gain traction
            reaching out to students in the Greater Miami area. Through our
            mainstream programs, we have reached out to thousands of students
            and have inspired the economic empowerment of many. Our journey
            began when we found an organisation that caters specifically to
            students in the aviation community and the baton has now passed on
            to leveraging our experience in the field of aviation and education
            as a backdrop for providing students with the necessary instruments
            for academic success and career development.
            <br />
            <br />
            Our programs like the CPT refresher courses have led to the
            certification of at least seventeen new aircraft mechanics to meet
            the workforce demands in the aircraft maintenance industry.
            Our STEM program has allowed us to engage hundreds of K-12 students;
            inspiring the younger generation to pursue careers in aviation and
            STEM. Our Career Mentoring Program has helped many to put into
            perspective the myriads of opportunities in aviation and has guided
            them to decide the right career path. Our networking events have
            created a platform for many students to connect with industry
            professionals and employers. We are beginning to break new ground
            with our online DroneStream program where we give lessons on drones
            and UAVs. Also recently introduced, are
            our FlyWithUs and FlyDay programs geared toward connecting K-12
            students in South Florida with their passion for flight by offering
            discovery flight scholarships, information sessions, and networking
            with airline pilots. As fascinating as our story may seem, our
            journey has only begun and we will continue to fulfill our mission
            through excellence, innovation, and service until we attain the
            vision.
          </p>
        </div>
      </div>

      <article className='flex gap-[2.69rem] justify-center -mt-[17rem] z-10 relative'>
        <div className='w-[38.5625rem] h-[22.1875rem] space-y-[1.56rem]  bg-gradient-to-b from-[#56FFFF] to-[#BAFF76] px-[4.3125rem] py-[3.8125rem] rounded-2xl'>
          <h3 className='text-[#032D55] leading-normal text-2xl font-bold'>
            OUR MISSION
          </h3>

          <p className='text-[#032D55] font-normal text-base leading-normal'>
            To build the next generation of aviation professionals through
            student engagement. To support students and aspiring professionals
            in the aviation community and equip them with the necessary
            instruments that make for academic success and career development.
            Our core values are excellence, innovation and service.
          </p>
        </div>
        <div className='w-[38.5625rem] space-y-[1.56rem] h-[22.1875rem] bg-gradient-to-b from-[#56FFFF] to-[#BAFF76] px-[4.3125rem] py-[3.8125rem] rounded-2xl'>
          <h3 className='text-[#032D55] leading-normal text-2xl font-bold'>
            OUR VISION
          </h3>
          <p className='text-[#032D55] font-normal text-base leading-normal'>
            To build the next generation of aviation professionals through
            student engagement. To support students and aspiring professionals
            in the aviation community and equip them with the necessary
            instruments that make for academic success and career development.
            Our core values are excellence, innovation and service.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Story;
