
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Combine from './components/Combine'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




const App = () => {
  return (
    <div className='w-full h-full bg-neutral-800 opacity-70'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Hero />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/services' element={ <Services />}/>
          <Route path='/reviews' element={ <Combine />}/>
          <Route path='/contact' element={ <Combine />}/>
      </Routes>
      </Router>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Combine />
      <Footer />
    </div>
  )
}

export default App