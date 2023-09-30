import React from 'react';
import "./Headerbar.css";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';

function Headerbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <div className='headerbarMain'>
        <div className='headerbarMain-dir' ref={navRef}>
            <Link to="/" onClick={showNavbar}><span>Home</span> </Link>
            <Link to="/library" onClick={showNavbar}><span>Library</span> </Link>
            <Link to="/join" onClick={showNavbar}><span>Join_With_the_Community</span> </Link>
            <Link to="/about" onClick={showNavbar}><span>About_Us</span> </Link>

        </div>
        <button className='nav-btn nav-open-btn' onClick={showNavbar} >
          <FaBars />
        </button>
    </div>
  )
}

export default Headerbar