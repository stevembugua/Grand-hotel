import React from 'react'
import "../landingPage/Facilities.css"
import NavbarPages from './NavbarPages'
import Footer from './Footer'
const Facilities = () => {
  return (
    <div>
         <div className='facilitiesone'>
                <NavbarPages />
                <div className='facilitiesone-inner'>
                    <h3>At your Service</h3>
                    <h1>World Class Facilities</h1>
                </div>
         </div>
         <div className='facilitiestwo'>
            <h1>Facilities</h1>
            <p>Experience excellence in our exceptional amenities.</p>
         </div>
         <div className='facilitiesthree'>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/concierge-1.jpg" alt="" />
            <div className='facilitiesthree-inner'>
                <h1>Concierge</h1>
                <p>Immerse yourself in unparalleled luxury with our dedicated concierge team. From the moment you arrive, our knowledgeable professionals are here to cater to your every need, ensuring a seamless and personalized experience.</p>
            </div>
         </div>
         <div className='facilitiesthree'>
            <div className='facilitiesthree-inner'>
                <h1>In-room Dining</h1>
                <p>Indulge in the ultimate dining experience with our exclusive in-room dining service. From delectable breakfasts to sumptuous dinners, our talented culinary team prepares a tantalizing array of dishes to suit your palate.</p>
            </div>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/room-dining.jpg" alt="" />
         </div>
         <div className='facilitiesthree'>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/airport-transfer.jpg" alt="" />
            <div className='facilitiesthree-inner'>
                <h1>Airport Transfer</h1>
                <p>Arrive in style and comfort with our premier airport transfer service. From the moment you land, our professional chauffeurs are ready to whisk you away to your destination. Skip the hassle of waiting for taxis or navigating public transport.</p>
            </div>
         </div>
         <div className='facilitiesthree'>
            <div className='facilitiesthree-inner'>
                <h1>Taxi Service</h1>
                <p>Discover the city with ease through our convenient taxi service. Whether you're exploring local attractions or attending business meetings, our reliable fleet of taxis is at your disposal.</p>
            </div>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/taxi-service.jpg" alt="" />
         </div>
         <div className='facilitiesfour'>
            <h2>Enjoy In Premium Services.</h2>
            <h1>Amenities</h1>
            <p>Indulge in unparalleled luxury with premium services.</p>
            <p>Relax at the state-of-the-art spa and savor exquisite, flavorful cuisine.</p>
         </div>
         <div className='facilitiesfive'>
             <div className='facilitiesfive-inner'>
                <h1>Experience</h1>
                <div className='facilitiesfive-inner-one'>
                    <div>
                        <p>Swimming Pool</p>
                        <p>Underground Parking</p>
                        <p>Huge Lobby</p>
                        <p>Recreation Center</p>
                        <p>Conference Hall</p>
                    </div>
                    <div>
                        <p>Banquet</p>
                        <p>Poolside Bar</p>
                        <p>Game Zone</p>
                        <p>Casino Bar</p>
                    </div>
                </div>
             </div>
         </div>
         <Footer />
    </div>
  )
}

export default Facilities
