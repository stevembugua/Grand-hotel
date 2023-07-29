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
                    <p>Welcome to The Fenix, where culinary artistry meets impeccable taste. Our restaurant
        is a celebration of flavors, offering a symphony of gourmet dishes that will delight
        even the most discerning palate. Each plate is thoughtfully crafted by our
        world-renowned chefs, combining fresh, locally-sourced ingredients with innovative
        techniques.
                    </p>
                </div>
           </div>
        </div>
        <div className='dinnerfour'>
            <div className='dinnerfour-inner'>
                <h3>Bar & Pub</h3>
                <h1>The Retreat</h1>
                <p>
                Welcome to The Retreat, where unforgettable moments and great times are our specialty. 
        Nestled in the heart of the city, our bar & pub offers a vibrant and inviting space for
        you to unwind and socialize.
        As you step inside, you'll be greeted by the friendly chatter of fellow patrons and the
        aroma of expertly crafted cocktails. Our talented mixologists take pride in concocting
        signature drinks that will tantalize your taste buds.
                </p>
            </div>
        </div>
        <div className='dinnerfive'>
           <div className='dinnerfive-inner'>
                <div className='dinnerfive-inner-one'>
                    <h3>Cafe</h3>
                    <h1>Mocha</h1>
                    <p>Welcome to Mocha, where every sip tells a story and every bite is a moment to cherish. 
            Step into our cozy cafe, and you'll be greeted by the comforting aroma of freshly brewed
            coffee and the sweet scent of freshly baked treats.
            Mocha is a haven for coffee lovers and connoisseurs alike. Our passionate baristas take
            pride in handcrafting the perfect cup of coffee, sourced from the finest beans around
            the world. Whether you prefer a classic espresso or a velvety latte, we've got you
            covered.
            
                    </p>
                </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default Dining
