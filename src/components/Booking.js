import React, { useState } from 'react'

function Booking() {
  const [location,setlocation]=useState('Bhubaneswar');
  return (
    <div className='booking'>
      <h1 id='booking-title'>BOOKING IS UNDER PROCESS</h1>
      <h4 id='booking-sub-title'>Please enter the Patient details</h4>
      <div className="booking-content">
        <div className="booking-inner-content">
          <form action="" method="post">
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128" id="location">
  <path fill="#000" fill-rule="evenodd" d="M41.8405 33.8181C31.7437 43.9148 29.8334 59.6549 37.2784 71.8393L40.2339 76.6762L40.8342 77.4779C46.8175 85.4685 53.3638 93.0215 60.4234 100.079C62.1245 101.78 64.8859 101.776 66.587 100.076C73.6611 93.0031 80.236 85.4229 86.2356 77.4187L86.8503 76.5986L89.9099 71.6009C97.338 59.4676 95.4831 43.8245 85.4234 33.7649C73.403 21.7445 53.8609 21.7977 41.8405 33.8181ZM63.5 72C71.5081 72 78 65.5081 78 57.5C78 49.4919 71.5081 43 63.5 43C55.4919 43 49 49.4919 49 57.5C49 65.5081 55.4919 72 63.5 72Z" clip-rule="evenodd"></path>
  <path fill="#000" d="M37.2784 71.8393L39.4117 70.5358L37.2784 71.8393ZM41.8405 33.8181L40.0727 32.0503L41.8405 33.8181ZM40.2339 76.6762L38.1006 77.9797L38.1621 78.0803L38.2327 78.1747L40.2339 76.6762ZM40.8342 77.4779L38.833 78.9763H38.833L40.8342 77.4779ZM60.4234 100.079L62.1909 98.3113L60.4234 100.079ZM66.587 100.076L64.8195 98.3075H64.8195L66.587 100.076ZM86.2356 77.4187L84.2352 75.9193L86.2356 77.4187ZM86.8503 76.5986L88.8507 78.098L88.9212 78.0041L88.9825 77.9039L86.8503 76.5986ZM89.9099 71.6009L87.7777 70.2956L89.9099 71.6009ZM85.4234 33.7649L83.6556 35.5326L85.4234 33.7649ZM39.4117 70.5358C32.5717 59.3417 34.3239 44.8702 43.6082 35.5858L40.0727 32.0503C29.1635 42.9595 27.095 59.9682 35.1451 73.1428L39.4117 70.5358ZM42.3672 75.3727L39.4117 70.5358L35.1451 73.1428L38.1006 77.9797L42.3672 75.3727ZM42.8353 75.9794L42.2351 75.1778L38.2327 78.1747L38.833 78.9763L42.8353 75.9794ZM62.1909 98.3113C55.2156 91.3377 48.7473 83.8747 42.8353 75.9794L38.833 78.9763C44.8877 87.0622 51.5121 94.7053 58.6558 101.847L62.1909 98.3113ZM64.8195 98.3075C64.0918 99.0351 62.9129 99.0332 62.1909 98.3113L58.6558 101.847C61.336 104.527 65.68 104.517 68.3546 101.843L64.8195 98.3075ZM84.2352 75.9193C78.3069 83.8284 71.8098 91.3188 64.8195 98.3075L68.3546 101.843C75.5124 94.6873 82.1651 87.0175 88.236 78.9181L84.2352 75.9193ZM84.8499 75.0992L84.2352 75.9193L88.236 78.9181L88.8507 78.098L84.8499 75.0992ZM87.7777 70.2956L84.7181 75.2933L88.9825 77.9039L92.0421 72.9063L87.7777 70.2956ZM83.6556 35.5326C92.8983 44.7752 94.6025 59.1478 87.7777 70.2956L92.0421 72.9063C100.073 59.7875 98.0679 42.8738 87.1912 31.9971L83.6556 35.5326ZM43.6082 35.5858C54.6579 24.5361 72.6172 24.4942 83.6556 35.5326L87.1912 31.9971C74.1888 18.9948 53.0638 19.0592 40.0727 32.0503L43.6082 35.5858ZM75.5 57.5C75.5 64.1274 70.1274 69.5 63.5 69.5V74.5C72.8889 74.5 80.5 66.8888 80.5 57.5H75.5ZM63.5 45.5C70.1274 45.5 75.5 50.8726 75.5 57.5H80.5C80.5 48.1112 72.8889 40.5 63.5 40.5V45.5ZM51.5 57.5C51.5 50.8726 56.8726 45.5 63.5 45.5V40.5C54.1112 40.5 46.5 48.1112 46.5 57.5H51.5ZM63.5 69.5C56.8726 69.5 51.5 64.1274 51.5 57.5H46.5C46.5 66.8888 54.1112 74.5 63.5 74.5V69.5Z"></path>
</svg>
          <input type="text" id='booking-location' placeholder={location}/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search">
  <g>
    <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
  </g>
</svg>
          <input type="text" id='search-hospital' placeholder='Search for Hospitals'/>
          <input type="text" id='patient-name' placeholder='Enter Patient Name'/>
          <input type="number" placeholder='Age' id='booking-age'/>
          <select name="gender" type='number' id="booking-gender">
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <input type="date" id='booking-date'/>
          <input type='time' id='booking-time'/>
          <select name="department" id="booking-department">
            <option value="department">Select Suitable Department</option>
          </select>
          <select name="doctor" id="booking-doctor">
            <option value="select doctor">Select your Doctor</option>
          </select>
          <input id='booking-desc' type="text" placeholder='Specify Your Symptoms'/>
          <button type='submit' id='booking-appointment'>Confrim Your Appointment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking

