import React from 'react'
// import Button from '../components/Button'
// import sheCan from '../images/sheCan.jpeg';
import { Link } from 'react-router-dom'
import pdf from "../documents/resume.pdf"
import linkedin from "../icons/linkedinicon.svg"
import github from "../icons/github.svg"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { githubLink, linkedinLink } from '../data.js'
import Avi from "../images/aviHeroPic.png"
const Hero = () => {
  // const statistics = [
  //   { value: '250+', label: 'Workshops' },
  //   { value: '3000+', label: 'Attendees' },
  //   { value: '9+', label: 'Countries' },
  // ]
  const [mytext] = useTypewriter({
    words: ['Web Developer', "Programmer", "Designer"],
    loop: {},
  })
  const socials = [
    {
      name: "linkedin", svgfile: linkedin, href: linkedinLink
    },
    {
      name: "github", svgfile: github, href: githubLink
    },

  ]

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>

        <h1 className='mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:whitespace-nowrap relative z-10 pr-10 text-4xl'>
            Hello, I am
          </span>
          <br />
          <span className='inline-block mt-3 text-blue-600 text-8xl'>Avi Bandi</span>
        </h1>

        <p className='font-palanquin font-bold text-4xl  mt-10 mb-14 sm:max-w-sm'>
          <span>
            {mytext}
          </span>
          <span >
            <Cursor cursorColor='blue' cursorStyle="/>" />
          </span>
        </p>
        <div className='flex flex-cols gap-x-6'>
          {
            socials.map((social) => (
              <a href={social.href} target='_blank'>
                <div className='border-2 rounded-full px-2 py-2 border-blue-600 hover:bg-blue-500'>
                  <img fill="blue" className='blue-600' src={social.svgfile} />
                </div>
              </a>
            ))
          }
        </div>

        <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-5'>
          <a href={pdf} target='_blank'>
            <button className='text-white text-2xl font-semibold font-palanquin border-2 border-blue-600 bg-blue-600 rounded-lg px-3 py-2 hover:text-blue-600 hover:bg-transparent transition-colors'>
              Resume
            </button>
          </a>
          <Link to="/portfolio">
            <button className='text-blue-600 text-2xl font-semibold font-palanqui rounded-lg px-3 py-2 border-blue-600 border-2 hover:text-white hover:bg-blue-600 transition-colors'>
              My Work
            </button>
          </Link>
        </div>
      </div>



      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-center'>
        <img
          src={Avi}
          alt='shoe colletion'
          width={500}
          className='object-contain relative z-10 object-bottom'
        />
      </div>
    </section>
  )
}

export default Hero;

