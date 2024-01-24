import React from 'react'
import Testimonial from '../components/Testimonial'
import { testimonialInfo } from '../data'
const Testimonials = () => {
  return (
    <div className='max-w-5xl mx-auto mt-16'>
      <div className='flex items-center'>
        <h1 className='font-semibold text-3xl font-palanquin'>Why people <span className='text-blue-600'>Love</span> my <span className='text-blue-600'>Work</span></h1>
        <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-4"></hr>

      </div>
      <p className='text-slate-gray mt-1 font-montserrat text-lg'>You don't have to take my word for it. Take theirs!</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-16 gap-8'>
        {
          testimonialInfo.map((testimonialInfo) => (
            <div className='flex justify-center items-center w-full h-full'>
              <Testimonial testimonail={testimonialInfo.testimonial} 
              imageSrc={testimonialInfo.imgSrc} 
              personName={testimonialInfo.personName} 
              personTitle={testimonialInfo.personTitle}
              />
            </div>
          ))
        }

        {/* <div className='flex justify-center items-center'>
          <Testimonial />
        </div>
        <div className='flex justify-center items-center'>
          <Testimonial />
        </div> */}
      </div>
    </div>
  )
}

export default Testimonials
