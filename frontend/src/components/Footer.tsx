import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Date Joshi & Associates</h5>
            <p>
              Providing trusted legal services with integrity, expertise, and dedication. 
              Your legal success is our commitment.
            </p>
            <div className="d-flex gap-3">
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li className="mb-2"><a href="/practice-areas" className="text-white text-decoration-none">Practice Areas</a></li>
              <li className="mb-2"><a href="/articles" className="text-white text-decoration-none">Articles</a></li>
              <li className="mb-2"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5>Contact Info</h5>
            <div className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="me-2" />
              <span>123 Legal Complex, Mumbai, Maharashtra</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaPhone className="me-2" />
              <span>+91 22 1234 5678</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaEnvelope className="me-2" />
              <span>contact@datejoshiassociates.com</span>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © 2024 Date Joshi & Associates. All rights reserved. | 
              <a href="/terms" className="text-white text-decoration-none"> Terms of Use</a> | 
              <a href="/privacy" className="text-white text-decoration-none"> Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
