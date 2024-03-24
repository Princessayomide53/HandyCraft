import React from "react";
import Image from "next/image";
import A from "../../../../public/Assets/A.png";
// import item2 from "../../../../public/Assets/item2.png";
// import item3 from "../../../../public/Assets/item3.png";

const Programs: React.FC = () => {
  type Programs = {
    id: number;
    title: string;
    content: string;
    img: any;
  };
  const programsData: Programs[] = [
    {
      id: 1,
      title: "Aerodynamics",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed sodales cursus convallis morbi interdum integer. ",
      img: A,
    },
    {
      id: 2,
      title: "Beginner Robotics",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed sodales cursus convallis morbi interdum integer. ",
      img: A,
    },
    {
      id: 3,
      title: "RC Technology",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed sodales cursus convallis morbi interdum integer. ",
      img: A,
    },
  ];
  return (
    <section className="w-full h-[53rem] bg-[#FFF7CC]">
      <div className="max-w-[83rem] mx-auto">
        <h2
          className="pt-[3.81rem] text-[#68300D] text-[3rem] font-bold leading-tight text-center"
          style={{
            fontFamily: "MapleMono",
          }}
        >
          Our Programs
        </h2>
        <div className="grid-cols-3 grid place-items-center justify-center">
          {programsData.map((pro) => (
            <div key={pro.id} className="mt-[6rem] ">
              <Image
                className="w-[19.75rem] h-[22.3125rem] -mt-[3.3rem]"
                src={pro.img}
                alt="programs"
                priority
              />
              <h2
                style={{
                  fontFamily: "MapleMono",
                }}
                className="pt-[1.75rem] text-[2rem] text-[#007B8E] leading-tight font-bold text-center"
              >
                {pro.title}
              </h2>

              <p className="text-[#68300D] text-center w-[21.5rem] pt-[0.75rem] text-[1.25rem] font-medium leading-[1.5625rem]">
                {pro.content}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[3.98rem] pb-[1rem] flex justify-center">
          <button className=" flex justify-center px-12 py-3 bg-[#F9B242] text-[#68300D] text-[1.5rem] font-semibold rounded-full">
            See all Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
