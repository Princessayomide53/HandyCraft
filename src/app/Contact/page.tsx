import Header from '@/components/UI/About/Header';
import Contact from '@/components/UI/Contact/Contact';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header text='Contact' />
      <Contact />
    </div>
  );
};

export default page;
