import React from 'react'
import NavbarPages from './NavbarPages'
import "../landingPage/Contact.css"
import { AiFillClockCircle } from "react-icons/ai"
import { FaPhoneVolume } from "react-icons/fa"
import { FaLocationArrow } from "react-icons/fa"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'

const Contact = () => {
    const form = useRef()
    const contactUs = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qsycynr', 'template_0tdlmks', form.current, 'YnUisNeJ_Mb2_Nlk0')
          .then((result) => {
              console.log(result.text);
              toast.success('Message sent successfully',{
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
       <div className='contactone'>
            <NavbarPages />
            <div className='contactone-inner'>
                <h3>We are here to serve!</h3>
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className='contacttwo'>
            <h1>Get In Touch</h1>
            <p>Have questions or need personalized assistance? Contact us anytime.</p>
            <p>We're here to make your stay exceptional.</p>
        </div>
        <div className='contactthree'>
            <div className='contactthree-inner-one'>
                <AiFillClockCircle color='#e2c48e' size="35"/>
                <h2>Check In - Check Out</h2>
                <p>12:00 PM - 10:00 AM</p>
                <FaPhoneVolume color='#e2c48e' size="35"/>
                <h2>Contact Number</h2>
                <p>Tel 1: +254783739978</p>
                <FaLocationArrow color='#e2c48e' size="35"/>
                <h2>Office Location</h2>
                <p>55 St. Avenue Jokshir, Las Vegas, Nevada</p>
            </div>
            <div className='contactthree-inner-two'>
                <h1>Send us a message</h1>
                <form ref={form} onSubmit={contactUs}>
                    <input type="text" name='user_name' placeholder="Name" required/>
                    <input type="email" name='user_email' placeholder="Email" required/>
                    <textarea placeholder='Enter your message' name='user_message' cols="20" rows="10"></textarea>
                    <button type='submit'>SEND NOW</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
