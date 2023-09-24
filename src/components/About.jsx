import React from 'react'
import {overviewElements, experiences, education} from '../constants/index';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <div>
      <div>
        <h2 className='font-medium text-5xl hover:text-purpleNeon animate-fade-down animate-duration-700 animate-ease-in'>
          Overview
        </h2>
        <div className='animate-fade animate-duration-700 animate-delay-700 animate-ease-in'>
        {
          overviewElements.map((element, index) => (
            <div key={index}>
              <span>
                {element.userName}
              </span>
              <span>$</span>
              <p>
                <span>cd</span><span>{element.fileName};</span>
              </p>
              <p>
                {element.content}
              </p>
            </div>
          ))
        }
        </div>
      </div>
      <div>
        <h2 className='font-medium text-5xl hover:text-purpleNeon animate-fade-down animate-duration-700 animate-delay-[1200ms] animate-ease-in'>
          Work Experience
        </h2>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
            key={index}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
              <img
                src={experience.icon}
                alt={experience.companyName}
                className='w-[60%] h-[60%] object-contain'/>
            </div>
            }
            contentArrowStyle={{ borderRight: '7px solid #fff'}}
            iconStyle={{ background: `${experience.iconBg}`, color: '#fff' }}
            date={experience.date}
            className='vertical-timeline-element--work'>
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
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
          ))
          }
        </VerticalTimeline>
      </div>
      <div>
        <h2 className='font-medium text-5xl hover:text-purpleNeon animate-fade-down animate-duration-700 animate-delay-[1400ms] animate-ease-in'>
          Education
        </h2>
        <VerticalTimeline layout='1-column-left'>
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
            contentArrowStyle={{ borderRight: '7px solid #fff'}}
            iconStyle={{ background: `${education.iconBg}`, color: '#000' }}
            date={education.date}
            className='vertical-timeline-element--work'>
              <h3 className="vertical-timeline-element-title">
                {education.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
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

{/* <VerticalTimeline>
 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #000' }}
    date="2011 - 203"
    iconStyle={{ background: '#000', color: '#fff' }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
      <img
        src="/src/assets/linkedin.svg"
        alt="work"
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
    }
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
</VerticalTimeline> */}
      </div>
    </div>
  )
}

export default About