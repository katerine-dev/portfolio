import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
