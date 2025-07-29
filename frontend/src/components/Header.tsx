import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary-blue fw-bold fs-3">
          Date Joshi & Associates
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/practice-areas" onClick={() => setExpanded(false)}>Practice Areas</Nav.Link>
            <Nav.Link as={Link} to="/articles" onClick={() => setExpanded(false)}>Articles & Blogs</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              <button className="btn btn-primary btn-sm">Contact Us</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
