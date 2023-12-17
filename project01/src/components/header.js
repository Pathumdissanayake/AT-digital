// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/Logo.png';
import menuIcon from '../assets/menu-icon.png';
import DropdownMenu from '../components/DropdownMenu.js';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-div'>
      <div className="header-container">
        <div className='logo-div'>
          <Link to="#">
            <img id='logo-id' src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>

        <div className="navigation-links">
          <Link to="#services">Services</Link>
          <Link to="#about">About Us</Link>
          <Link to="#contacts">Contact Us</Link>
          <Link to="#careers">Careers</Link>
        </div>
      </div>
      {isMenuOpen && <DropdownMenu />}
    </div>
  );
}
