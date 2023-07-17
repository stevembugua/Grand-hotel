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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit elit tellus.</p>
         </div>
         <div className='facilitiesthree'>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/concierge-1.jpg" alt="" />
            <div className='facilitiesthree-inner'>
                <h1>Concierge</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
         </div>
         <div className='facilitiesthree'>
            <div className='facilitiesthree-inner'>
                <h1>In-room Dining</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/room-dining.jpg" alt="" />
         </div>
         <div className='facilitiesthree'>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/airport-transfer.jpg" alt="" />
            <div className='facilitiesthree-inner'>
                <h1>Airport Transfer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
         </div>
         <div className='facilitiesthree'>
            <div className='facilitiesthree-inner'>
                <h1>Taxi Service</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/taxi-service.jpg" alt="" />
         </div>
         <div className='facilitiesfour'>
            <h2>Enjoy In Premium Services.</h2>
            <h1>Amenities</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,t</p>
            <p> luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
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
