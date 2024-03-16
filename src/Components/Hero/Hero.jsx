import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h2>Milestone Memories : Capturing Life's Moments</h2>
            <p> 
            Discover exceptional event planning and photography services with us.
             Start your journey to extraordinary events today!
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero