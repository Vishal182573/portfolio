import React from 'react'
import TypingAnimation from "./TypingAnimation";

export default function LandingPageUpper() {
  return (
    <div id='Home'>
      <div className="flex-row-edited my-7 px-2 lg:px-14 lg:my-0 py-8 flex-col space-y-14 lg:space-y-0 ">
        <div className="land-page-about text-2xl lg:text-4xl font-semibold  flex justify-center items-center ">
          <div className="inner-land-page-about-forFlex  flex-col w-[35rem]  ">
            <div className="w-[auto] lg:py-2">
              {" "}
              {/*w-[35rem] gives error due to size*/}
              Hii, My name is
              <span className="text-[#98FF98]"> Vishal Sharma</span>
            </div>
            <div className="lg:py-2">and I am a passionate</div>
            <div className="text-[#c6a1e8] lg:py-2">
              <TypingAnimation />
            </div>
          </div>
        </div>
        <div className="land-page-image lg:block ">
          <img src="soft-dev-img.png" alt="" className="w-[30rem]" />
        </div>
      </div>
    </div>
  )
}
