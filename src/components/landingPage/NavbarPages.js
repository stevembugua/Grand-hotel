import React from 'react'
import { Link } from 'react-router-dom'
import "../landingPage/NavbarPages.css"
import { useNavigate } from 'react-router-dom';

const NavbarPages = () => {
  const navigate = useNavigate()
  const navigation = () => {
    navigate('/FormReservation')
  }
  return (
    <div>
       <nav className='nav-hero-two'>
      <div className='navchildone'>
            <span style={{display:"flex",marginBottom:"-1.3rem",padding:"0 0 0 1.5rem"}}><p>The</p><h4 style={{fontSize:"1.5rem"}}>Caesar</h4></span>
            <h1 style={{fontSize:"3rem",fontFamily:"poppins"}}>Grand</h1> 
      </div>
      <div className='navchildtwo'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dining">Dining</Link>
        <Link to="/accomodation">Accomodations</Link>
        <Link to="/facilities&amenities">Facilities & Amenities</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className='navchildthree'>
        <button onClick={navigation}>Make a reservation</button>
      </div>
    </nav>
    </div>
  )
}

export default NavbarPages
