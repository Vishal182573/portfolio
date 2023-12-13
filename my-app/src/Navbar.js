import React, { useState } from "react";
import {Link} from "react-router-dom"
export default function Navbar() {
    const [display,setdisplay] = useState(1)
    const showlist=()=>{
       setdisplay(!display)

    }
  return (
    <div className=" p-4 h-[4.5rem] bg-blue-950 text-white flex justify-around items-center  ">
      <div className="name lg:text-2xl text-lg" style={{fontFamily:"sans-serif"}}>
        Vishal's Portfolio
      </div>
      <div className={`right-part hidden lg:block`}>
        <ul className="flex space-x-14 ">
        <li className="cursor-pointer"><a href="/">Home</a></li>
          <li className="cursor-pointer"><a href="/">About</a></li>
          <li className="cursor-pointer"><a href="/">Services</a></li>
          <li className="cursor-pointer"><a href="/">Projects</a></li>
          <li className="cursor-pointer"><a href="/">Contact Me</a></li>
        </ul>
      </div>
      <div className={`open-lists cursor-pointer lg:hidden p-1 ${display ? '' : 'border-2 border-white rounded'}`} onClick={showlist}>
          <div className="w-[25px] h-[3px] bg-white my-[5px]"></div>
          <div className="w-[25px] h-[3px] bg-white my-[5px]"></div>
          <div className="w-[25px] h-[3px] bg-white my-[5px]"></div>
      </div>
      <div className={`after-list lg:hidden absolute top-[4.5rem] transition-transform ease-in-out duration-1000 transform right-0 p-10  ${display?' translate-x-full':''}`}>
      <ul className="flex-col space-y-16  py-11 w-[25vw] ">
          <li className="cursor-pointer"><a href="/">Home</a></li>
          <li className="cursor-pointer"><a href="/">About</a></li>
          <li className="cursor-pointer"><a href="/">Services</a></li>
          <li className="cursor-pointer"><a href="/">Projects</a></li>
          <li className="cursor-pointer"><a href="/">Contact Me</a></li>
        </ul>
      </div>
    </div>
    
  );
}
