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
      className={`mt-[2rem]  py-[1rem] leading-normal text-[#032D55] text-lg font-bold ${customStyles}`}
      //   onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
