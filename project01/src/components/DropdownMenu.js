import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li className='list-text'><Link to="#services">Services</Link></li>
        <li className='list-text'><Link to="#about">About Us</Link></li>
        <li className='list-text'><Link to="#contacts">Contact Us</Link></li>
        <li className='list-text'><Link to="#careers">Careers</Link></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
