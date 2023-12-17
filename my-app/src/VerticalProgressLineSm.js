import React from "react";

export default function VerticalProgressLineSm() {
  return (
    <div >
      <div
        className="vertical-progress-line w-[1.5px] h-[auto] lg:hidden bg-white ml-12 flex-col space-y-[6vh] "
        style={{ fontFamily: "Poppins" }}
      >
        <div className={`items flex space-x-2 w-[80vw] m-auto`}>
          <div className="sm-items">
            <div className="head text-sm font-bold ">
              Stanford Convent School (High School)
            </div>
            <div className="point-on-vertical-line w-[12rem] h-[1.5px] m-auto bg-white "></div>
            <div className="sm-items-img">
              <img src="stanford.img" alt="" className="h-10 mx-auto my-4" />
            </div>
          </div>
          <div className="content-on-vertical-line w-[60vw] text-opacity-60 text-slate-100 text-sm">
            Academic Excellence: Attended Stanford Convent School and secured
            85% in high school, demonstrating a strong foundation in academics
            and a commitment to learning.
          </div>
        </div>
        <div className={`items flex space-x-2 w-[80vw] m-auto`}>
          <div className="sm-items">
            <div className="head text-sm font-bold ">
              St. Giri Public School (Senior Secondary):
            </div>
            <div className="point-on-vertical-line w-[12rem] h-[1.5px] m-auto bg-white "></div>
            <div className="sm-items-img">
              <img src="st_giri.png" alt="" className="h-10 mx-auto my-4" />
            </div>
          </div>
          <div className="content-on-vertical-line w-[60vw] text-opacity-60 text-slate-100 text-sm">
            Outstanding Academic Achievement: Completed senior secondary
            schooling at St. Giri Public School with an impressive 92.8% in
            board examinations, showcasing sustained academic excellence and a
            high level of dedication
          </div>
        </div>
        <div className={`items flex space-x-2 w-[80vw] m-auto`}>
          <div className="sm-items">
            <div className="head text-sm font-bold ">
              Self-Taught and Advanced Web Development:
            </div>
            <div className="point-on-vertical-line w-[12rem] h-[1.5px] m-auto bg-white "></div>
            <div className="sm-items-img">
              <img src="react_logo.png" alt="" className="h-10 mx-auto my-4" />
            </div>
          </div>
          <div className="content-on-vertical-line w-[60vw] text-opacity-60 text-slate-100 text-sm">
            Initiated self-learning of HTML, CSS, and JavaScript, progressing to
            mastery in advanced frameworks like Tailwind CSS, React, and Node.js
            for full-stack development.
          </div>
        </div>
        <div className={`items flex space-x-2 w-[80vw] m-auto`}>
          <div className="sm-items">
            <div className="head text-sm font-bold ">
              Data Structures Proficiency:
            </div>
            <div className="point-on-vertical-line w-[12rem] h-[1.5px] m-auto bg-white "></div>
            <div className="sm-items-img">
              <img src="c++.logo.png" alt="" className="h-10 mx-auto my-4" />
            </div>
          </div>
          <div className="content-on-vertical-line w-[60vw] text-opacity-60 text-slate-100 text-sm">
            Problem Solving with C++: Engaged in systematic problem-solving by
            completing over 300+ questions on Geeks for Geeks, enhancing
            proficiency in data structures and algorithms using C++. Developed a
            logical and analytical approach to problem-solving.
          </div>
        </div>
        <div className={`items flex space-x-2 w-[80vw] m-auto`}>
          <div className="sm-items">
            <div className="head text-sm font-bold ">
              Pursuing B.Tech in Software Engineering (DTU):
            </div>
            <div className="point-on-vertical-line w-[12rem] h-[1.5px] m-auto bg-white "></div>
            <div className="sm-items-img">
              <img src="Dtu_logo.png" alt="" className="h-10 mx-auto my-4" />
            </div>
          </div>
          <div className="content-on-vertical-line w-[60vw] text-opacity-60 text-slate-100 text-sm">
            Current Pursuit: Studying Software Engineering at DTU, enhancing
            theoretical knowledge to complement practical skills gained in web
            development and data structures.
          </div>
        </div>
      </div>
    </div>
  );
}
