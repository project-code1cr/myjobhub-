// src/components/JobCard.js

import React from 'react';
import './JobCard.css'; // We will create this file for styling

const JobCard = ({ title, company, location, pay }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p className="company-name">{company}</p>
      <p>{location}</p>
      <div className="pay-rate">{pay}</div>
    </div>
  );
};

export default JobCard;