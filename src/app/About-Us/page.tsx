import About from '@/components/UI/About/About';
import Header from '@/components/UI/About/Header';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header text='About Us' />
      <About />
    </div>
  );
};

export default page;
