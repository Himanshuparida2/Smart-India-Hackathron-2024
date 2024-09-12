import React, { useState } from 'react'
import about_us_image from '../images/about-us.jpeg'
import { Link } from 'react-router-dom';

function About() {
  const [visible,SetVisible]=useState('what-we-do');
  return (
    <div>
      <Link to='./booking'>
      <button id='about-booking-btn'><p>Make a Booking</p></button>
      </Link>
      <h1 id='help-title'>About US</h1>
      <div className="contain-about">
        </div>
        <div className="about-btns">
          <button onClick={()=>{SetVisible('what-we-do')}}>what we do</button>
          <button onClick={()=>{SetVisible('our-mission')}}>Our Mission</button>
          <button onClick={()=>{SetVisible('our-goal')}}>Our Goal</button>
        </div>
        <div className="about-inner-content">

        </div>
        <div id='about-content'>
        <p id='what-we-do'className={visible==='what-we-do'?'show':'hide'}>We make healthcare simpler and faster by connecting you with hospitals across the city. Book appointments easily, check real-time availability of beds and resources, and get recommendations on the best hospitals to visit—all in one place. Your health, streamlined.</p>
        <p id='our-mission' className={visible==='our-mission'?'show':'hide'}>To revolutionize healthcare access by streamlining the process of booking appointments and managing hospital resources, ensuring that every patient receives timely and efficient care.

</p>
        <p id='our-goal' className={visible==='our-goal'?'show':'hide'}>To enhance healthcare efficiency by providing patients with quick access to appointments and real-time hospital information, reducing wait times and improving the overall patient experience.</p>
        </div>
        <img src={about_us_image} alt="about-us" id='about-us-img' />
    </div>
  )
}

export default About

