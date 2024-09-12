import React, { useEffect, useState } from "react";
import user from "../images/user.png";
import home from "../images/home.png";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  let [toggle, setToggle] = useState("false");
  function toggle_three_dot() {
    setToggle(toggle === "false" ? "true" : "false");
  }
  function close_dot() {
    if (toggle === "true") {
      setToggle("false");
    }
  }
  const nav = useNavigate();
  function back() {
    nav("/");
  }
  return (
    <div>
      <div className="profile-content">
        <div className="profile-outer-content" onClick={close_dot}>
          <div className="profile-inner-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              id="back"
              onClick={back}
            >
              <path d="m548.3 922-44.5-44.5-106.2-106.2-129-129-110.9-110.9c-18-18-35.7-36.2-54-54l-.8-.8v70.7l44.5-44.5 106.2-106.2 129-129 110.9-110.9c18-18 36.2-35.8 54-54l.8-.8c9.1-9.1 14.6-22.5 14.6-35.4 0-12.3-5.4-26.9-14.6-35.4-9.5-8.7-22-15.2-35.4-14.6-13.3.6-25.8 5.1-35.4 14.6L433 75.6 326.8 181.8l-129 129L86.9 421.7c-18 18-36.2 35.8-54 54l-.8.8c-19.1 19.1-19.1 51.6 0 70.7 14.9 15 29.8 29.8 44.6 44.7l106.2 106.2 129 129L422.8 938c18 18 35.8 36.2 54 54l.8.8c9.1 9.1 22.5 14.6 35.4 14.6 12.3 0 26.9-5.4 35.4-14.6 8.7-9.5 15.2-22 14.6-35.4-.7-13.3-5.1-25.8-14.7-35.4z"></path>
              <path d="M67.3 562h853.2c11.5 0 23.1.1 34.6 0h1.5c12.8 0 26.3-5.6 35.4-14.6 8.7-8.7 15.2-22.9 14.6-35.4-.6-12.9-4.8-26.3-14.6-35.4-9.8-9-21.8-14.6-35.4-14.6H103.4c-11.5 0-23.1-.1-34.6 0h-1.5c-12.8 0-26.3 5.6-35.4 14.6-8.7 8.7-15.2 22.9-14.6 35.4.6 12.9 4.8 26.3 14.6 35.4 9.9 8.9 21.9 14.6 35.4 14.6z"></path>
            </svg>
            <h3 id="patient-profile">Patient Profile</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              fill="none"
              viewBox="0 0 128 128"
              id="dots-menu"
              name="personal-details-dot-menu"
              onClick={toggle_three_dot}
            >
              <path
                fill="#000"
                stroke="#000"
                strokeWidth="7"
                d="M58 63.5C58 67.0899 60.9101 70 64.5 70 68.0899 70 71 67.0899 71 63.5 71 59.9102 68.0899 57 64.5 57 60.9101 57 58 59.9102 58 63.5zM93 63.5C93 67.0899 95.9101 70 99.5 70 103.09 70 106 67.0899 106 63.5 106 59.9102 103.09 57 99.5 57 95.9101 57 93 59.9102 93 63.5zM23 63.5C23 67.0899 25.9101 70 29.5 70 33.0899 70 36 67.0899 36 63.5 36 59.9102 33.0899 57 29.5 57 25.9101 57 23 59.9102 23 63.5z"
              ></path>
            </svg>
            <ul id="three-dot">
              <li style={{ display: toggle === "true" ? "block" : "none" }}>
                <p>Edit</p>
              </li>
            </ul>
            <h4 id="profile-pronounce">Mr</h4>
            <h4>{props.name}</h4>
            <div className="profile-details">
              <img src={user} alt="user-profile" id="user-profile-img" />
              <h3>User contact details :</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="profile-phone"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
              >
                <path d="M20.666 27.021a5.907 5.907 0 0 1-2.934-.779l-.126-.071A39.137 39.137 0 0 1 3.491 12.355l-.657-1.095a5.849 5.849 0 0 1 .881-7.153l1.309-1.309c1.1-1.1 2.889-1.1 3.988 0l2.884 2.884a2.83 2.83 0 0 1 .464 3.378l-1.084 1.925a.213.213 0 0 0 .035.255l6.421 6.421a.216.216 0 0 0 .257.034l1.922-1.083.001-.001a2.832 2.832 0 0 1 3.378.464l2.885 2.886c1.1 1.1 1.1 2.889 0 3.988l-1.367 1.366a5.848 5.848 0 0 1-4.142 1.706zM7.018 3.973c-.21 0-.42.08-.58.24L5.129 5.521a3.85 3.85 0 0 0-.58 4.708l.657 1.095a37.13 37.13 0 0 0 13.389 13.107l.126.071c1.526.873 3.446.626 4.672-.602l1.367-1.366a.82.82 0 0 0 0-1.16l-2.885-2.886a.823.823 0 0 0-.983-.134l-1.922 1.083a2.222 2.222 0 0 1-2.652-.363l-6.421-6.421a2.218 2.218 0 0 1-.363-2.651l1.084-1.924a.824.824 0 0 0-.135-.982L7.598 4.213a.818.818 0 0 0-.58-.24z"></path>
              </svg>
              <h5 id="profile-number">{props.Phone}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="profile-email-logo"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
              </svg>
              <h5 id="profile-email">{props.Email}</h5>
              <img src={home} alt="home" id="profile-home" />
              <h5 id="profile-address">{props.Address}</h5>
            </div>
            <div className="overview">
              <h3>Overview:</h3>
              <div id="profile-gender">
                Gender <h5>Female</h5>
              </div>
              <div id="profile-DOB">
                Date of Birth <h5>1/2/2004</h5>
              </div>
              <div id="profile-age">
                Age <h5>24</h5>
              </div>
              <div id="profile-marital-status">
                Martial Status <h5>Bachelor</h5>
              </div>
              <div id="profile-previous-visit">
                Previous Visit <h5>25/5/2020</h5>
              </div>
              <div id="profile-next-visit">
                Next Visit <h5>25/6/2021</h5>
              </div>
              <div id="profile-blood-type">
                Blood Type <h5>O+</h5>
              </div>
            </div>
            <div className="documents-report">
              <h3>Documents and Latest Repots:</h3>
              <ul id="documents-menu">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    id="document"
                  >
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    <path d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 32H16v-4h16v4zm0-8H16v-4h16v4zm-6-10V7l11 11H26z"></path>
                  </svg>
                  Fracture Scan img
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    id="document"
                  >
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    <path d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 32H16v-4h16v4zm0-8H16v-4h16v4zm-6-10V7l11 11H26z"></path>
                  </svg>
                  Blood report
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    id="document"
                  >
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    <path d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 32H16v-4h16v4zm0-8H16v-4h16v4zm-6-10V7l11 11H26z"></path>
                  </svg>
                  MRI Scan
                </li>
              </ul>
              <button id="document-upload">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  id="upload"
                >
                  <path d="M5 10c-.6 0-1-.4-1-1 0-3.9 3.1-7 7-7 3 0 5.7 2 6.7 4.9.1.5-.1 1.1-.7 1.2-.5.2-1.1-.1-1.3-.6C15.1 5.4 13.2 4 11 4 8.2 4 6 6.2 6 9c0 .6-.4 1-1 1z"></path>
                  <path d="M18 18c-.6 0-1-.4-1-1s.4-1 1-1c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.3 0-.7 0-1 .1-.5.1-1.1-.2-1.2-.7s.2-1.1.7-1.2c.5-.1 1-.2 1.5-.2 3.3 0 6 2.7 6 6s-2.7 6-6 6zM8 18H5c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
                  <path d="M18 18h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM5 18c-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1 .4 1 1s-.4 1-1 1c-1.7 0-3 1.3-3 3s1.3 3 3 3c.6 0 1 .4 1 1s-.4 1-1 1zm7 4c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1s1 .4 1 1v10c0 .6-.4 1-1 1z"></path>
                  <path d="M9 15c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3 3c-.2.2-.4.3-.7.3z"></path>
                  <path d="M15 15c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path>
                </svg>
                Upload
              </button>
              <p id="view-all">View all</p>
            </div>
            <div className="patient-history">
              <h3>Patient History:</h3>
              <div className="history-list">
                <ul id="history-list1">
                  <li>Appointments Count</li>

                  <li>Billing</li>

                  <li>Test & reports</li>

                  <li>consent forms</li>
                </ul>
                <ul id="history-list2">
                  <li>Treatments</li>
                  <li>Doctors</li>
                  <li>Vital Signs</li>
                  <li>Diagnosis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
