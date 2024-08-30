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

        </div>
      </div>
      <img src={doctor} id='doctor-image' alt="" />
    </div>
  )
}

export default Help
