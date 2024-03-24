import React, { useEffect } from 'react'
import './Intro.css'
import decent_display_picture from '../../decent_display_picture.jpg'


const Intro = () => {
  return (
    <div className='flex flex-wrap-reverse lg:flex-nowrap justify-center items-center w-screen my-16 mt-14 lg:my-20 lg:-space-x-10'>
      <div className="flex flex-col items-start mt-6 mx-6 lg:mx-0 lg:w-1/5">
        <div className="-ml-1 -mt-1 lg:mt-0 lg:-ml-1 text-5xl lg:text-7xl">Hi</div>
        <div className="text-xl lg:text-3xl">I am Malik,{<br />}a computer science post-graduate looking for techno-managerial work to improve life in the land of koalas. 🐨
        </div>
      </div>
      <div className='flex flex-col items-center lg:items-end space-y-1 w-screen lg:w-2/5'>
        <div><img className='rounded-md object-scale-down h-270 w-270 shadow shadow-md' src={decent_display_picture} alt='display_picture'></img></div>
        <div className="animation text-4xl lg:text-5xl text-center lg:text-right text-white">
          <div className="first"><div>Software Engineer</div></div>
          <div className="second"><div>Web Developer</div></div>
          <div className="third"> <div>Project Manager</div></div>
        </div>
      </div>
    </div>
  )
}

export default Intro;