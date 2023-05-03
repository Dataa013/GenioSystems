import React, { Component} from "react";
import './partners.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default function 
() {



    const settings = {
        arrows: true,
        rows: 2,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        rows: 2,
                        slidesToShow: 4,
                        slidesToScroll: 3,
                    }
                },

                {
                    breakpoint: 800,
                    settings: {
                        rows: 3,
                        slidesToShow: 3,
                        slidesToScroll: 2,
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
                        rows: 5,
                        slidesToShow: 2,
                        slidesToScroll: 3,
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
                        
                    <div className='partners-item'>
                        <Link to='https://www.dell.com/en-us' target='_blank' className='partners-item-img'>
                            <img src='../../images/dell.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://cloudian.com/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Cloudian.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.hpe.com/us/en/home.html' target='_blank' className='partners-item-img'>
                            <img src='../../images/Hp.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.microsoft.com/en-us/' target='_blank' className='partners-item-img'>
                            <img src='../../images/microsoft.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.lenovo.com/us/en/servers-storage/?orgRef=https%253A%252F%252Fwww.google.com%252F' target='_blank' className='partners-item-img'>
                            <img src='../../images/Lenovo.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.ibm.com/us-en/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Ibm.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.acer.com/us-en/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Acer.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.vmware.com/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Vmware.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.netapp.com/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Netapp.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.supermicro.com/en/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Supermicro.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.juniper.net/' target='_blank' className='partners-item-img'>
                            <img src='../../images/juniper.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.cisco.com/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Csico.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.smarttech.com/en/education' target='_blank' className='partners-item-img'>
                            <img src='../../images/Smart.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.apc.com/ge/ru/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Apc.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.jabra.com/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Jabra.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://www.qnap.com/en' target='_blank' className='partners-item-img'>
                            <img src='../../images/qnap.svg'/>
                        </Link>
                    </div>

                    <div className='partners-item'>
                        <Link to='https://tripplite.eaton.com/' target='_blank' className='partners-item-img'>
                            <img src='../../images/Trip.svg'/>
                        </Link>
                    </div>


                    <div className='partners-item'>
                        <Link to='https://www.fortinet.com/' target='_blank' className='partners-item-img'>
                            <img src='../../images/fortinet.svg'/>
                        </Link>
                    </div> 
                </Slider>

            </div>
        </div>
    </div>
  )
}
