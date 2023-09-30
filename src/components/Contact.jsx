import React from 'react'

function Contact() {
  return (
    <div>
      <h2 className='font-medium text-4xl'>Contact Me</h2>
      <form className='flex flex-col bg-gradient-to-t from-purpleNeon to-navy rounded-lg w-1/2 m-0 p-10 mx-auto shadow-md text-primary' action="">
        <input className='bg-navy p-4 focus:shadow-skillCard rounded-xl mb-4' type="text" placeholder='Your name' required name="clientName" id="" />
        <input className='bg-navy p-4 focus:shadow-skillCard rounded-xl mb-4' type="email" placeholder='Email' name="clientEmail" id="" />
        <input className='bg-navy p-4 focus:shadow-skillCard rounded-xl mb-4' type="text" placeholder='Subject' name="subject" id="" />
        <textarea className='bg-navy p-4 focus:shadow-skillCard rounded-xl mb-4' name="" placeholder='Message' required id="" cols="10" rows="10"></textarea>
        <button type='submit' className='group shadow-[0px_0px_15px_2px_#27005D] rounded-full p-2 font-semibold'><span className='text-navy'>Send</span><img src="/src/assets/send.svg" className='group-hover:translate-x-2 transition duration-700 ease-in-out w-[25px] ml-3 h-[25px] inline-block' alt="" /></button>
      </form>
    </div>
  )
}

export default Contact