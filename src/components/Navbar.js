// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Ensure this link points to "/" */}
      <Link to="/" className="navbar-brand">MyJobHub Patna</Link>
      
      <ul className="navbar-links">
        {/* Ensure this link ALSO points to "/" */}
        <li><Link to="/">Find Jobs</Link></li>
        <li><Link to="/benefits">Benefit Schemes</Link></li>
        <li><Link to="/skills">Learn Skills</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;