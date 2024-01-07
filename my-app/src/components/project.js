import React from 'react'
import Github from "../icons/github.svg"
const Project = ({ title, desc, skills, imgSrc, websiteLink, codeLink }) => {

    return (
        <div>
            <div>
                {
                    codeLink === "" && websiteLink === "" ?
                    <div className='flex bg-blue-50 h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray'>
                        <img
                            src={imgSrc}
                            className='py-2 px-2 rounded-2xl aspect-video'
                        />
                    </div> :
                    <a href={websiteLink} target='_blank'>
                        <div className='flex bg-blue-50 h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray hover:border-blue-500 hover:border-2 transition hover:-translate-y-1'>
                            <img
                                src={imgSrc}
                                className='py-2 px-2 rounded-2xl aspect-video'
                            />
                        </div>
                    </a>
                }
                {/* <a href={websiteLink} target='_blank'>
                    <div className='flex bg-blue-50 h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray hover:border-blue-500 hover:border-2 transition hover:-translate-y-1'>
                        <img
                            src={imgSrc}
                            className='py-2 px-2 rounded-2xl aspect-video'
                        />
                    </div>
                </a> */}

                <div className='flex justify-between mt-2'>

                    <div>
                        <h1 className='font-palanquin font-semibold text-blue-600 mt-1 text-md'>{title}</h1>
                    </div>

                    {
                        codeLink === "" ?
                            <div></div> :
                            <a href={codeLink} target='_blank'>
                                <img src={Github} className='text-blue-600' />
                            </a>
                    }
                </div>
                <p className='text-sm text-slate-gray'>{desc}</p>
                <div className='flex gap-2 flex-wrap mt-1'>

                    {
                        skills.map((skill) => (
                            <p className='border-[1px] rounded-lg font-medium text-white font-palanquin text-sm bg-slate-400 px-2'>
                                {skill}
                            </p>
                        ))

                    }
                </div>
            </div>


        </div>
    )
}

export default Project;






//    {/* {
//         codeLink === "" && websiteLink === "" ?
//             <div className='flex h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray hover:border-blue-500 hover:border-2 transition hover:-translate-y-1'>
//                 {/* <img
//                     src={imgSrc}
//                     width={"200px"}
//                     className='py-2 px-2'
//                 /> */}
//                 <div className='py-2 px-2 bg-slate-300'>
//                     <h1>No Preview Available</h1>
//                 </div>
//             </div> :
//             <a href={websiteLink} target='_blank'>
//                 <div className='flex h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray hover:border-blue-500 hover:border-2 transition hover:-translate-y-1'>
//                     <img
//                         src={imgSrc}
//                         width={"200px"}
//                         className='py-2 px-2'
//                     />
//                 </div>
//             </a>
//     } */}