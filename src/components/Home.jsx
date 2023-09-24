import React from 'react'
import {introductionItems, profile, introductionParagraphs, platformsLinks} from '../constants/index';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='flex self-center'>
      <div className='p-6'>
        {
          profile.map((picture, index) => (
            <img className='rounded-full max-w-xs' key={picture.id} src={picture.link} alt={picture.id} />
          ))
        }
      </div>
      <div className='flex flex-col gap-10'>
        <h1 className='inline-block whitespace-nowrap overflow-hidden font-semibold text-[52px]'>
          Hi
          <span className='inline-block animate-wiggle-more animate-infinite animate-ease-linear'>
            👋🏻
          </span>
          , I'am {introductionItems[0].title}
          <span className='text-[20px] text-purpleNeon'>
            <Typewriter options={
              {
                strings: introductionItems.map((item, index) => (item.id !== "fullName" ? item.title : "")),
                autoStart: true,
                loop: true,
              }
              }/>
          </span>
        </h1>
        <ul className='animate-fade-up'>
          {
            introductionParagraphs.map((paragraph, index) => (
              <li className='flex my-3 items-center cursor-pointer' key={index}>
                <span className='mx-3 hover:animate-wiggle animate-once'><img className='w-icon h-icon' src={paragraph.icon} alt='icons'/></span>
                <span className='hover:text-purpleNeon transition duration-700 ease-in-out transform hover:-translate-y-1'>{paragraph.title}</span>
              </li>
            ))
          }
        </ul>
        <div className='flex self-center'>
        {
          platformsLinks.map((platfom, index) => (
            <a className='hover:animate-wiggle animate-once' key={platfom.name} href={platfom.link}>
              <img className='w-icon h-icon' src={platfom.icon} alt={platfom.name}/>
            </a>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Home