import React from 'react'
import './Services.css'
import service_1 from '../../assets/S1.png'
import service_2 from '../../assets/s2.jpg'
import service_3 from '../../assets/S3.png'
import service_icon_1 from '../../assets/s11.png'
import service_icon_2 from '../../assets/S12.jpg'
import service_icon_3 from '../../assets/s13.png'


const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src= {service_1 }alt=""/> 
            <div className="caption">
              <img src={service_icon_1} alt=""/>
              <p>Wedding Event</p>
            </div>
        </div>

        <div className="service">
            <img src= {service_2 }alt=""/> 
            <div className="caption">
              <img src={service_icon_2} alt=""/>
              <p>Birthday Event</p>
            </div>
        </div>

        <div className="service">
            <img src= {service_3}alt=""/> 
            <div className="caption">
              <img src={service_icon_3} alt=""/>
              <p>Haldhi Event</p>
            </div>
        </div>
    </div>
  )
}

export default Services