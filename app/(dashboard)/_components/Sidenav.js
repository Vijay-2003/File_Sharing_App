"use client";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link"
function Sidenav({closeSideBar}) {
  const Menulist = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload"
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files"
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade" 
    },
  ];

  const [activeIndex, setactiveIndex] = useState();
  return (
    <div className=" shadow-sm border-r h-full">
      <div className=" p-5 border-b">
        <Image src={"/logo.svg"} width={150} height={100} />
      </div>
      <div className=" flex flex-col float-left w-full">
        {Menulist.map((item, index) => (
          <Link href={item.path}>
            <button
              className={`flex gap-2 p-4 px-6
             hover:bg-gray-100 w-full text-gray-500
              ${activeIndex == index ? " text-primary bg-blue-50" : null}`}
              key={index}
              onClick={() => {
                setactiveIndex(index);
                closeSideBar();
              }}
            >
              {/* <a href={item.path}> */}
              <item.icon /> {item.name}
              {/* </a> */}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidenav;
