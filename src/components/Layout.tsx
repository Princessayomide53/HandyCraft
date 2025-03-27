import React, { Children } from 'react';
import Nav from './UI/Home/Nav';
import Footer from './UI/Home/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
