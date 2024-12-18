import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/navbar.css";

const CustomNavbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar expand="lg" className="custom-navbar" >
        <Container>
          <Navbar.Brand href="/" className="brand">
            Code Inovation
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="/services" className="nav-link">
                Services
              </Nav.Link>
              <Nav.Link href="/portfolio" className="nav-link">
                Portfolio
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default CustomNavbar;
