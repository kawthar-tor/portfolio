import React, {useState} from 'react'
import {professionalTitles, tools, professionalSkillsOverview, technologies, personalSkillsOverview, softSkills} from '../constants/index';
import Terminal from './terminal';
function Skills() {
  const [currentIndexes, setCurrentIndexes] = useState([0,1,2]);
  const nextItem = () => {
    setCurrentIndexes([(currentIndexes[0]+1)%softSkills.length,(currentIndexes[1]+1)%softSkills.length,(currentIndexes[2]+1)%softSkills.length]);
  }
  return (
    <div>
      <h2 className='font-medium text-3xl md:text-5xl'>What I can do so far ?</h2>
      <section className='flex flex-wrap gap-9 justify-center my-20'>
      {professionalTitles.map((professionalCard, index) => (
        <div key={index} className='shadow-skillCard flex items-center text-center justify-center h-64 w-1/3 md:w-1/5 rounded-lg'>
          <p className='text-3xl font-semibold font-["Clicker_Script"]'>{professionalCard}</p>
        </div>
      ))}
      </section>
      <h2 className='font-medium text-3xl md:text-5xl'>Programming Languages</h2>
      <section className='my-20'>
        <Terminal username={professionalSkillsOverview.userName} fileName={professionalSkillsOverview.fileName} content={professionalSkillsOverview.content}/>
        <div className='flex flex-wrap my-16 justify-center text-primary gap-5'>
        {technologies.map(technology => (
          <div className='bg-navy relative w-1/4 md:max-w-1/6 rounded-lg p-2'>
            <h3 className='font-bold text-xl my-2 border-b-2'><img src={technology.icon} alt="technology" className='w-[30px] rounded-full h-[30px] absolute top-0 right-0' />{technology.name}</h3>
            {
            technology.frameworks.length === 0 ? '' : <div className=''><span className='text-lg font-semibold'>Frameworks : </span>{technology.frameworks.map((framework, index) => (<i key={index} className='mx-1'>{framework}</i>))}</div>
            }
          </div>
        ))}
        </div>
      </section>
      <h2 className='font-medium text-3xl md:text-5xl'>Tools</h2>
      <section className='flex justify-center flex-wrap gap-8 p-20 my-20'>
        {tools.map(tool => (
          <img src={tool.icon} alt="Programming tool" className='pointer-cursor w-[10%]'/>
        ))}
      </section>
      <h2 className='font-medium text-3xl md:text-5xl'>Soft skills</h2>
      <section className='my-20'>
        <Terminal username={personalSkillsOverview.userName} fileName={personalSkillsOverview.fileName} content={personalSkillsOverview.content}/>
      <div className='flex py-16 gap-4 justify-center cursor-pointer hover:animate-none animate-fade-left animate-infinite animate-duration-[3000ms]' onAnimationIteration={nextItem}>
      {
        currentIndexes.map(index => (
          <div key={index} className='w-1/3 h-56 md:h-96'>
            <p className='shadow-skillCard flex flex-col gap-y-3 px-2 items-center font-semibold italic'>
              <img className='w-[28px] h-[28px] self-start' src="/src/assets/leftQuote.svg" alt="" />
              {softSkills[index].description}
              <img className='w-[28px] h-[28px] self-end' src="/src/assets/rightQuote.svg" alt="" />
            </p>
            <div className='bg-cover w-56 mx-auto h-56 my-5 rounded-lg' style={{backgroundImage : `url(${softSkills[index].image})`}}></div>
          </div>
        ))
      }
      </div>
      </section>
    </div>
  )
}
export default Skills