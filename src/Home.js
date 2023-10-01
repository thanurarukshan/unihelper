import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div>
      <div className='blueDiv'>
        <div className='blueDiv-content'>
          <img src='../Assets/Asset01.svg' className='bluediv-img' alt='' />
          <div className='bluediv-wording'>
            <span id='span01'>From the <span id='inner-span'>Community</span></span>
            <span id='span02'>To the <span id='inner-span'>Community</span></span>
            <span id='span03'>Elevate Your Education. A Community of<br/>Learning, Sharing, and Thriving.</span>
          </div>
        </div>
      </div>
      <div className='whiteDev'>
        <span className='whiteDiv-span'>Need help with your <span className='whiteDiv-span-inside'>Assignments ?</span></span>
        <button className='whiteDiv-btn'> Click Here</button>
      </div>
      <span className='fields'>Engineering , IT , Computer Science , Research , Projects , Final Year Projects , Bussiness , Commerce</span>
    </div>
  )
}

export default Home