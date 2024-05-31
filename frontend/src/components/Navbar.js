import React, { useState } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  const [display, setdisplay] = useState(1);
  const showlist = () => {
    setdisplay(!display);
  };
  const scrollDestiny = (id) => {
    const destination = document.getElementById(id);
    if (destination) {
      console.log("Scrolling to:", destination.id);
      destination.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.log("Destination not found.");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" p-3 w-full bg-[#1a1a1a] flex lg:justify-around justify-between items-center border-[1px] rounded-lg border-white duration-1000 ease-in-out"
    >
      <div className="name lg:text-2xl text-xl text-white font-bold font-[Poppins]">
        <a href="/">Portfolio</a>
      </div>
      <div className={`right-part hidden lg:block`}>
        <ul className="flex space-x-14 ">
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Past-Experience")}
          >
            Past Journey
          </li>
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Skills-Set")}
          >
            Skills Set
          </li>
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Contact-Me")}
          >
            Contact Me
          </li>
        </ul>
      </div>
      <div
        className={`open-lists cursor-pointer lg:hidden p-1 ${
          display ? "" : "border-2 border-white rounded"
        }`}
        onClick={showlist}
      >
        <div className="w-[25px] h-[3px] bg-white my-[5px]"></div>
        <div className="w-[25px] h-[3px] bg-white my-[5px]"></div>
        <div className="w-[25px] h-[3px] bg-white my-[5px]"></div>
      </div>
      {/*position:absolute gives total estimate without consideration of overflow so use of fixed in side scrolling animation*/}
      <div
        className={`after-list lg:hidden h-[100vh] fixed bg-[#1a1a1a] top-[4rem] transition-transform ease-in-out duration-1000 transform right-0 p-10 font-[Poppins] ${
          display ? " translate-x-full" : ""
        }`}
      >
        <ul className="flex-col space-y-16  py-11 w-[25vw] ">
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Past-Experience")}
          >
            Past Experience
          </li>
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Skills-Set")}
          >
            Skills Set
          </li>
          <li
            className="cursor-pointer select-none hover:text-[#aaaaf4] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer select-none hover:text-[rgb(170,170,244)] hover:text-[1.05rem]"
            onClick={() => scrollDestiny("Contact-Me")}
          >
            Contact Me
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
