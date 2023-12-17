import React from "react";

export default function LandingPageProjectsPage() {
  return (
    <div className="border-t-[1px]  border-[#c4c4f5] mx-8 px-8 mb-6 py-4 lg:px-12" id="Projects">
      <div className="project-container  h-10 flex justify-start items-center text-2xl font-bold font-[Poppins] mt-4 border-b-2 border-[#c4c4f8]">
        <span className="bg-white border-2 w-4 h-4 rounded-full mx-2"></span>
        Projects
      </div>
      <div className="projects-container-cards flex-col  flex-row-edited p-4 my-4 lg:space-x-[10vw]">
        <div className="projects-container-card px-2 py-2 bg-[#9b59b6] mt-8 text-[#ffd700] border-2 rounded-xl flex-col ">
          <div className="card-img mb-3 flex justify-center">
            <a href="#">
              <img src="scenary.png" alt="" className=" h-[20vh]" />
            </a>
          </div>
          <div className="card-content flex justify-center font-bold font-[Poppins]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            repellendus eveniet pariatur amet, provident tempora,
          </div>
        </div>
        <div className="projects-container-card px-2 py-2 bg-[#9b59b6] mt-8 text-[#ffd700] border-2 rounded-xl flex-col ">
          <div className="card-img mb-3 flex justify-center">
            <a href="#">
              <img src="scenary.png" alt="" className=" h-[20vh]" />
            </a>
          </div>
          <div className="card-content flex justify-center font-bold font-[Poppins]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            repellendus eveniet pariatur amet, provident tempora,
          </div>
        </div>
        <div className="projects-container-card px-2 py-2 bg-[#9b59b6] mt-8 text-[#ffd700] border-2 rounded-xl flex-col ">
          <div className="card-img mb-3 flex justify-center">
            <a href="#">
              <img src="scenary.png" alt="" className=" h-[20vh]" />
            </a>
          </div>
          <div className="card-content flex justify-center font-bold font-[Poppins]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            repellendus eveniet pariatur amet, provident tempora,
          </div>
        </div>
      </div>
    </div>
  );
}
