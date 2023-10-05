import React from 'react'
import {overviewElements, experiences, education} from '../constants/index';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Terminal from './Terminal';

function About() {
  return (
    <div>
      <div>
        <h2 className='my-10 font-medium text-5xl animate-fade-down animate-duration-700 animate-ease-in'>
          Overview
        </h2>
        {
          overviewElements.map((element, index) => (
          <Terminal key={index} username={element.userName} fileName={element.fileName} content={element.content}/>
          ))
        }
      </div>
      <div>
        <h2 className='font-medium my-10 text-5xl animate-fade-down animate-duration-700 animate-delay-[1200ms] animate-ease-in'>
          Work Experience
        </h2>
        <VerticalTimeline lineColor='#fff'>
        {experiences.map((experience, index) => (
            <VerticalTimelineElement
            key={index}
            dateClassName={'text-[#27005D]'}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
              <img
                src={experience.icon}
                alt={experience.companyName}
                className='w-[60%] h-[60%] object-contain'/>
            </div>
            }
            contentStyle={{ background: '#27005D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #27005D'}}
            iconStyle={{ background: `${experience.iconBg}`, color: '#fff' }}
            date={experience.date}
            >
              <h3 className='font-semibold text-3xl'>
                {experience.title}
              </h3>
              <h4 className='font-medium text-[#9BA4B5] italic'>
                {experience.companyName}
              </h4>
              <h4 className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-purpleNeon to-white'>
                {experience.technologies}
              </h4>
              <ul>
                {experience.points.map((descriptionItem, index) => (
                  <li className='list-disc' key={index}>
                    {descriptionItem}
                  </li>
                ))
                }
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div>
        <h2 className='my-10 font-medium text-5xl animate-fade-down animate-duration-700 animate-delay-[1400ms] animate-ease-in'>
          Education
        </h2>
        <VerticalTimeline lineColor='#27005D'>
          {education.map((education, index) => (
            <VerticalTimelineElement
            key={index}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
              <img
                src={education.icon}
                alt={education.title}
                className='w-[60%] h-[60%] object-contain'/>
            </div>
            }
            dateClassName={'text-[#27005D]'}
            contentStyle={{ background: '#27005D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #27005D'}}
            iconStyle={{ background: `${education.iconBg}`, color: '#000' }}
            date={education.date}>
              <a href={education.link} target='_blank'>
                <h3 className='font-semibold text-3xl'>
                  {education.title}
                </h3>
              </a>
              <h4 className='font-medium text-[#9BA4B5] italic'>
                {education.description}
              </h4>
              <ul>
                {education.modules.map((descriptionItem, index) => (
                  <li className='list-disc' key={index}>
                    {descriptionItem}
                  </li>
                ))
                }
              </ul>
            </VerticalTimelineElement>
          ))
          }
         </VerticalTimeline>
      </div>
    </div>
  )
}

export default About