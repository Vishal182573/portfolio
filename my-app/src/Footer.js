import React from 'react'

export default function Footer() {
  return (
    <div className='border-t-[5px]  border-white px-8 mb-6 py-4 lg:px-12 flex-col  '>
      <div className="flex justify-center items-center font-bold lg:text-2xl font-[Poppins] mb-6">Thanks for visiting! Let's create something awesome</div>
      <div className="footer-img flex justify-center items-center"><img src="hacker_img.jpg" alt="" className='w-full lg:w-[30vw]'/></div>
      <div className="flex justify-center items-center mt-5"><p>© 2023 Vishal-Sharma_Portfolio</p></div>
    </div>
  )
}
