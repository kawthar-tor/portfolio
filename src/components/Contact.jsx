import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {emailJsConf} from '../constants/index';
import { send } from '../assets';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(emailJsConf[0].serviceId, emailJsConf[1].templateId, form.current, emailJsConf[2].publicKey)
      .then((result) => {
          console.log(result.text);
          alert("Thank you for your message 🤗")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <h2 className='font-medium text-3xl md:text-4xl mb-10'>Contact Me</h2>
      <form ref={form} className='flex flex-col bg-gradient-to-b from-purpleNeon to-white rounded-lg md:w-1/2 p-10 mx-auto shadow-md text-primary' onSubmit={sendEmail}>
        <input className='bg-primary p-4 focus:shadow-skillCard text-navy rounded-xl mb-4' type="text" placeholder='Your name' required name="clientName" id="" />
        <input className='bg-primary p-4 focus:shadow-skillCard text-navy rounded-xl mb-4' type="email" placeholder='Email' name="clientEmail" id="" />
        <input className='bg-primary p-4 focus:shadow-skillCard text-navy rounded-xl mb-4' type="text" placeholder='Subject' name="subject" id="" />
        <textarea className='bg-primary p-4 focus:shadow-skillCard text-navy rounded-xl mb-4' name="message" placeholder='Message' required id="" cols="10" rows="10"></textarea>
        <button type='submit' className='group shadow-[0px_0px_15px_2px_#27005D] rounded-full p-2 font-semibold'><span className='text-navy'>Send</span><img src={send} className='group-hover:translate-x-2 transition duration-700 ease-in-out w-[25px] ml-3 h-[25px] inline-block' alt="" /></button>
      </form>
    </div>
  )
}

export default Contact