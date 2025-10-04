// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* The brand can be a Link to the homepage */}
      <Link to="/" className="navbar-brand">MyJobHub Patna</Link>
      <ul className="navbar-links">
        {/* Use Link instead of a */}
        <li><Link to="/">Find Jobs</Link></li>
        <li><Link to="/benefits">Benefit Schemes</Link></li>
        <li><Link to="/skills">Learn Skills</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;