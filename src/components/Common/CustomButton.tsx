import React from 'react';

type Props = {
  text: string;
  //   onClick: () => void;
  customStyles: string;
};

const CustomButton: React.FC<Props> = ({
  text,
  //   onClick,
  customStyles,
}: Props) => {
  return (
    <button
      className={`mt-[2rem] px-[5rem] py-[1rem] leading-normal text-[#032D55] text-lg rounded-md font-bold ${customStyles}`}
      //   onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
