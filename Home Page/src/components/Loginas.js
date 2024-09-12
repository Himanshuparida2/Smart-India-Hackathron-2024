import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loggedas } from '../context/Loggedas';

function Loginas() {
    const {login_as,setLogin_as}=useContext(Loggedas);
  return (
    <div>
      <div className="login">
        <h1 id="welcome-msg">Welcome to BRAND NAME</h1>
      <div className="login-content">
        <div className="login-as">
          <div className='login-as-inner'>
            <Link to='/login'><button id='Login-to-Patient-portal' onClick={()=>{setLogin_as('Login to Patient portal')}}>Login to Patient portal</button></Link>
            <Link to='/login'><button id='Login-to-Medco-portal' onClick={()=>{setLogin_as('Login to Medco portal')}}>Login to Medco portal</button></Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Loginas
