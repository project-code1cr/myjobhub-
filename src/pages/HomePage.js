// src/pages/HomePage.js

import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import JobCard from '../components/JobCard';
import Image from '../images.jpg'; // 1. Import your new image here
import heroImage from '../components/hero-image.jpg'; 
// This is our full, original list of jobs (will be replaced by Firebase later)
const allJobs = [
  { title: 'Daily Cleaning Staff', company: 'Shine Cleaners', location: 'Patna', pay: '₹400/day' },
  { title: 'Construction Labor', company: 'Bihar Builders', location: 'Danapur', pay: '₹550/day' },
  { title: 'Warehouse Helper', company: 'Gati Logistics', location: 'Patna City', pay: '₹450/day' },
  { title: 'Restaurant Waiter', company: 'Bawarchi Hotel', location: 'Patna', pay: '₹350/day + tips' },
  { title: 'Painting Assistant', company: 'Rang De Patna', location: 'Kankarbagh', pay: '₹600/day' },
  { title: 'Security Guard', company: 'Suraksha Services', location: 'Fraser Road', pay: '₹8000/month' },
  { title: 'Delivery Partner', company: 'Zomato/Swiggy', location: 'Across Patna', pay: '₹10000-15000/month' },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = allJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) // Also search by location
  );

  // 2. Define your intro text
  const introText = "MyJobHub is dedicated to connecting the urban poor in Patna with immediate daily wage work and essential government/NGO benefit schemes. Our mission is to reduce poverty by providing easy access to local job opportunities and skill-building resources.";

  return (
    <>
      {/* 3. Pass the new props to HeroSection */}
      <HeroSection 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
        introText={introText}
        heroImage={heroImage} 
        // Pass the imported image
        Image={Image}
      />
      
      <h2 className="jobs-heading">Recently Added Jobs</h2>
      <div className="job-list-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard 
              key={job.title + job.company} // A more unique key for real data
              title={job.title} 
              company={job.company} 
              location={job.location} 
              pay={job.pay} 
            />
          ))
        ) : (
          <p className="no-jobs-found">No jobs found matching your search.</p>
        )}
      </div>
    </>
  );
};

export default HomePage;