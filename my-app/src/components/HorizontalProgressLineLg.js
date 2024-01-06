import React from "react";

export default function HorizontalProgressLineLg() {
  return (
    <div className="h-[50vh] mt-[3rem] mb-[7rem] lg:flex hidden ">
      <div
        className="horizontal-progress-line w-[90vw] h-[1.5px] bg-white mx-auto  justify-between lg:flex"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="items flex-col ">
          <div className="lg-items ">
            <div className="lg-items-img my-2 ">
              <img src="stanford.img" alt="" className="h-6 mx-auto " />
            </div>
            <div className="lg-items-head text-[15px] font-bold">Stanford Convent School<br/> (High School)</div>
            <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          </div>
          <div className="content-progress-line text-[12px] text-opacity-60 text-slate-100 m-auto w-[12rem]">
            Academic Excellence: Attended Stanford Convent School and secured
            85% in high school, demonstrating a strong foundation in academics
            and a commitment to learning.
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="lg-items ">
            <div className="lg-items-img my-2 ">
              <img src="st_giri.png" alt="" className="h-6 mx-auto " />
            </div>
            <div className="lg-items-head text-[15px] font-bold">St. Giri Public School<br/> (Senior Secondary):</div>
            <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          </div>
          <div className="content-progress-line text-[12px] text-slate-100 text-opacity-60 m-auto w-[12rem]">
          Outstanding Academic Achievement: Completed senior secondary
            schooling at St. Giri Public School with an impressive 92.8% in
            board examinations, showcasing sustained academic excellence and a
            high level of dedication
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="lg-items ">
            <div className="lg-items-img my-2 ">
              <img src="react_logo.png" alt="" className="h-6 mx-auto " />
            </div>
            <div className="lg-items-head text-[15px] font-bold">Self-Taught and Advanced<br/> Web Development:</div>
            <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          </div>
          <div className="content-progress-line text-[12px] text-slate-100 text-opacity-60 m-auto w-[12rem]">
          Initiated self-learning of HTML, CSS, and JavaScript, progressing to
            mastery in advanced frameworks like Tailwind CSS, React, and Node.js
            for full-stack development.
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="lg-items ">
            <div className="lg-items-img my-2 ">
              <img src="c++.logo.png" alt="" className="h-6 mx-auto " />
            </div>
            <div className="lg-items-head text-[15px] font-bold">Data Structures Proficiency:</div>
            <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          </div>
          <div className="content-progress-line text-[12px] text-slate-100 text-opacity-60 m-auto w-[12rem]">
          Problem Solving with C++: Engaged in systematic problem-solving by
            completing over 300+ questions on Geeks for Geeks, enhancing
            proficiency in data structures and algorithms using C++. Developed a
            logical and analytical approach to problem-solving.
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="lg-items ">
            <div className="lg-items-img my-2 ">
              <img src="Dtu_logo.png" alt="" className="h-6 mx-auto " />
            </div>
            <div className="lg-items-head text-[15px] font-bold">Pursuing B.Tech in<br/> Software Engineering (DTU):</div>
            <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          </div>
          <div className="content-progress-line text-[12px] text-slate-100 text-opacity-60 m-auto w-[12rem]">
          Current Pursuit: Studying Software Engineering at DTU, enhancing
            theoretical knowledge to complement practical skills gained in web
            development and data structures.
          </div>
        </div>

      </div>
    </div>
  );
}
