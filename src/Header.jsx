import Logo from './assets/Logo.png'; 
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="logo-link">
            <div className="logo">
              <img src={Logo} alt="This is JobJob Logo" />
            </div>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href='#' img> </a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Sign Up</a></li>                                  {/*kệ cái file này i*/}
          <li><a href="#">Contact</a></li>
          <image src={Logo} alt="This is JobJob Logo" className="logo" />
        </ul>

        <Link to='/login'> 
          <div className="navbar-right">
            <button className="login-btn">Log In</button>
          </div>
        </Link> 
      </nav>
    );
  }

export default Header