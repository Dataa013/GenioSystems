import React from 'react';
import './products.css';
import { Link } from 'react-router-dom'

export default function products() {
  return (
    <section className='products' id='products'> 
                <div className='products-back'></div>
                <div className='products-back-two'></div>
           <div className='cont'>
             <div className='products-inner'>

                <div className='products-title'>
                    <h3 className='products-title-text'>პროდუქტები</h3>
                    <div className='products-bg'></div>
                </div>

                <div className='products-items'>

                      <div className='products-item'>
                          <Link className='products-item-img'>
                              <img src='../../images/computer.jpg'/>
                          </Link>
                          <h3 className='products-item-text'>პერსონალური სისტემები</h3>

                          <div className='products-item-hover'>
                            <p className='products-item-hover-text'>
                            ჩვენ მიერ შემოთავაზებული ტექნიკა განკუთვნილია კორპორატიული მომხმარებლებისთვის. მსოფლიოში აღიარებული ბრენდების, Dell, Lenovo, HP, Acer, APC, Tripp-Lite-ის ტექნიკა მორგებულია კორპორატიულ საჭიროებებზე.
                              <span>Enterprise Networking & Communications</span>
                              <span>⦁	დესკტოპები</span>
                              <span>⦁	მონიტორები</span>
                              <span>⦁	All-In-One კომპიუტერები</span>
                              <span>⦁	ნოუთბუქები</span>
                              <span>⦁	პლანშეტები</span>
                              <span>⦁	თხელი კლიენტები</span>
                              <span>⦁	სამუშაო სადგურები</span>
                              <span>⦁	უწყვეტი დენის წყაროები</span>
                              </p>
                        </div>
                      </div>

                    <div className='products-item'>
                        <Link className='products-item-img'>
                            <img src='../../images/Printer.jpg'/>
                        </Link>
                        <h3 className='products-item-text'>ბეჭდვის სისტემები</h3>

                        <div className='products-item-hover'>
                          <p className='products-item-hover-text'>
                          ბეჭდვის სისტემები მოიცავს პროდუქტებს, რომლებიც განკუთვნილია მცირე, საშუალო და დიდი ორგანიზაციებისთვის. გთავაზობთ მსოფლიოში აღიარებული ბრენდების ტექნიკას - HP, Brother, Xerox.
                            <span>Enterprise Networking & Communications</span>
                            <span>⦁	პრინტერები</span>
                            <span>⦁	მულტიფუნქციური პრინტერები</span>
                            <span>⦁	სკანერები</span>
                            <span>⦁	პლოტერები</span>
                            <span>⦁	სახარჯი მასალები</span>
                            </p>
                       </div>
                    </div>

                    <div className='products-item'>
                        <Link className='products-item-img'>
                            <img src='../../images/PC.jpg'/>
                        </Link>
                        <h3 className='products-item-text'>პროგრამული უზრუნველყოფა</h3>

                        <div className='products-item-hover'>
                          <p className='products-item-hover-text'>
                          Genio Systems-ი მცირე, საშუალო და მსხვილ ორგანიზაციებს სთავაზობს პროგრამული უზარნველყოფის სისტემებს:
                            <span>⦁	ოპერაციული სისტემა - MS Windows</span>
                            <span>⦁	საოფისე პროგრამები</span>
                            <span>⦁	უსაფრთხოების პროგრამები</span>
                            <span>⦁	ელექტრონული სწავლების პროგრამები
                            </span>
                            <span>⦁	დაშორებული სწავლების პროგრამები</span>
                            </p>
                       </div>

                    </div>

                </div>

             </div>
           </div>
    </section>
  )
}
