import React from 'react'
import doctor from '../images/doctor-image.jpg'
import { Link } from 'react-router-dom'
function Help() {
  return (
    <div>
        <h1 id="help-title">Help</h1>
        <Link to='/booking'><button id="help-booking-btn"><p>Make a Booking</p></button></Link>
      <div className="contain-help">
        <div id="help-content">
        <p>If you need assistance with booking appointments, checking hospital availability, or navigating through our app, you’re in the right place. Here’s what you can do:</p>
        <ul>
          <li id='one-para'>Check Availability: Find out how to check real-time bed availability, wait times, and other essential hospital resources.</li>
          <li id='sec-para'>Get Recommendations: Discover how our app suggests the best hospital based on your location, availability, and current queue lengths.</li>
          <li id='third-para'>FAQs: Have questions? Browse through our frequently asked questions for quick answers.</li>
        </ul>
        <p>If you still need help, feel free to contact our support team, and we’ll be happy to assist you!</p>
        <p>Book Appointments: Learn how to easily book appointments across multiple hospitals in the city.</p>


        </div>
      </div>
      <img src={doctor} id='doctor-image' alt="" />
    </div>
  )
}

export default Help
