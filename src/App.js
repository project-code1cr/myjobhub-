// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BenefitsPage from './pages/BenefitsPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    // This basename prop tells the router your app's home is /myjobhub
    <Router basename="/myjobhub-">
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;