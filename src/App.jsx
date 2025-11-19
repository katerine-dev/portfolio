import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects' 
import Skills from './components/Skills' 


export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
