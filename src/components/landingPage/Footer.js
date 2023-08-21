import React from 'react'
import "../landingPage/Footer.css"
import {FaFacebook} from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoTripAdvisor } from "react-icons/bi"
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qsycynr', 'template_0tdlmks', form.current, 'YnUisNeJ_Mb2_Nlk0')
          .then((result) => {
              console.log(result.text);
              toast.success('Email sent successfully',{
                position: 'top-right', autoClose: 3000, hideProgressBar: false,
              })
              e.target.reset()
          }, (error) => {
              console.log(error.text);
              toast.error('An error occured',{
                position: 'top-right', autoClose: 3000, hideProgressBar: false,
              })
          });
      };
  return (
    <div>
         <div className='homefourteen'>
        <div className='homefourteen-one'>
            <h3>The Caesar </h3>
            <h1>Grand</h1>
            <h2>The Ceaser Grand hotel 55 st. Avenue, Las Vegas Nevada</h2>
            <div className='icons'>
                <FaFacebook size="1.5rem" />
                <AiOutlineTwitter size="1.5rem"/>
                <BiLogoInstagram size="1.5rem"/>
                <BiLogoTripAdvisor size="1.5rem"/>
                <AiFillYoutube size="1.5rem"/>
            </div>
        </div>
        <div className='homefourteen-two'>
            <h1>Subscribe to know more about latest offers</h1>
           <form ref={form} onSubmit={sendEmail}>
           <div className='homefourteen-two-inner'>
                <input type="email" name='user_email' placeholder="Enter email address" required/>
                <button>SUBSCRIBE</button>
            </div>
           </form>
        </div>
      </div>
      <div className='homefifteen'>
        <div className='footer-one'>
          <NavLink exact to="/" onClick={scrollToTop} className={({isActive})=>(isActive ? "active-style" : '')}>Home</NavLink>
          <NavLink to="/about" onClick={scrollToTop} className={({isActive})=>(isActive ? "active-style" : '')}>About</NavLink>
          <NavLink to="/dining" onClick={scrollToTop} className={({isActive})=>(isActive ? "active-style" : '')}>Dining</NavLink>
          <NavLink to="/accomodation" onClick={scrollToTop} className={({isActive})=>(isActive ? "active-style" : '')}>Accomodations</NavLink>
          <NavLink to="/facilities&amenities" onClick={scrollToTop} className={({isActive})=>(isActive ? "active-style" : '')}>Facilities & Amenities</NavLink>
          <NavLink to="/contact" onClick={scrollToTop} className={({isActive})=>(isActive ? "active-style" : '')}>Contact</NavLink>
        </div>
        <div className='footer-two'>
             <h4>Copyright © {new Date().getFullYear()} Luxury Hotel</h4>
             <h4>Powered by Luxury Hotel</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
