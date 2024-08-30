import React from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className="navbar">
            <ul>
                <li><Link to="">Insurance</Link></li>
                <li><Link to="">Blood</Link></li>
                <li><Link to="/login">Log in</Link></li>
            </ul>
            <img src={user} alt="user"/>
        </div>
    </div>
  )
}

export default Navbar
