import React from 'react'
import './whatgpt.css'
import Feature from '../../component/feature/Feature'

const WhatGPT = () => {
  return (
    <div className="gpt__whatgpt section__margin" id='gpt3'>
      <div className="gpt__whatgpt-feature">
        <Feature />
      </div>
      <div className="gpt__whatgpt-heading">
        <h1 className="gradient__text">
          The possibilities is beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__whatgpt-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT