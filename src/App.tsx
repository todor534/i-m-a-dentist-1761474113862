import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

const App: React.FC = () => (
  <>
    <nav className="navbar">
      <div className="container nav-content">
        <span className="logo">Dr. Smith</span>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <footer className="footer">
      <div className="container">
        <span>&copy; {new Date().getFullYear()} Dr. Smith, DDS. All rights reserved.</span>
      </div>
    </footer>
  </>
);

export default App;
