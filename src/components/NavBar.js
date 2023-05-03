import React, {useState, useRef} from 'react';
import './NavBar.css';
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';


function NavBar() {
 
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header className='header'>
        <div className='header-line'></div>
            <div className='cont'>

            <div className='header_inner'>

             

                <div className='menu-items-head'  >
                    <Link className='header-logo' to='/'>
                        <img  src='../../images/gen.svg'/>
                    </Link>
                <ul className='menu-items' ref={navRef}>


                    <Link to='des' spy={true} smooth={true} offset={-200} duration={500} className='menu-item'>
                        <h3   className='menu-item-link'>გადაწყვეტილებები</h3>
                        <div className='right-side'></div>
                    </Link>
                    
                    
                    <Link to='products' spy={true} smooth={true} offset={-200} duration={500} className='menu-item'>
                        <h3 className='menu-item-link'>პროდუქტები</h3>
                        <div className='right-side'></div>
                    </Link>

                    <Link to='partners' spy={true} smooth={true} offset={-1} duration={700} className='menu-item'>
                        <h3  className='menu-item-link'>კლიენტები და პარტნიორები</h3>
                        <div className='right-side'></div>
                    </Link>

                    <Link to='about' spy={true} smooth={true} offset={-1} duration={800} className='menu-item'>
                        <h3 className='menu-item-link'>ჩვენ შესახებ</h3>
                        <div className='right-side'></div>
                    </Link>

                    <Link to='contact' spy={true} smooth={true} offset={-1} duration={1000} className='menu-item' >
                        <h3 className='menu-item-link'>კონტაქტი</h3>
                        <div className='right-side'></div>
                    </Link>

                    {/* <li className='menu-item'>
                        <Link to='/' className='menu-item-eng'><img src='../../images/flag.svg'/></Link>
                    </li> */}

                </ul>
            </div>
                <button className='button-nav'>
                        <FaBars className='nav-btn'  onClick={showNavbar}/>
                </button>

            </div>

         </div>
    </header>
  )
}

export default NavBar