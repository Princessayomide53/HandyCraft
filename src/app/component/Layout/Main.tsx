import React from "react";
import Image from "next/image";
import item1 from "../../../../public/Assets/item1.png";
import item2 from "../../../../public/Assets/item2.png";
import item3 from "../../../../public/Assets/item3.png";

const Main: React.FC = () => {
  type Skills = {
    id: number;
    title: string;
    content: string;
    img: any;
  };

  const items: Skills[] = [
    {
      id: 1,
      title: "Workshops and Learning Sessions",
      content:
        "Led by experienced professionals and knowledgeable peers, these interactive sessions cover a wide range of topics, from coding and robotics to environmental science and mathematics.",
      img: item1,
    },
    {
      id: 2,
      title: "Hands-On Projects and Experiments",
      content:
        "From building robots and designing circuits to conducting science experiments and engineering challenges, there's no shortage of exciting opportunities for kids to apply their knowledge and problem-solving skills.",
      img: item2,
    },
    {
      id: 3,
      title: "Collaborative Learning Experience",
      content:
        "Join forces with teammates, brainstorm innovative solutions, and push the boundaries of what's possible as you engage in friendly competition and work towards common goals. ",
      img: item3,
    },
  ];
  return (
    <main className="bg-white w-full h-[85rem]">
      <div className="mt-[7.67rem]">
        <h2
          className="text-[#68300D] text-[3rem] text-center"
          style={{
            fontFamily: "MapleMono",
          }}
        >
          Activate their inner skills
        </h2>
        <div className="grid-cols-1 space-y-[3.5rem] pt-[5rem] pb-[4.] ">
          {items.map((skill, index) => (
            <div key={skill.id}>
              <aside className="flex justify-center gap-[9rem] max-w-[55rem] mx-auto">
                {index % 2 === 0 ? (
                  <>
                    <Image
                      className="w-[21.86231rem] h-[21.3125rem] -mt-[3.3rem]"
                      src={skill.img}
                      alt="skills"
                      priority
                    />
                    <div>
                      <h3
                        className="text-[#007B8E] text-[2.25rem] leading-tight font-bold"
                        style={{ fontFamily: "MapleMono" }}
                      >
                        {skill.title}
                      </h3>

                      <p className="text-[#68300D] text-[1.25rem] leading-[1.5625rem] font-medium pt-[1rem]">
                        {skill.content}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3
                        className="text-[#007B8E] text-[2.25rem] leading-tight font-bold"
                        style={{ fontFamily: "MapleMono" }}
                      >
                        {skill.title}
                      </h3>
                      <p className="text-[#68300D] text-[1.25rem] leading-[1.5625rem] font-medium pt-[1rem]">
                        {skill.content}
                      </p>
                    </div>
                    <Image
                      className="w-[21.86231rem] h-[21.3125rem] -mt-[3.3rem]"
                      src={skill.img}
                      alt="skills"
                      priority
                    />
                  </>
                )}
              </aside>
            </div>
          ))}
        </div>
        <div className="mt-[5.88rem] pb-[1rem] flex justify-center">
          <button className=" flex justify-center px-12 py-3 bg-[#F9B242] text-[#68300D] text-[1.5rem] font-semibold rounded-full">
            Register
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
