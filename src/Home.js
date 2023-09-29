import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div>
      <div className='blueDiv'>
        <img src='../Assets/Asset01.svg' className='bluediv-img' />
      </div>
      <div className='whiteDev'>
        <span className='whiteDiv-span'>Need help with your <span className='whiteDiv-span-inside'>Assignments ?</span></span>
        <button className='whiteDiv-btn'> Click Here</button>
      </div>
    </div>
  )
}

export default Home