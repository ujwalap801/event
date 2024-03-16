import React from 'react'
import './Gallery.css'
import g1 from '../../assets/g3.png'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g1.png'
import g4 from '../../assets/g4.png'

import white_arrow from '../../assets/white-arrow.png'
const Gallery = () => {
  return (
    <div className='photos'>
           <div className="gallery">
            <img src={g1} alt=''/>
            <img src={g2} alt=''/>
            <img src={g3} alt=''/>
            <img src={g4} alt=''/>
           </div>
    <button className='btn dark-btn'>See more here <img src={white_arrow} alt='' /></button>
    </div>
  )
}

export default Gallery