import React from 'react';
import './Map.css';
import {FaLocationArrow, FaMailBulk,  FaPhone } from "react-icons/fa";


export default function Map() {
  return (


    <section className='map' id='contact'>
        <div className='cont'>
           <div className='map-inner'>
              <div className='map-items'>
                <div className='map-item'>
                      <div className='map-item-title'>
                         <h3>საკონტაქტო ინფორმაცია</h3>
                         <div className='map-item-title-line'></div>
                      </div>
                      <div className='map-item-contact'>
                          <h3 className='icon-class map-item-location'><FaLocationArrow className='icon-left'/>ყაზბეგის გამზირი 2, ბიზნეს ცენტრი საბურთალო </h3>
                          <h3 className='icon-class map-item-call'> <FaPhone className='icon-left'/>+995 32 205 26 64</h3>
                          <h3 className='icon-class map-item-email'><FaMailBulk className='icon-left'/>info@geniosystems.ge</h3>
                      </div>
                </div>
              </div>
           </div>
        </div>

         <iframe src="https://snazzymaps.com/embed/486998" width="100%" height="500px" style={{border: '0'}}></iframe>
         
    </section>


  )
  
}