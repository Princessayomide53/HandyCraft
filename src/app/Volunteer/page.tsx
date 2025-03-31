import Header from '@/components/UI/About/Header';
import Categories from '@/components/UI/Volunteer/Categories';
import Requirement from '@/components/UI/Volunteer/Requirement';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header text='Volunteer' />
      <Categories />
      <Requirement />
    </div>
  );
};

export default page;
