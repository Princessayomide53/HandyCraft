import Image from 'next/image';
import React from 'react';
import cloud2 from '../../../../public/Assets/cloud2.svg';
import cloud from '../../../../public/Assets/cloud.svg';
import t1 from '../../../../public/Assets/t1.svg';
import t2 from '../../../../public/Assets/t2.svg';
import t3 from '../../../../public/Assets/t3.svg';
import t4 from '../../../../public/Assets/t4.svg';

type Props = {};

const Team = (props: Props) => {
  const team = [
    {
      id: 1,
      title: 'Caron Delancy-Simard',
      text: 'Member, Board of Directors ',
      img: t1,
    },
    {
      id: 2,
      title: 'Sean Gallagan, PhD',
      text: 'Member, Board of Directors ',
      img: t4,
    },
    {
      id: 3,
      title: 'Davidson Nzekwe-Daniel',
      text: 'Chief Executive Officer  ',
      img: t2,
    },
    {
      id: 4,
      title: 'Arantxa Villegas',
      text: 'Chief of Staff ',
      img: t3,
    },
  ];
  return (
    <section className='mt-[1.88rem] mb-[5rem] px-8'>
      <Image src={cloud2} alt='cloud-image' className=' object-contain ' />
      <Image
        src={cloud}
        alt='cloud-image'
        className=' object-contain ml-auto'
      />

      <h3 className='text-[#032D55] text-center -mt-12  font-bold leading-normal font text-4xl'>
        Our Team
      </h3>
      <div className='flex justify-around mt-[3.28rem]'>
        {team.map((items) => (
          <div key={items.id} className='flex flex-col'>
            <Image src={items.img} alt='teams-image' />
            <h4 className='text-center pt-[1.56rem] font-normal leading-normal text-[#032D55] text-xl'>
              {items.title}
            </h4>

            <p className='text-center font-normal leading-normal text-[#032D55] text-sm'>
              {items.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
