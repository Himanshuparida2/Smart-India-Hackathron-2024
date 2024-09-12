import React, { useState } from 'react'
import user from '../images/user.png'
function Signin() {
    const [Credentials,SetCredentials]=useState({'email':'','phone':'','password':''})
    const onchange=(e)=>{
        SetCredentials({...Credentials,[e.target.name]:e.target.value});
    }
        console.log(Credentials.email, Credentials.phone)
  return (
    <div>
    <div className="contain-signin">
      <div className="outer-container-signin">
        <img src={user} id="sign-user" alt="user" />
        <div className="inner-container-signin">
          <form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="signin-email"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"
              ></path>
            </svg>
            <input type="email" placeholder="Email ID" name='email' onChange={onchange}/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="signin-phone"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 29 29"
            >
              <path
                d="M20.666 27.021a5.907 5.907 0 0 1-2.934-.779l-.126-.071A39.137 39.137 0 0 1 3.491 12.355l-.657-1.095a5.849 5.849 0 0 1 .881-7.153l1.309-1.309c1.1-1.1 2.889-1.1 3.988 0l2.884 2.884a2.83 2.83 0 0 1 .464 3.378l-1.084 1.925a.213.213 0 0 0 .035.255l6.421 6.421a.216.216 0 0 0 .257.034l1.922-1.083.001-.001a2.832 2.832 0 0 1 3.378.464l2.885 2.886c1.1 1.1 1.1 2.889 0 3.988l-1.367 1.366a5.848 5.848 0 0 1-4.142 1.706zM7.018 3.973c-.21 0-.42.08-.58.24L5.129 5.521a3.85 3.85 0 0 0-.58 4.708l.657 1.095a37.13 37.13 0 0 0 13.389 13.107l.126.071c1.526.873 3.446.626 4.672-.602l1.367-1.366a.82.82 0 0 0 0-1.16l-2.885-2.886a.823.823 0 0 0-.983-.134l-1.922 1.083a2.222 2.222 0 0 1-2.652-.363l-6.421-6.421a2.218 2.218 0 0 1-.363-2.651l1.084-1.924a.824.824 0 0 0-.135-.982L7.598 4.213a.818.818 0 0 0-.58-.24z"
              ></path>
            </svg>
            <input type="number" placeholder="Phone Number" name='phone' onChange={onchange}/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              id="signin-lock"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                transform="translate(1 1)"
              >
                <rect width="18" height="11" y="9" rx="2"></rect>
                <path d="M4 9V5a5 5 0 1 1 10 0v4"></path>
              </g>
            </svg>
            <input type="password" placeholder="password" name='password' onChange={onchange}/>
            <button type="submit" id='signin-button'>Sign in</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signin
