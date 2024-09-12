import React from 'react'
import bg from '../images/bg.png'
import { Link } from 'react-router-dom'

function Blood() {

  return (
    <div>
      <div>
        <nav id='blood-nav'>
            <span>
                <strong>| Blood Bridge</strong>
            </span>
        </nav>
    </div>
    <div className="blood-main-part">
        <div className="blood-note">
            Give the gift of life. Welcome to Blood Bridge where we bridge the gap between blood banks and those who need it most!!
        </div>

        <div className="blood-bg">
            <img src={bg} alt=""/>
        </div>
        <div className="on-bg red-button">
                <Link to='/bloodbridge'><button className="blood-btn Req" type="button">Request For Blood</button></Link>
            <button className="blood-btn Donate" type="button">Donate</button>
        </div>
    </div>
    
    </div>
  )
}

export default Blood
