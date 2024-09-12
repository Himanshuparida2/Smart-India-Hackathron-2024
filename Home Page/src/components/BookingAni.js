import React, { useEffect } from 'react'
import TrickAnimation from './TrickAnimation'
import { useNavigate } from 'react-router-dom';

function BookingAni() {
    const nav=useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            nav('/')
        }, 3000);

        return () => clearTimeout(timer);
    }, [nav]);
  return (
    <div className='booking-ani-bg'>
      <header className="booking-header">
        <h1>Booking Complete</h1>
        <TrickAnimation />
      </header>
    </div>
  )
}

export default BookingAni