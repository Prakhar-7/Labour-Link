import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div id='hero-image'>
      <div className="overlay">
      </div>
      <div className="hero">
        <div className="hero-main">
          <h1>Find skilled workers in your city</h1>
          <p>Connect with reliable professionals for your project need</p>

          <div className="input">
            <input placeholder="Pincode" />

            <input placeholder="Area" />

            <input placeholder="City" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
