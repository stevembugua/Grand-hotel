import React from 'react'
import Navbar from './Navbar'
import "../landingPage/Home.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"
import Footer from './Footer';

const Home = () => {
  return (
    <div className='home-hero'>
      <Navbar />
      <div className='hometwo'>
        <h3 style={{color:"white",marginTop:"9rem",marginBottom:"1rem"}}>Dive into Ultimate Luxury at</h3>
        <h1 style={{color:"white",fontSize:"5rem",marginBottom:"1rem"}}>The Caesar Grand</h1>
        <h3 style={{color:"#c4bdbd"}}>The best there ever is.Come explore luxury like never before</h3>
        <button>MAKE A RESERVATION</button>
      </div>
      <div className='homethree'>
        <AliceCarousel autoPlay="true" autoPlayInterval="3000" infinite="true">
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/carousel14-.jpg" alt="" />
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/carousel-11-.jpg" alt="" />
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/carousel13-.jpg" alt="" />
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/carousel12-.jpg" alt="" />
        </AliceCarousel>
      </div>
      <div className='homefour'>
        <div className='homefour-inner'>
            <h1>An Escape From Reality</h1>
            <p>Welcome to our luxurious hotel, where indulgence meets tranquility. 
    Immerse yourself in a world of elegance and refined hospitality. 
    Experience a stay like no other, surrounded by breathtaking views and
    world-class amenities. 
    Unwind in our lavishly appointed rooms and suites, each designed to
    cater to your every need.
    Discover culinary delights at our award-winning restaurants, serving
    delectable dishes prepared by master chefs.
    Whether you seek relaxation or adventure, our dedicated staff will
    ensure your stay is unforgettable.
    Book your escape today and let us redefine your notion of hospitality.
    </p>
        </div>
      </div>
      <div className='homefive'>
        <h1>luxurious services</h1>
      </div>
      <div className='homesix'>
        <img src="https://themeydanhotel.com/sites/default/files/2017-11/inroom1.jpg" alt="" />
        <img src="https://www.travelandleisure.com/thmb/N2olPQWxrFkYSlr8LD2XO6C9jxU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hotel-room-service-LUXHOTELESRVC0623-82a5c2e7df814052b438beacf9b796e2.jpg" alt="" />
        <img src="https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMHBvb2x8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <img src="https://cdn.create.vista.com/api/media/small/189762032/stock-photo-woman-holding-playing-cards-casino" alt="" />
      </div>
      <div className='homeseven'>
        <h2>In-room Dining</h2>
        <h2>Concierge Service</h2>
        <h2>Private pools</h2>
        <h2>VIP Casino Entries</h2>
      </div>
      <div className='homeeight'>
        <div className='homeeight-inner'>
            <h1>Every corner with a</h1>
            <h1>Luxury Touch</h1>
            <p>Come see the world of luxury and relaxation beyong imagination.</p>
        </div>
      </div>
      <div className='homenine'>
        <div className='homenine-inner-one'>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/gallery-new-1.jpeg"  alt="" />
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/gallery-new-7.jpeg" alt="" />
            
        </div>
        <div className='homenine-inner-two'>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/gallery-new-4.jpeg" alt="" />
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/gallery-15.jpeg" alt="" />
              
        </div>
        <div className='homenine-inner-three'>
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/gallery-new-5.jpeg" alt="" />  
            <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/gallery-6.png" alt="" />
        </div>
      </div>
      <div className='hometen'>
        <div className='hometen-inner'>
            <div className='hometen-inner-one'>
               <div className='div1'>
                    <h3>LUXURY PRIVILAGES</h3>
                    <h1>MEMBERSHIP</h1>
                    <h1>BENEFITS</h1>
                    <p>Be part of the 1% to get our membership and get 2% off.</p>
               </div>
               <div className='divtwo'>
                    <h2>World-Class stay </h2>
                    <h2>Benefits</h2>
                    <p>The best you will see.The best you will have.</p>
               </div>
               <div className='divthree'>
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/world-class1-400x400.jpg" alt="" />
               </div>
            </div>
            <div className='hometen-inner-two'>
                <div className='hometen-inner-two-div1'>
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/casino-11-400x400.jpg" alt="" />
                </div>
                <div className='hometen-inner-two-div2'>
                    <h1>Exclusive Casino</h1>
                    <h1>Benefits</h1>
                    <p>Get yourself wealth beyond imagination.</p>
                </div>
                <div className='hometen-inner-two-div3'>
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/350x350-3.png" alt="" />
                </div>
                <div className='hometen-inner-two-div4'>
                    <h1>Exclusive Lifestyle </h1>
                    <h1>Voucher</h1>
                    <p>It only comes just as good as the hotel.</p>
                </div>
            </div>
            <div className='hometen-inner-three'>
                <div className='hometen-inner-three-div1'>
                    <h1>Comlementary Wine </h1>
                    <h1>Bottle</h1>
                    <p>Enjoy your stay with a relaxation accompanied with a bottle os wine</p>
                </div>
                <div className='hometen-inner-three-div2'>
                    <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/wine-bottle-400x400.jpg" alt="" />
                </div>
                <div className='hometen-inner-three-div3'>
                    <h1>More Benefits</h1>
                    <p>More to be shown on arrival</p>
                    <button>BECOME A MEMBER</button>
                </div>
            </div>
        </div>
      </div>
      <div className='homeeleven'>
        <h1>Ideal Venue For Any Event</h1>
        <p>Experience any day with exclusive venues to cover any of your events</p>
      </div>
      <div className="hometwelve">
            <div className='hometwelve-inner-one'>
                <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/event-1.png" alt="" />
                <h1>Weddings</h1>
                <p>Memorable moments can never fade while the grand caesar.</p>
            </div>
            <div className='hometwelve-inner-two'> 
                <h1>Parties</h1>
                <p>A good time with friend and family has never been better.</p>
                <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/event-2.png" alt="" />
            </div>
            <div className='hometwelve-inner-three'>
                <img src="https://websitedemos.net/luxury-hotel-04/wp-content/uploads/sites/812/2021/04/conference-1.jpg" alt="" />
                <h1>Confrence</h1>
                <p>We do not only cater good services for your leisure time  </p>
                <p>but also during business.Come explore our confrence area.</p>
            </div>
      </div>
      <div className='homethirteen'>
            <div>
              <h1>Your search for True </h1>  
              <h1>Luxury ends here</h1>
              <p>Search no more for we are here to care,deliver and make every moment of your life memorable.</p>
            </div>
            <div>
                <button>BOOK NOW</button>
            </div>
      </div>
        <Footer />
    </div>
  )
}


export default Home
