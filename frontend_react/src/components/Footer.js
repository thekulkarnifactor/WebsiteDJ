import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Date Joshi & Associates</h3>
            <p>Trusted legal excellence with integrity, expertise, and dedication. We provide comprehensive legal solutions for individuals and businesses.</p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Disclaimer:</strong> This website is in compliance with Bar Council of India rules.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/practice-areas">Practice Areas</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h3>Practice Areas</h3>
            <a href="#">Corporate Law</a>
            <a href="#">Civil Litigation</a>
            <a href="#">Criminal Defense</a>
            <a href="#">Family Law</a>
            <a href="#">Intellectual Property</a>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 123 Legal Plaza, Mumbai, Maharashtra 400001</p>
            <p>📞 +91 22 1234 5678</p>
            <p>✉️ info@datejoshi.com</p>
            <p>🕒 Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Date Joshi & Associates. All rights reserved. | Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
