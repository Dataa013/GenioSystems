import React, { useState } from "react";
import './partners.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import data from '../components/partnersdata';

export default function 
() {



    const settings = {
        arrows: true,
        rows: 1,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        rows: 1,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },

                {
                    breakpoint: 800,
                    settings: {
                        rows: 2,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },

                {
                    breakpoint: 600,
                    settings: {
                        rows: 4,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },

                {
                    breakpoint: 530,
                    settings: {
                        rows: 4,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },

                {
                    breakpoint: 370,
                    settings: {
                        rows: 3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
        ]
      }
    
      const [people, setPeople] = useState(data);


  return (
    <div className='partners' id='partners'>
        <div className='partners-back'></div>
        <div className='cont'>
            <div className='partners-inner'>

                <div className='partners-title'>
                    <h3 className='partners-head'>პარტნიორები</h3>
                    <div className='partners-head-bg'></div>
                </div>

                    <Slider {...settings}>


                        {people.map((person) => {
                            const {id, to, image, target} = person;

                            return (
                                <div key={id} className="partners-item">
                                    <Link to={to} target={target} className="partners-item-img">
                                        <img src={image}/>
                                    </Link>
                                </div>
                            )
                        })}


                </Slider>

            </div>
        </div>
    </div>
  )
}
