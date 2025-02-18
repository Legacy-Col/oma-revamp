
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Combine from './components/Combine'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-full h-full bg-neutral-800 opacity-70'>
      <Navbar />
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