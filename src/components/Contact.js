import React from 'react'
import query from '../images/query.jpg'

function Contact(props) {
  return (
    <div>
        <h1 id='contact-title'>Contact US..</h1>
        <button id="help-booking-btn"><p>Make a Booking</p></button>
      <div className="contain-contact">
       <h1 id='contact-info'>Contact Information :</h1>
            <div className="contact-inner-content">
            <p id="contact-para-1"><h4>Address : </h4>{props.Address}</p>
            <p id="contact-para-2"><h4>Call :</h4>{props.Call}</p>
            <p id="contact-para-3"><h4>Email :</h4>{props.Email}</p>
            <p id="contact-para-4"><h4>Website :</h4>{props.Website}</p>
            <h1 id="contact-query">Any Query?</h1>
            <form action="" className='contact-input' method="post">
                <h1 id='subject'>Subject</h1>
                <input type="text" id='first-input' placeholder='Your Name'/>
                <input type="email" id='second-input' placeholder='Your Email'/>
                <input type="text" id='third-input' placeholder="Body text for whatever you'd like to say."/>
                <button type='sumbit' id='send-message'> Send Message</button>
            </form>
            </div>
      </div>
      <img src={query} id='query-img' alt="query-img" />
    </div>
  )
}

export default Contact
