import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Projects } from './container'
import  Navbar from './components/Navbar/Navbar';
import './App.scss'

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </div>
  )
}

export default App;