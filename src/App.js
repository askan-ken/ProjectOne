import React from 'react'
import {  Brand, Cta, Navbar } from './component';
import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './container'; 
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
