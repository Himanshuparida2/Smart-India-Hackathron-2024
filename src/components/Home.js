import React from 'react'
import chatbot from '../images/chatbot.png'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div>
      <div className="contain">
        <div className="booking-time">
            <p>Schedule timer for booking</p>
        </div>
        <Link to='/booking'><button id="booking-btn"><p>Make a booking</p></button></Link>
        <div className="box">
            <div className="box1">Timings</div>
            <div className="box2">Availability</div>
            <div className="box3">Booking Trens</div>
        </div>
        <img src={chatbot} id="chatbot" alt="chatbot"/>
    </div>
    </div>
  )
}

export default Home
