import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/papa.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {

  return (
    <div className='about'>
       <div className="about-left">
            <img src={about_img} alt=''className='about-img'/>
            <img src={play_icon} alt='' className='play-icon'
             onClick={()=>{
              setPlayState(true)
            }}/>
       </div>
       <div className="about-right">
             <h3>About Events</h3>
             <h2>Unveiling Connections: A Journey Through Idea</h2>
             <p>From conceptualization to execution, we handle every aspect of event planning with meticulous attention to detail.
                 Let us take the stress out of organizing your event while you focus on enjoying the celebration.</p>
             <p>From conceptualization to execution, we handle every aspect of event planning with meticulous attention to detail.
                     Let us take the stress out of organizing your event while you focus on enjoying the celebration.</p>
            <p>From conceptualization to execution, we handle every aspect of event planning with meticulous attention to detail.
                         Let us take the stress out of organizing your event while you focus on enjoying the celebration.</p>
       </div>
    </div>
  )
}

export default About