import React, { FC } from 'react'

type Props = {
  children?: React.ReactNode,
}

const Container:FC<Props> = ({children}) => {
  return (
    <div className='w-[80%] mx-auto my-12'>
      {children}
    </div>
  );
};
export default Container;