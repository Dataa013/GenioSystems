import React from 'react'
import './About.css'

function About() {
  return (
    <section className='about' id='about'>
        <div className='about-bg'></div>

            <div className='cont'>

        <div className='about-inner'>

            <div className='about-title'>
                <h3>ჩვენს შესახებ</h3>
                <div className='about-title-bg'></div>
            </div>

            <div className='about-items'>
                <div className='about-img'>
                    <img  src='../../images/mobilealternative.jpg'/>
                </div>

                  <div className='about-item'>

                        <img src='../../images/gen.svg'/>

                      <p className='about-text'>Genio Systems-ი საქმიანობს IT სფეროში. დღეისთვის, ჩვენ წარმატებით ვნერგავთ სხვადასხვა სექტორზე მორგებულ გადაწყვეტებს არა მხოლოდ კლასიკური IT მიმართულებით, არამედ ისეთ სფეროებში, როგორიცაა ვიდეო მონიტორინგი და სხვა სმარტ ტექნოლოგიები.
                    Genio Systems-ის მისიაა დაეხმაროს ორგანიზაციებს თანამედროვე ტექნოლოგიების დანერგვასა და ციფრულ ტრანსფორმაციაში. 
                    ჩვენ გაგვაჩნია ტექნოლოგიების და კომპეტენციების სრული სპექტრი, ორგანიზაციების ციფრული ტრანსფორმაციის უზრუნველსაყოფად. კერძო და საჯარო ორგანიზაციებში.
                    ჩვენ გთავაზობთ ისეთ სერვისებს და გადაწყვეტებს, რომლებიც მორგებულია როგორც მსხვილი, ისე მცირე და საშუალო ზომის ორგანიზაციებზე, პასუხობს მათ მოთხოვნებს, ითვალისწინებს ინდივიდუალურ საჭიროებებს და ინარჩუნებს მოქნილობას თანამშრომლობის პროცესში. დღეისთვის, კომპანიას გააჩნია პროდუქტების, სერვისების და გადაწყვეტების ფართო არჩევანი ყველა ზომის და ტიპის ორგანიზაციისთვის.
                    </p>
                    
                </div>
            </div>

        </div>
    </div>

    </section>
  )
}

export default About