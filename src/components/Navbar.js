import React, { useContext } from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'
import { Loggedin } from '../context/Logged';
function Navbar() {
    const {logged,setLogged} =useContext(Loggedin);
  return (
    <div>
      <div className="navbar">
            <ul>
                <li><Link to="">Insurance</Link></li>
                <li><Link to="">Blood</Link></li>
                <li><Link to="/login">{logged==='false'?'Login':'Logout'}</Link></li>
            </ul>
            <img src={user} alt="user"/>
        </div>
    </div>
  )
}

export default Navbar
