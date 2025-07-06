import React, { useRef } from 'react';

import Home from './components/Home';
import OurServicesPage from './components/OurServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
