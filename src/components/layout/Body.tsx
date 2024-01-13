import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { linkEnum } from '@/enums/link';

interface BodyProps {
  pageName: linkEnum;
  children: React.ReactNode[] | React.ReactNode;
}

function Body(props: BodyProps) {
  const { children, pageName } = props;

  return (
    <>
      <section className='min-h-screen w-full flex'>
        <Sidebar active={pageName} />
        <main className='w-[calc(100%-300px)]'>
          <Navbar pageName={pageName} />
          <section className='p-7'>
            {children}
          </section>
        </main>
      </section>
    </>
  )
}

export default Body