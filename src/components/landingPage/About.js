import React from 'react'
import NavbarPages from './NavbarPages'
import "../landingPage/About.css"
import Footer from './Footer'

const About = () => {
  return (
        <div>
            <div className='aboutone'>
                <NavbarPages />
                <div className='aboutone-inner'>
                    <h3>Savor the delicacies</h3>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className='abouttwo'>
                <div className='abouttwo-inner-one'>
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/06/luxury-redefined.png" alt="" />
                </div>
                <div className='abouttwo-inner-two'>
                    <h1>True Luxury </h1>
                    <h1>Redefined</h1>
                    <p>
                        Welcome to The Grand Caesar, that offers 
                        an unparalleled experience to its guests. Our hotel is dedicated
                        to providing the highest level of comfort, luxury, 
                        and service to ensure that your stay with us is unforgettable. 
                    </p>
                    <button>BOOK NOW</button>
                </div>
            </div>
            <div className='aboutthree'>
                <div className='aboutthree-inner-one'>
                    <h1>Exclusive </h1>
                    <h1>Delicacies</h1>
                    <p>
                     we offer a wide range of exclusive delicacies that are carefully 
                     prepared by our experienced chefs. Our menu features a variety of 
                     dishes that are made using fresh and high-quality ingredients. 
                     From local specialties to international cuisine, we have something for everyone.
                    </p>
                    <button>VIEW RESTAURANT</button>
                </div>
                <div className='aboutthree-inner-two'>
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/06/delicacies.png" alt="" />
                </div>
            </div>
            <div className='aboutfour'>
                <h1>Awards</h1>
                <div className="aboutfour-inner">
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/06/hotel-award1.svg" alt="" />
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/06/hotel-award3.svg" alt="" />
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/06/hotel-award2.svg" alt="" />
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default About
