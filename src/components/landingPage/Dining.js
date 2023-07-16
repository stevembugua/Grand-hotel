import React from 'react'
import NavbarPages from './NavbarPages'
import "../landingPage/Dining.css"
import Footer from './Footer'

const Dining = () => {
  return (
    <div>
       <div className='dinnerone'>
                <NavbarPages />
                <div className='dinnerone-inner'>
                    <h3>Savor the delicacies</h3>
                    <h1>Exquisite Dining</h1>
                </div>
        </div>
        <div className='dinnertwo'>
            <h1>Explore through our range of </h1>
            <h1>Dinning Areas</h1>
            <div className='dinnertwo-inner'>
                <h2>The Fenix</h2>
                <h2>The Retreat</h2>
                <h2>Cafe Mocha</h2>
            </div>
        </div>
        <div className='dinnerthree'>
           <div className='dinnerthree-inner'>
                <div className='dinnerthree-inner-one'>
                    <h3>Restaurant</h3>
                    <h1>The Fenix</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
           </div>
        </div>
        <div className='dinnerfour'>
            <div className='dinnerfour-inner'>
                <h3>Bar & Pub</h3>
                <h1>The Retreat</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                 luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
        </div>
        <div className='dinnerfive'>
           <div className='dinnerfive-inner'>
                <div className='dinnerfive-inner-one'>
                    <h3>Cafe</h3>
                    <h1>Mocha</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default Dining
