// ResponsiveNavbar.js
"use client";
import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import OffCanvasMenu from "./OffCanvasMenu"; // Import the OffCanvasMenu component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "@/css/ResponsiveNavbar.css";

const ResponsiveNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const handleOffCanvasToggle = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  const handleOffCanvasClose = () => {
    setShowOffCanvas(false);
  };

  return (
    <div className="sticky-top bg-white">
      <Container>
        <Navbar expanded={expanded} expand="lg" className="">
          <Navbar.Brand href="/">Mon.ne</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleOffCanvasToggle}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="mr-auto">
              <Nav.Link href="/" className="animation-underline">Home</Nav.Link>
              <Nav.Link href="/about" className="animation-underline">About</Nav.Link>
              {/* Add more Nav.Link components as needed */}
              <NavDropdown title="Services" id="basic-nav-dropdown" className="animation-underline">
                <NavDropdown.Item href="/service1" className="animation-underline">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="/service2" className="animation-underline">Service 2</NavDropdown.Item>
                {/* Add more NavDropdown.Item components as needed */}
              </NavDropdown>
            </Nav>
            <Nav className="gap-3 align-items-center">
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="fs-5"/>
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="fs-5" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="fs-5" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="fs-5" />
                </a>
              </div>
              <Button variant="outline-dark">Sign In</Button>
            </Nav>
            {/* <Button variant="outline-light" onClick={handleOffCanvasToggle}>
            Menu
          </Button> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
      {/* Off-canvas menu */}
      <OffCanvasMenu show={showOffCanvas} handleClose={handleOffCanvasClose} />
    </div>
  );
};

export default ResponsiveNavbar;
