import React, {useState} from 'react'
import { About, Contact, Footer, Home, NavBar, Projects, Resume, Skills } from '../src/components'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  const [navBg, updateNavBg] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 80) {
      updateNavBg(true);
    } else {
      updateNavBg(false);
    }
  }
  window.addEventListener('scroll', scrollHandler);
  return (
    <Router>
      <div className='font-montserrat text-navy flex flex-col'>
        <div className={`self-center w-full ${ navBg ? 'backdrop-blur-lg shadow-projectCard text-purpleNeon' : navBg} sticky top-0 z-30`}>
          <NavBar/>
        </div>
        <div className='p-9'>
            <Routes>
              <Route exact path={`${import.meta.env.BASE_URL}`} element={<Home/>}/>
              <Route path={`${import.meta.env.BASE_URL}home`} element={<Home/>}/>
              <Route path={`${import.meta.env.BASE_URL}logo`} element={<Home/>}/>
              <Route path={`${import.meta.env.BASE_URL}about`} element={<About/>}/>
              <Route path={`${import.meta.env.BASE_URL}projects`} element={<Projects/>}/>
              <Route path={`${import.meta.env.BASE_URL}contact`} element={<Contact/>}/>
              <Route path={`${import.meta.env.BASE_URL}skills`} element={<Skills/>}/>
              <Route path={`${import.meta.env.BASE_URL}resume`} element={<Resume/>}/>
            </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App