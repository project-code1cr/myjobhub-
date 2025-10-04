// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';

// Accept props for the search value and the change handler
const HeroSection = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="hero-section">
      <h1>Find Daily Wage Work in Patna</h1>
      <p>Your search for local work ends here.</p>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for jobs (e.g., cleaning, labor...)"
          value={searchTerm}       // The value is now controlled by state
          onChange={onSearchChange}  // This function will be called when user types
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default HeroSection;