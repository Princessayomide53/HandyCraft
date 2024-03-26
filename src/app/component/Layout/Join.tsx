import React from "react";
import Image from "next/image";
import objects from "../../../../public/Assets/objects.png";

const Join: React.FC = () => {
  return (
    <section className="">
      <div className="relative">
        <Image
          className="w-full h-[40.775rem]"
          src={objects}
          alt="Logo"
          //   width={52}
          //   height={20}
          priority
        />
        <div className="absolute z-10 top-[15.5rem] left-1/2 transform -translate-x-1/2">
          <h1
            className="text-[#68300D] text-[3rem] font-bold leading-tight text-center"
            style={{
              fontFamily: "MapleMono",
              // fontSize: "4rem",
            }}
          >
            Join the Handycraft
            <br /> Symposium
          </h1>
          <div className="mt-[2.88rem] pb-[1rem] flex justify-center">
            <button className=" flex justify-center px-12 py-3 bg-[#F9B242] text-[#68300D] text-[1.5rem] font-semibold rounded-full">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
