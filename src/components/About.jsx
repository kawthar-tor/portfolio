import React from 'react'
import {overviewElements, experiences, education} from '../constants/index';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  const SpanWrapper = ({item, style}) =>{
    return (
      <span className={`mr-3 ${style}`}>
        {item}
      </span>
    )
  }
  return (
    <div>
      <div>
        <h2 className='my-10 font-medium text-5xl animate-fade-down animate-duration-700 animate-ease-in'>
          Overview
        </h2>
        {
          overviewElements.map((element, index) => (
            <div key={index} className='text-white animate-fade animate-duration-700 animate-delay-700 animate-ease-in overflow-hidden w-2/4 rounded-lg bg-terminalGray mx-auto'>
              <div className='mb-4 bg-terminalTop flex py-2 items-center'>
                <img className='w-icon flex h-icon ' src="/src/assets/redCircle.svg" alt="" />
                <img className='w-icon flex h-icon' src="/src/assets/yellowCircle.svg" alt="" />
                <img className='w-icon flex h-icon' src="/src/assets/greenCircle.svg" alt="" />
                <img className='w-icon h-icon hover:animate-wiggle ml-10' src="/src/assets/folder.svg" alt="" />
                <span className='text-navy'>/{element.userName}-bash</span>
              </div>
              <div className='m-3'>
                <SpanWrapper item={`${element.userName}@portfolio:`} style='text-terminalGreenText mr-0 font-bold'/>
                <SpanWrapper item={"~$"}/>
                <SpanWrapper item={"cd"} style='text-terminalGreenText'/>
                <SpanWrapper item={`${element.fileName};`} />
                <p className='text-justify'>
                  {element.content}
                </p>
              </div>
            </div>
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
              <h3 className='font-semibold text-3xl'>
                {education.title}
              </h3>
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