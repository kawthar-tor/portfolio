import React from 'react'
import {professionalTitles, professionalSkillsOverview, technologies, personalSkillsOverview, softSkills} from '../constants/index';
import Terminal from './terminal';
function Skills() {
  return (
    <div>
      <h2 className='font-medium text-5xl'>What I can do so far ?</h2>
      <section className='flex flex-wrap gap-9 justify-center my-20'>
      {professionalTitles.map((professionalCard, index) => (
        <div key={index} style={{backgroundImage: `url(${professionalCard.bg})`,backgroundSize: 'cover'}} className='shadow-skillCard flex items-center text-center justify-center h-64 w-1/5 rounded-lg'>
          <p className='text-3xl font-semibold font-["Clicker_Script"]'>{professionalCard.content}</p>
        </div>
      ))}
      </section>
      <h2 className='font-medium text-5xl'>Programming Languages</h2>
      <section className='my-20'>
      {professionalSkillsOverview.map(element => <Terminal username={element.userName} fileName={element.fileName} content={element.content}/>)}
      <div className='flex flex-wrap my-16 justify-center text-primary gap-5'>
      {technologies.map(technology => (
        <div className='bg-navy relative w-1/5 rounded-lg p-2'>
          <h3 className='font-bold text-xl my-2 border-b-2'><img src={technology.icon} alt="technology" className='w-[30px] rounded-full h-[30px] absolute top-0 right-0' />{technology.name}</h3>
          {
          technology.frameworks.length === 0 ? '' : technology.frameworks.map(framework => (
            <div><span className='text-lg font-semibold'>Frameworks : </span><span>{framework}</span></div>
          ))
          }
        </div>
      ))}
      </div>
      </section>
      <h2 className='font-medium text-5xl'>Soft skills</h2>
      <section className='my-20'>
      {personalSkillsOverview.map(element => <Terminal username={element.userName} fileName={element.fileName} content={element.content}/>)}
        {softSkills.map(softSkill => (
          // Carousel
          <div className='my-16'>
            <h3>{softSkill.name}</h3>
            {softSkill.desc}
          </div>
        ))}

      </section>
    </div>
  )
}

export default Skills