// src/pages/HomePage.js

import React, { useState } from 'react'; // 1. Import useState
import HeroSection from '../components/HeroSection';
import JobCard from '../components/JobCard';

// This is our full, original list of jobs
const allJobs = [
  { title: 'Daily Cleaning Staff', company: 'Shine Cleaners', location: 'Patna', pay: '₹400/day' },
  { title: 'Construction Labor', company: 'Bihar Builders', location: 'Danapur', pay: '₹550/day' },
  { title: 'Warehouse Helper', company: 'Gati Logistics', location: 'Patna City', pay: '₹450/day' },
  { title: 'Restaurant Waiter', company: 'Bawarchi Hotel', location: 'Patna', pay: '₹350/day + tips' },
  { title: 'Painting Assistant', company: 'Rang De Patna', location: 'Kankarbagh', pay: '₹600/day' },
];

const HomePage = () => {
  // 2. Create state to hold the user's search term
  const [searchTerm, setSearchTerm] = useState('');

  // 3. This function updates the state every time the user types
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 4. Filter the jobs based on the current searchTerm
  const filteredJobs = allJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* 5. Pass the state and the function down to HeroSection */}
      <HeroSection 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
      />
      
      <h2 className="jobs-heading">Recently Added Jobs</h2>
      <div className="job-list-container">
        {/* 6. Display the FILTERED list of jobs */}
        {filteredJobs.map(job => (
          <JobCard 
            key={job.title}
            title={job.title} 
            company={job.company} 
            location={job.location} 
            pay={job.pay} 
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;