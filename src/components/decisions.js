import React from 'react'
import './decisions.css'
import { Link } from 'react-router-dom'

function decisions() {
  return (
    <section className='des' id='des'>
          <div className='cont'>
            <div className='des-inner'>

              <div className='des-title'>
                <h3 className='des-title-text'>გადაწყვეტილებები</h3>
                <div className='des-bg'></div>
              </div>

              <div className='des-items'>


                <div className='des-item'>
                        <Link className='des-item-img'>
                            <img src='../../images/Server.jpg'/>
                        </Link>
                       <h3 className='des-item-text'>სერვერები და მონაცემთა შენახვის სისტემები</h3>

                       <div className='des-item-hover des-item-hover-one'>
                          <p className='des-item-hover-text'> <span className='item-hover-text-span'>ჩვენი გადაწყვეტილებები, მომსახურება და პროდუქტები მოიცავს ფართო სპექტრს და აღნიშნულ სფეროში ნებისმიერი ტიპის ორგანიზაციის მოთხოვნებს ფარავს
                          ინფორმაციული ტექნოლოგიების ინფრასტრუქტურული გადაწყვეტილებების მიმართულებით, რომელიც კომპლექსური IT პროექტების დაგეგმარებას, აგებას, მათ ექსპლუატაციაში გაშვებას და მხარდაჭერას მოიცავს, Genio Systems საქართველოში უდავოდ ლიდერია. კომპანიას გააჩნია საფუძვლიანი ცოდნა, საქართველოში მდიდარი გამოცდილება და პარტნიორი კომპანიების მხარდაჭერა.
                          IT ინფრასტრუქტურის მიმართულებით, Genio Systems-ის გადაწყვეტილებები, მომსახურება და პროდუქტები მოიცავს ფართო სპექტრს და აღნიშნულ სფეროში ნებისმიერი ტიპის ორგანიზაციის მოთხოვნილებას ფარავს.
                          კომპანიის მიერ განხორციელებული თითოეული პროექტი დაფუძნებულია უახლეს ტექნოლოგიებზე. IT ინფრასტრუქტურული გადაწყვეტილებების ჭრილში Genio Systems კლიენტებს სთავაზობს:</span> 

                          <div className='text-bottom text-bottom-one'>
                            <span>Server & Storage Infrastructure: </span>
                            <span>⦁	x86 Rack & Blade Servers </span>
                            <span>⦁	Mission Critical Servers </span>
                            <span>⦁	High Performance Computing </span>
                            <span>⦁	Converged Infrastructure </span>
                            <span>⦁	Hybrid Storage Systems (NAS, SAN) </span>
                            <span>⦁	All Flash Storage </span>
                            <span>⦁	Disk Backup Systems </span>
                            <span>⦁	Software Defined Storage Solutions </span>
                          </div>
                                </p>
                       </div>
                </div>

                <div className='des-item'>
                        <Link className='des-item-img'>
                            <img src='../../images/Networking.jpg'/>
                        </Link>
                       <h3 className='des-item-text'>საკომუნიკაციო ქსელის გადაწყვეტილებები</h3>

                       <div className='des-item-hover'>
                          <p className='des-item-hover-text'>
                            <span>Enterprise Networking & Communications</span>
                            <span>⦁	Routing</span>
                            <span>⦁	Switching</span>
                            <span>⦁	Wireless LAN</span>
                            <span>⦁	Corporate Telephony</span>
                            <span>⦁	Contact Center</span>
                            <span>⦁	Video Collaboration</span>
                            </p>
                       </div>
                </div>

                <div className='des-item'>
                        <Link className='des-item-img'>
                            <img src='../../images/managment.jpeg'/>
                        </Link>
                       <h3 className='des-item-text'>IT ინფრასტრუქტურის მართვის სისტემები</h3>

                       <div className='des-item-hover'>
                          <p className='des-item-hover-text'>  <span>Infrastructure Software Systems </span>
                            <span>⦁	Back-Up, Archieving & Recovery</span>
                            <span>⦁	Desktop Virtualization</span>
                            <span>⦁	Datacenter Virtualization</span>
                            <span>⦁	Enterprise E-Mail & Messaging</span>
                            <span>⦁	IT Operations Management</span>
                            <span>⦁	Application delivery controllers (ADC)</span></p>
                       </div>
                </div>

                <div className='des-item'>
                        <Link className='des-item-img'>
                            <img src='../../images/engineer.jpg'/>
                        </Link>
                       <h3 className='des-item-text'>სერვერული ცენტრების საინჟინრო სისტემები</h3>

                       <div className='des-item-hover'>
                          <p className='des-item-hover-text'><span>Datacenter Engineering Systems </span>
                            <span>⦁	Cooling & Air Conditioning</span>
                            <span>⦁	UPS & Power Management</span>
                            <span>⦁	Diesel GenSets</span>
                            <span>⦁	Fire Fighting Systems</span>
                            <span>⦁	Datacenter Infrastructure Management (DCIM)</span>
                            <span>⦁	Raised Floor & Ceiling</span>
                            <span>⦁	Datacenter Containers & Modular Rooms</span>
                            </p>
                       </div>
                </div>

                <div className='des-item'>
                        <Link className='des-item-img'>
                            <img src='../../images/cabels.jpg'/>
                        </Link>
                       <h3 className='des-item-text'>საკაბელო და საინჟინრო გადაწყვეტილებები</h3>

                       <div className='des-item-hover'>
                          <p className='des-item-hover-text'>
                          <span>Cabling & Engineering Infrastructure  </span>
                            <span>⦁	Optical, Twisted-pair & Coaxial Cabling (SCS)</span>
                            <span>⦁	Video Surveillance (CCTV)</span>
                            <span>⦁	Access Control Systems</span>
                            <span>⦁	Public Address System (PA)</span>
                          </p>
                       </div>
                </div>

              </div>
            </div>
          </div>
    </section>
  )
}

export default decisions