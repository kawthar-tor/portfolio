import React, {useState} from 'react';
import { projects, projectFilters} from '../constants/index';
function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-10'>
        {projectFilters.map((filter, index) => (
          <button key={index} className={`font-bold mr-5 ${activeFilter === filter.name ? "text-purpleNeon" : ""}`} onClick={() => setActiveFilter(filter.name)}>
            <img src={filter.icon} className={`w-icon inline-block h-icon mr-2 font-bold ${activeFilter === filter.name ? " bg-purpleNeon rounded-3xl" : ""}`} alt={filter.name} />
            <span >{filter.name}</span>
          </button>
        ))}
      </div>
      <div className='flex p-16 md:p-0 justify-center flex-wrap gap-10'>
      {
        (activeFilter === 'All' ? projects : projects.filter(project => project.tags.find(tag => tag.name === activeFilter))).map((project, index) => (
          <div key={index} className={`flex gap-3 hover:shadow-projectCard hover:scale-[1.02] animate-fade transition duration-700 ease-in-out md:w-1/4 flex-col items-center overflow-hidden p-7 rounded-tl-3xl rounded-br-3xl bg-navy text-primary cursor-pointer`}>
            <img src={project.image} alt="projectImage" className='w-full h-56 object-cover' />
            <h3 className='font-semibold text-xl text-center'>{project.title}</h3>
            <div className='text-justify' dangerouslySetInnerHTML={{ __html: project.description}} />
            <div className='flex gap-3 justify-center flex-wrap'>
            {project.tags.map((tag, index) => (
              <span key={index} className={`font-semibold ${tag.style}`}>#{tag.name}</span>
            ))}
            </div>
            <div>
            <button className='bg-primary text-xs rounded-full p-1 mr-1'>
            <a href={project.sourceCodeLink}><img className='w-[25px] h-[25px] inline-block mr-1' src="/src/assets/github.svg" alt="" /><span className='text-navy font-semibold hover:text-purpleNeon'>Code source</span></a>
            </button>
            <button className='bg-primary text-sm rounded-full p-1'>
            <img className='w-[25px] h-[25px] inline-block mr-1' src={project.status.icon} alt="" /><span className='text-navy font-semibold'>{project.status.title}</span>
            </button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}
export default Projects