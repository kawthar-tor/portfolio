import React from 'react';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { useState } from 'react';
import {navLinks, fullName} from '../constants';
import { Link } from 'react-router-dom';
function NavBar() {
  const [toggle, setToggle] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  return (
    <nav className='py-6 flex'>
        <div className='inline-block relative w-full md:hidden'>
          <div className='relative mb-16'>
            <span className='absolute left-8 font-["Clicker_Script"] text-4xl'>{fullName}</span>
            <img src={!toggle ? menu : close} alt="menu" className={`w-icon absolute cursor-pointer right-8 inline-block h-icon`} onClick={() => setToggle(!toggle)}/>
          </div>
          {
          toggle ?
          <ul className='text-center'>
          {
            navLinks.map((nav, index) => (
              <li
              className={`
              ${activeLink === nav.id ? 'text-2xl' : 'border-none'}
              ${nav.id === "logo" ? "hidden" : "font-semibold"} my-3 hover:text-purpleNeon transition duration-700 ease-in-out transform hover:translate-x-1`}
              key={nav.id}
              onClick={()=>setActiveLink(nav.id)}
              >
                <Link to={`${import.meta.env.BASE_URL}${nav.id}`}>{nav.title}</Link>
              </li>
            ))
          }</ul>
           : ''
        }
        </div>
      <ul className='list-none justify-center items-center flex-1 center gap-8 hidden md:flex'>
        {
          navLinks.map((nav, index) => (
            <li
            className={`
            ${nav.id === "logo" ? "font-['Clicker_Script'] text-4xl" : "font-semibold"} hover:text-purpleNeon transition duration-700 ease-in-out transform hover:-translate-y-1`}
            key={nav.id}
            onPointerOver={() => {

            }}
            >
              <Link to={`${import.meta.env.BASE_URL}${nav.id}`}>{nav.title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar