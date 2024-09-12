import React, { useEffect, useState } from 'react'

function Insurance() {
    const [show,setShow]=useState(false);
const onclick= () => {
  if(show===false){
    setShow(!show);
  }
};

useEffect(()=>{
  const welcome=document.querySelector('.welcome-message-insurance');
  if(welcome){
    welcome.style.opacity = 3;
  }
});
  return (
    <div id='insurance-body'>
        <div className="contain-insurance">
    <h1 className="welcome-message-insurance">Welcome to Connect Insurance</h1>
    

        <div id="contain-insurance1">
            <button className="learn-more" onClick={onclick}>
              <span className="circle-insurance" aria-hidden="true">
                <span className="icon-insurance arrow-insurance"></span>
              </span>
              <span className="button-text-insurance">Learn More</span>
            </button>
          </div> 


          {show && (
          <div id="resultcontain-insurance">
            <div id="insurance-text">
              Insurance Section
              <br />
              Connecting You with Trusted Insurance
              <br />
              We're working to bring you seamless access to top health insurance plans through our platform. Soon, you'll be able to explore and connect with leading insurance providers right here
              <br />
              This service is currently under process
              <br />
              Please check back later for updates
            </div>
          </div>
        )}
</div>
    </div>
  )
}

export default Insurance
