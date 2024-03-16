import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
import logo from'../../assets/P1.png'

const Navbar = () => {

  const [sticky, setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ?setSticky(true) :setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =()=>
  {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark-nav' : '' }`}>
        <img src={logo} alt=""  className='logo'/>
        <ul className= {mobileMenu ? '' :'hide-mobile-menu'}>
            <li>
              <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
              </li>
            <li>  

               <Link to='services' smooth={true} offset={-260} duration={500}>Services</Link>
            
              </li>

            <li>
            <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link>
              </li>

            <li>
            <Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link>
              </li>

            <li>
            <Link to='popular' smooth={true} offset={-260} duration={500}>Career</Link>
              </li>

            <li>
              <Link to="contact"  smooth={true} offset={-260} duration={500} className='btn'>Contact Us </Link>
              </li>
    
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar