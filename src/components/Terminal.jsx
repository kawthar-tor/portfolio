import React from 'react'

function Terminal({username, fileName, content}) {
    const SpanWrapper = ({item, style}) =>{
        return (
          <span className={`mr-3 ${style}`}>
            {item}
          </span>
        )
      }
  return (
    <div className='text-white animate-fade-right animate-duration-700 animate-delay-700 animate-ease-in overflow-hidden w-2/4 rounded-lg bg-terminalGray mx-auto'>
    <div className='mb-4 bg-terminalTop flex py-2 items-center'>
      <img className='w-icon flex h-icon ' src="/src/assets/redCircle.svg" alt="" />
      <img className='w-icon flex h-icon' src="/src/assets/yellowCircle.svg" alt="" />
      <img className='w-icon flex h-icon' src="/src/assets/greenCircle.svg" alt="" />
      <img className='w-icon h-icon hover:animate-wiggle ml-10' src="/src/assets/folder.svg" alt="" />
      <span className='text-navy'>/{username}-bash</span>
    </div>
    <div className='m-3'>
      <SpanWrapper item={`${username}@portfolio:`} style='text-terminalGreenText mr-0 font-bold'/>
      <SpanWrapper item={"~$"}/>
      <SpanWrapper item={`cat ${fileName};`} />
      <p className='text-justify'>
        {content}
      </p>
    </div>
  </div>
  )
}

export default Terminal