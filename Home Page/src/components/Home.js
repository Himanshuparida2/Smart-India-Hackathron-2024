import React, { useEffect, useState } from 'react'
import chatbot from '../images/chatbot.png'
import { Link } from 'react-router-dom'
import Graph from './Graph';

function Home(props) {
const [toggle,setToggle]=useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setToggle((prevToggle) => !prevToggle);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  return (
    <div>
      <div className="contain">
        <div className="booking-time">
            <p>Next Appointment 2 days later</p>
        </div>
        <Link to='/booking'><button id="booking-btn"><p>Make a booking</p></button></Link>
        <div className="box">
            <div className="box1">
              <h3>Timings</h3>
              <ul id='list-one' style={{display: toggle?'block':'none'}}>
                <li>11 A.M. - 1 P.M. Neurologist</li>
                <li>2 P.M. - 4 P.M. Pediatrician</li>
                <li>3 P.M. - 4 P.M. Dermatologist</li>
              </ul>
              <ul id='list-two' style={{display: !toggle?'block':'none'}}>
                <li>6 P.M. - 9 P.M. Gastroenterologist</li>
                <li>8 A.M. - 12 P.M. Hematologist</li>
                <li>9 A.M. - 1 P.M. Psychologist</li>
              </ul>
            </div>
            <div className="box2">
              <h3>Availability</h3>
              <ul id='box2-list-one' style={{display: toggle?'block':'none'}}>
                <li>Monday : High</li>
                <li>Tuesday : Medium</li>
                <li>Wednesday : Medium</li>
              </ul>
              <ul id='box2-list-two' style={{display: !toggle?'block':'none'}}>
                <li>Thursday : Low</li>
                <li>Friday : Medium</li>
                <li>Sat/Sun : Low</li>
              </ul>
              </div>
            <div className="box3">
              <h3>Booking Trends</h3>
              <div>
              <Graph />
              </div>
              </div>
        </div>
        <img src={chatbot} id="chatbot" alt="chatbot"/>
    </div>
    </div>
  )
}

export default Home
