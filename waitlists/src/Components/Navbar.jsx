import React, { useState } from 'react';
import conekta from '../assets/Conekta.png';
import '../css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>

      <div className='nav-logo-container'>
        <img src={conekta} alt="logo" className="navbar-logo" />
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Product</a></li>
        <li><a href="#finance" onClick={() => setIsOpen(false)}>Finance</a></li>

        
      </ul>

      <div className='nav-button-container'>
        <a href="#waitlist-form" className='join-btn'>Join Waitlist</a>
      </div>

      
    </nav>
  );
};

export default Navbar;