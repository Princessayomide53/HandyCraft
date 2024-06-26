import React from "react";
import Nav from "./Layout/Nav";
import Hero from "./Layout/Hero";
import Main from "./Layout/Main";
import Programs from "./Layout/Programs";
import Testimonial from "./Layout/Testimonial";
import Join from "./Layout/Join";

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Main />
      <Programs />
      <Testimonial />
      <Join />
      {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
    </>
  );
};

export default HomePage;
