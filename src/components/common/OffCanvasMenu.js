// OffCanvasMenu.js
import React from 'react';
import { Offcanvas, Button, Nav } from 'react-bootstrap';
import '@/css/OffCanvasMenu.css';

const OffCanvasMenu = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} className="offcanvas-menu">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link href="/" onClick={handleClose}>
            Home
          </Nav.Link>
          <Nav.Link href="/about" onClick={handleClose}>
            About
          </Nav.Link>
          {/* Add more Nav.Link components as needed */}
          <Nav.Link href="/services" onClick={handleClose}>
            Services
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasMenu;
