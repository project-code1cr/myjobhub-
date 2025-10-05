// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';

// Add new props: introText and heroImage
const HeroSection = ({ searchTerm, onSearchChange, introText, heroImage }) => {
  return (
    <div className="hero-section">
      {heroImage && <img src={heroImage} alt="Connecting workers with jobs" className="hero-image" />}
      <h1>Find Daily Wage Work in Patna</h1>
      <p className="intro-text">{introText}</p> {/* Display the intro text */}
      <p>Your search for local work ends here.</p>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for jobs (e.g., cleaning, labor...)"
          value={searchTerm}       
          onChange={onSearchChange}  
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default HeroSection;