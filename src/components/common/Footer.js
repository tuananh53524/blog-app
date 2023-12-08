// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@/css/Footer.css"; // Add styling in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <h5>About Us</h5>
            <p className="text-justify">
              Welcome to <span className="fw-bold">'Mon.ne'</span> homestay nestled in the heart of a
              tranquil rural area. Immerse yourself in the simplicity and
              authenticity of village life while enjoying the comforts of a cozy
              home. Surrounded by lush greenery and the soothing melody of
              nature, <span className="fw-bold">Mon.ne</span> homestay offers a peaceful escape from the hustle and
              bustle of city living.
            </p>
          </Col>
          <Col md={6} lg={4} className="ps-lg-5">
            <h5>Contact</h5>
            <p>Email: tuananh53524@gmail.com</p>
            <p>Phone: (+84) 964.131.655</p>
          </Col>
          <Col md={12} lg={4} className="ps-lg-5">
            <h5>Follow Us</h5>
            <div className="d-flex gap-2">
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="fs-5" />
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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
