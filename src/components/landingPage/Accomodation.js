import React from 'react'
import NavbarPages from './NavbarPages'
import "../landingPage/Accomodation.css"
import { AiOutlineCheckCircle } from "react-icons/ai"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Accomodation = () => {
    const navigate = useNavigate()

    const navigation = () => {
        navigate('/FormReservation')
        console.log('clicked')
    }
  return (
    <div>
       <div className='accomodationone'>
                <NavbarPages />
                <div className='accomodationone-inner'>
                    <h3>Perfect Blend of Comfort and Luxury</h3>
                    <h1>Accomodation</h1>
                </div>
        </div>
        <div className='accomodationtwo'>
            <div className='accomodationtwo-inner'>
                <div className='accomodationtwo-inner-one'>
                    <h1>Deluxe Room</h1>
                    <h3>Welcome to our Deluxe Room, where comfort meets convenience.
                    Enjoy restful sleep and modern amenities for an enjoyable stay.</h3>
                </div>
                <div className='accomodationtwo-inner-two'>
                    <div className='accomodationtwo-inner-two-span1'>
                        <span><AiOutlineCheckCircle color='#e2c48e' /><p>Breakfast</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>32" LED TV</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Air Condition</p></span>  
                    </div>
                    <div className='accomodationtwo-inner-two-span2'>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>In-room Dinning</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Bath Tub</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Coffee Machine</p></span> 
                    </div>
                </div>
                <div className='accomodationtwo-inner-three'>
                   <button onClick={navigation}>Book Now</button>
                </div>
            </div>
        </div>
        <div className='accomodationthree'>
            <div className='accomodationthree-inner'>
                <div className='accomodationthree-inner-one'>
                    <h1>Deluxe Double Room</h1>
                    <h3>Indulge in the comfort of our Deluxe Double Room. Relax in a 
                        space adorned with modern amenities.
                        Meet your Stylish Retreat.</h3>
                </div>
                <div className='accomodationthree-inner-two'>
                    <div className='accomodationthree-inner-two-span1'>
                        <span><AiOutlineCheckCircle color='#e2c48e' /><p>Breakfast</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>32" LED TV</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Air Condition</p></span>  
                    </div>
                    <div className='accomodationthree-inner-two-span2'>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>In-room Dinning</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Bath Tub</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Coffee Machine</p></span> 
                    </div>
                </div>
                <div className='accomodationthree-inner-three'>
                   <button  onClick={navigation}>Book Now</button>
                </div>
            </div>
        </div>
        <div className='accomodationfour'>
            <div className='accomodationfour-inner'>
                <div className='accomodationfour-inner-one'>
                    <h1>Deluxe Suite</h1>
                    <h3>Experience pure luxury in our Deluxe Suite. 
                    Your ultimate escape awaits.</h3>
                </div>
                <div className='accomodationfour-inner-two'>
                    <div className='accomodationfour-inner-two-span1'>
                        <span><AiOutlineCheckCircle color='#e2c48e' /><p>Breakfast</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>42" LED TV</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Air Condition</p></span>  
                    </div>
                    <div className='accomodationfour-inner-two-span2'>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>In-room Dinning</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Bath Tub</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Coffee Machine</p></span> 
                    </div>
                    <div className='accomodationfour-inner-two-span3'>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>City Scape View</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Kitchenette</p></span> 
                    </div>
                </div>
                <div className='accomodationfour-inner-three'>
                   <button  onClick={navigation}>Book Now</button>
                </div>
            </div>
        </div>
        <div className='accomodationfive'>
            <div className='accomodationfive-inner'>
                <div className='accomodationfive-inner-one'>
                    <h1>Deluxe Two Bedroom Suite</h1>
                    <h3>Indulge in the lap of luxury with our Deluxe Two Bedroom Suite.
                    Your Ultimate Retreat.</h3>
                </div>
                <div className='accomodationfive-inner-two'>
                    <div className='accomodationfive-inner-two-span1'>
                        <span><AiOutlineCheckCircle color='#e2c48e' /><p>Breakfast</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>48" LED TV</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Air Condition</p></span>  
                    </div>
                    <div className='accomodationfive-inner-two-span2'>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>In-room Dinning</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Bath Tub</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Coffee Machine</p></span> 
                    </div>
                    <div className='accomodationfive-inner-two-span3'>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>City Scape View</p></span>
                        <span><AiOutlineCheckCircle color='#e2c48e'/><p>Kitchenette</p></span> 
                    </div>
                </div>
                <div className='accomodationfive-inner-three'>
                   <button  onClick={navigation}>Book Now</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Accomodation
