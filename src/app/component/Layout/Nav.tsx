import React from "react";
import Image from "next/image";
import Logo from "../../../../public/Assets/Logo.svg";

const Nav: React.FC = () => {
  return (
    <section className="w-full bg-white py-3 shadow-md">
      <nav className="flex justify-between max-w-[83rem] mx-auto">
        <div>
          <Image
            className=""
            src={Logo}
            alt="Logo"
            width={52}
            height={20}
            priority
          />
        </div>
        <ul className="flex space-x-[3rem] py-0 text-[#000000] text-opacity-50 font-semibold">
          <li className="text-[#000000] text-opacity-50 font-semibold capitalize py-5 text-[1.125rem]">
            about us
          </li>
          <li className="text-[#000000] text-opacity-50 font-semibold capitalize py-5 text-[1.125rem]">
            our program
          </li>
          <li className="text-[#000000] text-opacity-50 font-semibold capitalize py-5 text-[1.125rem]">
            contact us
          </li>
          <li className="text-[#000000] text-opacity-50 font-semibold capitalize py-5 text-[1.125rem]">
            {" "}
            Faq
          </li>
          <li className="text-[#68300D] text-opacity-50  py-3">
            <button className="capitalize font-semibold px-10 py-3 bg-[#F9B242] rounded-full text-[1.125rem]">
              register
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
