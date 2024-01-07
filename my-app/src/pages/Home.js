import React from 'react'
import "../index.css"
import Hero from '../sections/Hero'
import Nav from '../components/Nav'
import FavWork from '../sections/FavWork'
import Testimonials from '../sections/Testimonials'
import GetInTouch from '../sections/GetInTouch'
import Skills from '../sections/Skills'
import Footer from "../components/Footer"
const Home = () => {
  {window.scrollTo(0, 0)}
  return (
    <main className=''>
      <Nav />
      <div className='bg-orange-50'>
        <div className='relative px-4 sm:px-12'>
          <section className='bg:gray-100 xl:padding-l wide:padding-r sm:pb-12 pb-6 max-w-7xl mx-auto'>
            <Hero />
          </section>
        </div>
      </div>
      <div className='relative px-4 sm:px-12'>
        <section className='xl:padding-l wide:padding-r sm:pb-12 pb-6' id="about">
          <FavWork />
        </section>
      </div>
      <div className='bg-gray-100'>
        <br></br>
        <div className='relative px-4 sm:px-12'>
          <section className='xl:padding-l wide:padding-r padding-b'>
            <Testimonials />
          </section>
        </div>
      </div>
      <div className='relative px-4 sm:px-12'>
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Skills />
        </section>
      </div>
      <div className='bg-gray-100'>
        <div className='relative px-4 sm:px-12 py-[0.5px]'>
          <section className='xl:padding-l wide:padding-r padding-b'>
            <GetInTouch />
          </section>
        </div>
      </div>
      <div className=''>
        <div className='relative px-4 sm:px-12'>
          <section className='xl:padding-l wide:padding-r padding-b'>
            <Footer />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home;


