import React, { useContext } from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <img src="" id='company-logo' alt="logo"/>
    <div className="login">
        <h1 id="welcome-msg">Welcome to BRAND NAME</h1>
        <img src={user} className="login-user-img" alt="user" />
      <div className="login-content">
        <div className="login-inner-content">
          <form action="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="email"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"
              ></path>
            </svg>
            <input type="text" placeholder="User ID" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              id="lock"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                transform="translate(1 1)"
              >
                <rect width="18" height="11" y="9" rx="2"></rect>
                <path d="M4 9V5a5 5 0 1 1 10 0v4"></path>
              </g>
            </svg>
            <input type="password" id='login-pass' placeholder="password" />
            <button type="submit" id='login-content-button'>Login</button>
          </form>
          <div className="login-extra">
           <p id='forgot-pass'>Forgot Password?</p>
            <Link to='/signin'><p id='login-register'>Register</p></Link>
           </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
