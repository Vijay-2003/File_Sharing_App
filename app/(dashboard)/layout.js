"use client"
import React, { useState } from 'react'
import Sidenav from './_components/Sidenav';
import TopHeader from './_components/TopHeader';

function layout({children}) {
  return (
    <div>
      <div
        className=" h-full md:w-64 flex-col 
      fixed inset-y-0 z-30 
      md:flex bg-white"
      >
        <Sidenav />
      </div>
        
      <div className=" md:ml-64">
        <TopHeader />
        {children}
      </div>
    </div>
  );
}

export default layout
