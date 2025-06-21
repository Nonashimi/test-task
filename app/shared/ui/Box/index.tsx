import React, { FC } from 'react'

type Props = {
  text?: string,
  children?: React.ReactNode,
}

const Box:FC<Props> = ({children}) => {
  return (
    <div className='bg-[#D9D9D9] rounded-xl p-3'>
      {children}
    </div>
  );
};
export default Box;