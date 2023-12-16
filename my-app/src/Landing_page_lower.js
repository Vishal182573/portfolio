import React from 'react'

export default function Landing_page_lower() {
  return (
    <div>
      <div className="landing-page-lower-container border-t-[1px]  border-[#c4c4f5] mx-8 mt-4 mb-10 py-8 lg:px-8 flex-col">
        <div className="opacity-50 px-5 flex justify-start items-start text-sm ">
          what I have done so far
        </div>
        <div
          className="past-experience flex justify-start text-xl lg:text-2xl px-5 font-bold "
          style={{ fontFamily: "Poppins" }}
        >
          Past Experience
        </div>
      </div>
    </div>
  )
}
