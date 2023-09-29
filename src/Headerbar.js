import React from 'react';
import "./Headerbar.css";
import { Link } from 'react-router-dom';

function Headerbar() {
  return (
    <div className='headerbarMain'>
        <div className='headerbarMain-dir'>
            <Link to="/"><span>Home</span> </Link>
            <Link to="/library"><span>Library</span> </Link>
            <Link to="/join"><span>Join_With_the_Community</span> </Link>
            <Link to="/about"><span>About_Us</span> </Link>
        </div>
    </div>
  )
}

export default Headerbar