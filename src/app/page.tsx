// import Image from "next/image";

import About from '@/components/UI/Home/About';
import Hero from '@/components/UI/Home/Hero';
import Nav from '@/components/UI/Home/Nav';

// import HomePage from './component/HomePage';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
    </main>
  );
}
