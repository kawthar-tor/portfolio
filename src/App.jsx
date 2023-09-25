import React from 'react'
import { About, Contact, Home, NavBar, Projects, Resume, Skills } from '../src/components'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='h-full font-montserrat text-navy bg-primary flex md:flex-col'>
        <div className='self-center'>
          <NavBar/>
        </div>
        <div className='flex grow px-9'>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/logo' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/skills' element={<Skills/>}/>
              <Route path='/resume' element={<Resume/>}/>
            </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App