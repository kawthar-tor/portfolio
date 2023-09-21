import React from 'react'
import { About, Contact, Home, NavBar, Projects, Resume, Skills } from '../src/components'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='font-montserrat bg-primary'>
        <div>
          <NavBar/>
        </div>
        <div>
            <Routes>
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