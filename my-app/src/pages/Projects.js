import React from 'react'
import Nav from '../components/Nav'
import Project from '../components/project'
import {projectInfo} from '../data.js'
import Footer from '../components/Footer.js'
const Projects = () => {
    {window.scrollTo(0, 0)}
    return (

        <div>
            <Nav />
            <div className='relative px-4 sm:px-12'>
                <div className='xl:padding-l wide:padding-r sm:pb-12 pb-6'>
                    <div className='max-w-5xl mx-auto'>
                        <div className='pt-40 flex justify-center items-center'>
                            <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-12"></hr>

                            <h1 className='text-blue-600 font-semibold text-4xl font-palanquin inline-block'>Portfolio</h1>
                            <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-12"></hr>

                        </div>
                        <div className='max-w-sm mx-auto mt-3'>
                            <p className='text-slate-gray mt-1 font-palanquin text-md text-center'>
                                Over the years my interests have ranged from data visualization to AI and web development. Here are some of my favorite projects over the years.</p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>

                            {
                                projectInfo.map((project) => (
                                    <Project title={project.title} desc={project.desc} skills={project.skills} imgSrc={project.imgSrc} websiteLink={project.websiteLink} codeLink={project.codeLink}/>
                                ))
                            }


                        </div>



                    </div>
                </div>
            </div>
            <br></br>
            <Footer />
        </div>
    )
}

export default Projects
