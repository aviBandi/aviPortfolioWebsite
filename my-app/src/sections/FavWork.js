import React from 'react'
import Project from '../components/project'
import {projectInfo} from "../data.js"
import { Link } from "react-router-dom"
const FavWork = () => {

  return (
    <div className='max-w-5xl mx-auto mt-32'>
      <div className='flex items-center'>
        <button className='text-3xl font-palanquin font-semibold inline-block'>
          Check out some of my favorite <span className='text-blue-600'>Work</span>
        </button>
        <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-4"></hr>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full justify-between gap-6 mt-10'>


        {
          projectInfo.slice(0, 3).map((project) => (
            <Project title={project.title} desc={project.desc} skills={project.skills} imgSrc={project.imgSrc} websiteLink={project.websiteLink} codeLink={project.codeLink} />
          ))

        }

      </div>
      <Link to="/portfolio">
        <div className='max-w-lg mx-auto flex justify-center mt-12'>
          <button className='w-full px-2 font-semibold py-[1px] text-blue-600 border-blue-600 border-[2px] rounded-xl hover:text-white hover:bg-blue-600 transition-colors'>
            View all projects
          </button>
        </div>
      </Link>

    </div >
  )
}

export default FavWork;
