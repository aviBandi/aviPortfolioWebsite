import React from 'react'

const Skills = () => {
  const skillset = [
    {
      name: "Python",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "React.js",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "TailwindCSS",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Java",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Arduino",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
      name: "Git",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "MySQL",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "OpenCV",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    }
  ]
  return (
    <div className='max-w-5xl mx-auto mt-16'>
      <div className='flex items-center'>
        <h1 className='text-blue-600 font-semibold text-3xl font-palanquin inline-block'>Skills <span className='text-black'>and</span> Technologies
        </h1>
        <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-4"></hr>
      </div>
      <p className='text-slate-gray mt-1 font-montserrat text-lg'>I can't lie, these are the enablers of my success!</p>
      <div className='grid grid-rows-5 grid-cols-2 md:grid-rows-2 md:grid-cols-5 bg-gray-100 rounded-xl mt-5 shadow-xl'>

        {
          skillset.map((skill) => (
            <div className='flex items-center justify-center flex-col py-5'>
              <img
                alt={skill.name}
                width={60}
                src={skill.href} />
              <p className='text-slate-gray opacity-80 text-md'>{skill.name}</p>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Skills
