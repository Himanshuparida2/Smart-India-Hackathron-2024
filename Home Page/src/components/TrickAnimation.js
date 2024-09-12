import React from 'react'

function TrickAnimation() {
  return (
    <div>
      <div className="tick-wrapper">
      <svg className="tick-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="tick-circle" cx="50" cy="50" r="45" />
        <path className="tick-path" d="M30 50l15 15 30-30" />
      </svg>
    </div>
    </div>
  )
}

export default TrickAnimation