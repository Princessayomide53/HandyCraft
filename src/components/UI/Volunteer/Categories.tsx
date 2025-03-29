import Image from 'next/image';
import React from 'react';
import Volunteer from '../../../../public/Assets/Volunteer.svg';

type Props = {};

const Categories = (props: Props) => {
  const volunteer = [
    {
      id: 1,
      title: 'Event Facilitator',
      text: '  Event Facilitators are the backbone of our operation. Facilitators are our front liners and are responsible for paraphernalia organization, set-up, and project execution. This role is suitable for individuals who exude excellent organization and communication skills or individuals who are passionate about learning these skills.',
      img: Volunteer,
    },
    {
      id: 2,
      title: 'Technical Operator',
      text: 'Technical operators deal with program development and the technicalities of event coverage such as photography, scriptwriting, videography, article writing, digital media management, among others. Membership is needed to become a Technical Operator. The Davidson Initiative hosts a variety of aerospace and STEM programs/events involving drones, airplanes, robotics, coding, 3D Modeling, among others. Suitable for STEM-oriented individuals and digital content creators or individuals who are passionate about learning these skills.',
      img: Volunteer,
    },
    {
      id: 3,
      title: 'Officer',
      text: 'Officers at the Davidson Initiative are individuals that make up the leadership apparatus of the organization. Officers are in charge of setting and implementing tactical and operational goals and are involved in the day-to-day management of the organization. Officers take positions in the executive or advisory committee, are either elected or appointed, and have a term of office. The term of office is usually for an academic year starting in May. Membership is required to hold an officer position. Officers that serve on the executive committee are eligible to receive a scholarship check, a service medal, and a service award at the end of their term. Officer positions are suitable for individuals who show a strong leadership disposition or are passionate about discovering their leadership.',
      img: Volunteer,
    },
  ];
  return (
    <section className='mt-[5.25rem] relative'>
      <p className='w-[66.5rem] mx-auto text-[#032D55] leading-normal font-normal'>
        We achieve mission success through excellence, innovation, and faithful
        service. Whatever your passion is, we’ll give you a platform to express
        it, therefore, the reason we pride ourselves in cultivating a
        sustainable work environment. Volunteering with the Davidson Initiative
        always presents an exhilarating experience and an amazing opportunity to
        engage in exciting and intellectually stimulating activities. Since
        program development and event planning are at the heart of our
        undertaking, working with us will help build interpersonal
        communication, leadership, strategic project planning, management,
        team-building skills, among others. Wide-ranging professional and craft
        skills apply to what we do; whether it be writing, photography, editing,
        videography, marketing, digital media management, finance; we’ll allow
        you to utilize it.
        <br /> <br />
        The Davidson Initiative is principally a student-led organization and a
        great opportunity for students to get involved and hone their skills.
        Professionals are also welcome to work with us. View our story, vision,
        mission, and core values here. There are three volunteer/service
        categories at the Davidson Initiative:
      </p>
      <article className='flex flex-col items-center justify-evenly mt-[5.25rem]'>
        <p className='text-[#032D55] text-center font-bold leading-normal text-4xl '>
          Volunteer Categories
        </p>
        {volunteer.map((vol) => (
          <div key={vol.id} className='relative mt-[5.25rem] mr-[16rem] '>
            <Image src={vol.img} alt='Volunteer' layout='intrinsic' />
            <div
              className='bg-[#D1FFA3] absolute left-[18rem] top-16 w-[35rem] h-[23.5625rem] rounded-3xl py-[4.81rem] pl-24
            '
            >
              <h5 className='text-[#032D55] text-2xl leading-normal font-normal'>
                {vol.title}
              </h5>
              <p className='text-[#032D55] pt-3 w-[23rem] text-base leading-normal font-normal'>
                {vol.text}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Categories;
