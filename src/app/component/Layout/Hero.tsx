import React from "react";
import Image from "next/image";
import hero from "../../../../public/Assets/hero.png";
import vector from "../../../../public/Assets/vector.png";
import Partners from "../../../../public/Assets/Partners.png";
import "../../component/fonts.css";

const Hero: React.FC = () => {
  return (
    <section className="w-full h-full bg-[#FFF5C2] mb-[4.87rem]">
      <main className="max-w-[83rem] mx-auto">
        <aside className="flex justify-between">
          <div>
            <h1
              className="text-[#68300D] text-[4rem] font-bold leading-tight pt-[5.81rem]"
              style={{
                fontFamily: "MapleMono",
                // fontSize: "4rem",
              }}
            >
              Where curiosity <br />
              meets innovation
            </h1>
            <Image
              className="w-[24.47538rem] h-[2.53519rem] -mt-[3.3rem] ml-44"
              src={vector}
              alt="Logo"
              //   width={52}
              //   height={20}
              priority
            />
            <p className="pt-[1.12rem] text-[#68300D] text-[1.5rem] font-medium leading-[2.2875rem]">
              We're passionate about inspiring young
              <br /> minds to explore the wonders of STEM <br />
              (Science, Technology, Engineering, and
              <br /> Mathematics). Join us on an exciting
              <br /> journey of discovery and creativity!
            </p>
            <button className="mt-[1.88rem] px-10 py-3 bg-[#F9B242] text-[#68300D] text-[1.5rem] font-semibold rounded-full">
              Join club
            </button>
          </div>
          <div>
            <Image
              className="w-[37.125rem] h-[37.375rem]"
              src={hero}
              alt="Logo"
              //   width={52}
              //   height={20}
              priority
            />
          </div>
        </aside>
      </main>
      <div className="shadow-md">
        <Image
          className=""
          src={Partners}
          alt="Logo"
          //   width={52}
          //   height={20}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
