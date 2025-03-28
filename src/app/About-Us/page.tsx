import About from '@/components/UI/About/About';
import Header from '@/components/UI/About/Header';
import Story from '@/components/UI/About/Story';
import Team from '@/components/UI/About/Team';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header text='About Us' />
      <About />
      <Story />
      <Team />
    </div>
  );
};

export default page;
