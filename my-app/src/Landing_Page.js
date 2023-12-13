import React from 'react'

export default function Landing_Page() {
  return (
    <div className='px-2 lg:px-14 py-10 flex lg:flex-row justify-around'>
      <div className="land-page-about w-[25rem] text-2xl font-bold"></div>
      <div className="land-page-image lg:block"><img src="soft-dev-img.png" alt=""  className='w-[30rem]'/></div>
    </div>
  )
}
