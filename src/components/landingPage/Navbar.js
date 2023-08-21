import React from 'react'
import { NavLink } from 'react-router-dom'
import "../landingPage/Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
const navigate = useNavigate()
  const navigation = () => {
    navigate('/FormReservation')
  }
  return (
    <nav className='nav-hero'>
      <div className='navchildone'>
            <span style={{display:"flex",marginBottom:"-1.3rem",padding:"0 0 0 1.5rem"}}><p>The</p><h4 style={{fontSize:"1.5rem"}}>Caesar</h4></span>
            <h1 style={{fontSize:"3rem",fontFamily:"poppins"}}>Grand</h1> 
      </div>
      <div className='navchildtwo'>
        <NavLink exact to="/" className={({isActive})=>(isActive ? "active-style" : '')}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive ? "active-style" : '')}>About</NavLink>
        <NavLink to="/dining"className={({isActive})=>(isActive ? "active-style" : '')}>Dining</NavLink>
        <NavLink to="/accomodation" className={({isActive})=>(isActive ? "active-style" : '')}>Accomodations</NavLink>
        <NavLink to="/facilities&amenities" className={({isActive})=>(isActive ? "active-style" : '')}>Facilities & Amenities</NavLink>
        <NavLink to="/contact" className={({isActive})=>(isActive ? "active-style" : '')}>Contact</NavLink>
      </div>
      <div className='navchildthree'>
        <button onClick={navigation}>Make a reservation</button>
      </div>
    </nav>
  )
}

export default Navbar
