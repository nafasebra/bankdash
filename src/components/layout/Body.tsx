import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface BodyProps {
  pageName: string;
  children: React.ReactNode[] | React.ReactNode;
}

function Body(props: BodyProps) {
  const { children, pageName } = props;

  return (
    <>
      <section className='min-h-screen w-full flex'>
        <Sidebar />
        <main className='w-[calc(100%-300px)]'>
          <Navbar pageName={pageName} />
          {children}
        </main>
      </section>
    </>
  )
}

export default Body