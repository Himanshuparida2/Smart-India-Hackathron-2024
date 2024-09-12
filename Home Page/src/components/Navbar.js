import React, { useContext } from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'
import {LoggedInContext} from '../context/Logged';
function Navbar() {
    const {logged,setLogged}=useContext(LoggedInContext);
  return (
    <div>
      <div className="navbar">
            <ul>
                <li><Link to="/insurance">Insurance</Link></li>
                <li><Link to="/blood">Blood</Link></li>
                <li><Link to="/loginas">{logged==='false'?'Login':'Logout'}</Link></li>
            </ul>
            <Link to='/profile'><img src={user} alt="user"/></Link>
        </div>
    </div>
  )
}

export default Navbar
