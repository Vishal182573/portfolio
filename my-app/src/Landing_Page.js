import React from "react";
import TypingAnimation from './TypingAnimation';
export default function Landing_Page() {
  return (

    <div className="px-2 lg:px-14 py-10 flex lg:flex-row justify-around ">
      <div className="land-page-about  text-4xl font-semibold  flex justify-center items-center ">
        <div className="inner-land-page-about flex-col w-[35rem]  ">
          <div className="w-[35rem] py-2">Hii, My name is <span className="text-[#98FF98]">Vishal Sharma</span> </div> <div className="py-2">and I am a passionate</div><div className="text-[#c6a1e8] py-2"><TypingAnimation/></div>
        </div>
      </div>
      <div className="land-page-image lg:block ">
        <img src="soft-dev-img.png" alt="" className="w-[30rem]" />
      </div>
    </div>
  );
}
