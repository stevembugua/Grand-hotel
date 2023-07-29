import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import '../landingPage/Form.css'

const FormReservation = () => {
    const form = useRef()
    const formSubmit = (e) =>{
        e.preventDefault();
        toast.success('Reservation sent successfully',{
            position: "top-right", autoClose: 3000, hideProgressBar: false,
        })
        e.target.reset()
    }
  return (
    <div className='form-hero'>
        <form ref={form} onSubmit={formSubmit} className='form'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required/>
            <label htmlFor="phone Number">Phone Number:</label>
            <input type="number" id="phone" name="phone" required/>
            <label htmlFor="Accomodation">Choose accomodation plan:</label>
            <select name="" id="">
                <option value="">Deluxe Room</option>
                <option value="">Deluxe Double Room</option>
                <option value="">Deluxe Suite</option>
                <option value="">Deluxe Two Bedroom Suite</option>
            </select>
            <button type="submit" className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default FormReservation
