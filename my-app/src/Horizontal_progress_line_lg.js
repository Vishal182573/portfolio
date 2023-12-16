import React from 'react'

export default function Horizontal_progress_line_lg() {
  return (
    <div>
      <div
        className="horizontal-progress-line w-[90vw] h-[1.5px] bg-white mx-auto hidden justify-between lg:flex"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="items flex-col space-y-5 relative top-[-5.7vh] ">
         <div className="lg-items ">
            <div className="lg-items-img my-2 "><img src="stanford.img" alt="" className="h-4 mx-auto "/></div>
          <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
         </div>
          <div className="content-progress-line text-sm font-serif ">
            Academic Excellence: Attended Stanford Convent School and secured
            85% in high school, demonstrating a strong foundation in academics
            and a commitment to learning.
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          <div className="content-progress-line text-sm font-serif m-auto">
            Outstanding Academic Achievement: Completed senior secondary
            schooling at St. Giri Public School with an impressive 92.8% in
            board examinations, showcasing sustained academic excellence and a
            high level of dedication
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          <div className="content-progress-line text-sm  m-auto">
            Initiated self-learning of HTML, CSS, and JavaScript, progressing to
            mastery in advanced frameworks like Tailwind CSS, React, and Node.js
            for full-stack development.
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          <div className="content-progress-line text-sm font-serif m-auto">
            Problem Solving with C++: Engaged in systematic problem-solving by
            completing over 300 questions on Geeks for Geeks, enhancing
            proficiency in data structures and algorithms using C++. Developed a
            logical and analytical approach to problem-solving.
          </div>
        </div>
        <div className="items flex-col space-y-5 ">
          <div className="vertical-progress-line h-[10vh] w-[1.5px] bg-white m-auto"></div>
          <div className="content-progress-line text-sm font-serif m-auto">
            Current Pursuit: Studying Software Engineering at DTU, enhancing
            theoretical knowledge to complement practical skills gained in web
            development and data structures.
          </div>
        </div>
      </div>
    </div>
  )
}
