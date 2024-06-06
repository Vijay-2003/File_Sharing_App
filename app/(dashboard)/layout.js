"use client"
import React, { useState } from 'react'
import Sidenav from './_components/Sidenav';
import TopHeader from './_components/TopHeader';

function layout({children}) {
  const [toggle , setToggle] = useState(false);
  return (
    <div>
      <div
        className=" h-full md:w-64 flex-col 
      fixed inset-y-0 z-30 
      md:flex bg-white"
      >
        <Sidenav closeSideBar={() => setToggle(false)} />
      </div>

      {toggle ? (
        <div className=" h-full w-64 flex-col fixed inset-y-0 z-30 bg-white flex">
          <Sidenav closeSideBar={() => setToggle(false)} />
        </div>
      ) : null}

      <div className=" md:ml-64">
        <TopHeader />
        {children}
      </div>
    </div>
  );
}

export default layout