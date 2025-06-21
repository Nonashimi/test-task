import React, { FC } from 'react'

type Props = {
  children?: React.ReactNode,
  className?: string,
  onClick?: () => void,
}

const Button:FC<Props> = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={` bg-[#222] text-white p-4 w-full cursor-pointer flex flex-col justify-center items-center rounded-xl transition-all duration-300 hover:bg-[#363535] ${className}`}>
      {children}
    </button>
  );
};
export default Button;