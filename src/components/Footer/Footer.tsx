import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "./../../assets/logo.svg"; // Asegúrate de tener la ruta correcta para el logo

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-5">
      <div className="container">
        <div className="row">
          {/* Logo y Descripción */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="d-flex flex-row">
              <img src={logo} alt="Company Logo" className="footer-logo mb-3" />
              <span className="logo-text fs-4 ms-2">Pluster.ai</span>
            </div>
            <p className="footer-description text-family-SF-Pro-text">
              We provide top-notch solutions for your business. Our expertise
              and dedication ensure the best outcomes for our clients.
            </p>
            <div className="footer-social-icons">
              <FaFacebook className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>
          </div>

          {/* Links de otras páginas */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title text-family-SF-Pro-titel">
              Quick Links
            </h5>
            <ul className="footer-links">
              <li className="text-family-SF-Pro-text">
                <a href="/home">Home</a>
              </li>
              <li className="text-family-SF-Pro-text">
                <a href="/about">About Us</a>
              </li>
              <li className="text-family-SF-Pro-text">
                <a href="/services">Services</a>
              </li>
              <li className="text-family-SF-Pro-text">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-family-SF-Pro-text">
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title text-family-SF-Pro-titel">
              Contact Us
            </h5>
            <p className="text-family-SF-Pro-text">
              <FaPhone className="contact-icon" /> +(502) 2372-2614
            </p>
            <p className="text-family-SF-Pro-text">
              <FaEnvelope className="contact-icon" /> contact@pluster.ai
            </p>
            <p className="text-family-SF-Pro-text">
              <FaMapMarkerAlt className="contact-icon" /> Via 3, 1-00, Zona 4,
              Edificio Tec 3 <br /> Guatemala, Guatemala 01004
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-family-SF-Pro-text">
              © 2024 Pluster.ai by Argus Analytics All rights reserved
            </p>
            <a
              href="/privacy-policy"
              className="footer-link text-family-SF-Pro-text"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="/terms-of-service"
              className="footer-link text-family-SF-Pro-text"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
