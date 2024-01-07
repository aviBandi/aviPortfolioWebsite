import React from 'react'
import { Link } from 'react-router-dom'
const GetInTouch = () => {
  return (

    <div className='max-w-5xl mx-auto mt-16'>
      <div className='flex items-center justify-center'>
        <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-4"></hr>
        <h1 className='text-center text-3xl font-palanquin font-semibold'><span className='text-blue-600'>Interested</span> in working with me?</h1>
        <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-4"></hr>
      </div>
      <div className='max-w-lg mx-auto'>
        <Link to="/services">
          <button className='mt-6 w-full px-2 font-semibold py-[1px] text-blue-600 border-blue-600 border-[2px] rounded-xl hover:text-white hover:bg-blue-600 transition-colors'>
            Check out my services!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GetInTouch



// <div className='flex items-center'>
//   <h1 className='text-blue-600 font-semibold text-3xl font-palanquin inline-block'>Skills <span className='text-black'>and</span> Technologies
//   </h1>
//   <hr class="h-1 mt-2 rounded-2xl bg-black flex-1 mx-4"></hr>
// </div>
