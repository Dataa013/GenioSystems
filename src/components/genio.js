import React from 'react'
import './genio.css'
import {Link} from 'react-router-dom';
import { Component } from 'react';
import { Fa500Px, FaAd, FaAllergies, FaAndroid, FaFacebook, FaHeart, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';


export default function genio() {
  return (
        <footer className='footer'>
            <div className='footer-line'></div>
        <div className='cont'>
            <div className='footer-inner'>

                <div className='footer-items'>
                        <Link to='http://facebook.com/Geniosystemsllc' target='_blank' className='footer-item-link'><FaFacebook /></Link>
                </div>

            </div>
        </div>
    </footer>
  )
}
