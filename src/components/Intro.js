import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
export default function Intro() {
  return (
        <section className='intro'>
          
                <div className='image-back'>
                  <div className='intro-bg'>
                      {/* <video autoPlay loop muted src='../../videos/datacenter.mp4'/> */}
                     <img src='../../images/mobilealternative.jpg'/>
                  </div>
                </div>

            <div className='cont'>

              <div className='intro-inner'>

                  <div className='intro-items'>
                    <div className='intro-item'>
                      <h2 className='intro-item-title'>ჩვენ შესახებ</h2>
                      <p className='intro-item-text'>Genio Systems-ი საქმიანობს IT სფეროში. დღეისთვის, ჩვენ წარმატებით ვნერგავთ სხვადასხვა სექტორზე მორგებულ გადაწყვეტებს არა მხოლოდ კლასიკური IT მიმართულებით, არამედ ისეთ სფეროებში, როგორიცაა ვიდეო მონიტორინგი და სხვა სმარტ ტექნოლოგიები.<Link to='about' spy={true} smooth={true} offset={-1} duration={800} className='intro-item-text-link'>გაიგეთ მეტი</Link></p>
                    </div>
                  </div>
              </div>

            </div>
            
        </section>

  )
}
