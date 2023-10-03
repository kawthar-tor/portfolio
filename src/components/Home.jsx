import React from 'react'
import {fullName, introductionItems, profile, introductionParagraphs, platformsLinks} from '../constants/index';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='flex flex-wrap md:flex-nowrap justify-center'>
      <div className='p-6 max-w-sm'>
        {
          profile.map((picture) => (
            <img className='rounded-full w-auto h-auto shadow-skillCard' key={picture.id} src={picture.link} alt={picture.id} />
          ))
        }
      </div>
      <div className='flex flex-col gap-10'>
        <h1 className='inline-block font-semibold text-2xl md:text-6xl'>
          Hi
          <span className='inline-block animate-wiggle-more animate-infinite animate-ease-linear'>
            👋🏻
          </span>
          , I'am {fullName}
          <span className='text-lg md:text-3xl text-purpleNeon'>
            <Typewriter options={
              {
                strings: introductionItems.map((item, index) => item.title),
                autoStart: true,
                loop: true,
              }
              }/>
          </span>
        </h1>
        <ul className='animate-fade-up'>
          {
            introductionParagraphs.map((paragraph, index) => (
              <li className='flex my-3 items-center cursor-pointer transition duration-700 ease-in-out transform hover:-translate-y-1' key={index}>
                <span className='mx-3'><img className='w-icon h-icon' src={paragraph.icon} alt='icons'/></span>
                <span className='hover:text-purpleNeon'>{paragraph.title}</span>
              </li>
            ))
          }
        </ul>
        <div className='flex self-center'>
        {
          platformsLinks.map((platform, index) => (
            <a className='hover:animate-wiggle animate-once' key={platform.name} target='_blank' href={platform.link}>
              <img className='w-icon h-icon' src={platform.icon} alt={platform.name}/>
            </a>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Home