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
      <Sidebar />
      <main>
        {children}
      </main>
      <Navbar pageName={pageName} />
    </>
  )
}

export default Body