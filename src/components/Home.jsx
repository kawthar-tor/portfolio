import React from 'react'
import {introductionItems, profile, introductionParagraphs, platformsLinks} from '../constants/index';
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
        <h1 className=' font-semibold text-[52px]'>Hi <span className='inline-block animate-wiggle-more animate-infinite animate-ease-linear'>👋🏻</span>, I'am 

        </h1>
        <ul>
          {
            introductionParagraphs.map((paragraph, index) => (
              <li className='flex my-3 items-center' key={paragraph.id}>
                <span className='mx-3'><img className='w-icon h-icon' src={paragraph.icon} alt='icons'/></span>
                <span className='animate-typing'>{paragraph.title}</span>
              </li>
            ))
          }
        </ul>
        <div className='flex self-center'>
        {
          platformsLinks.map((platfom, index) => (
            <a key={platfom.name} href={platfom.link}>
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