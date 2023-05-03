import React from 'react';
import Intro from '../Intro';
import Decisions from '../decisions';
import Products from '../products';
import Partners from '../partners';
import About from '../About';
import Map from '../Map';
import '../../App.css';

export default function () {
  return (
      <>
        <Intro />
        <Decisions />
        <Products />
        <Partners />
        <About />
        <Map />
      </>

   
  )
}
