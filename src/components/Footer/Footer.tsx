import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  // FaTwitter,
  // FaInstagram,
  FaLinkedin,
  FaPhoneAlt ,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// import { FaXTwitter } from "react-icons/fa6";
import logo from "./../../assets/Logo (1).svg"; // Asegúrate de tener la ruta correcta para el logo
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className="footer pt-5 pb-5">
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">
          {/* Logo y Descripción */}
          <div className="mb-4 mb-md-0 d-flex align-items-start gap-3 flex-wrap width-30 ">
            <div className="d-flex">
              <img src={logo} alt="Company Logo" className="footer-logo mb-3" />
              {/* <span className="logo-text fs-4 ms-2">Pulster.ai</span> */}
            </div>

            <div>
              <p className="footer-description text-family-SF-Pro-text">
              {t('footerText')}
              {/* It is a long established fact that a reader will be distracted by the readable content. It is a long established fact that a reader . */}
              </p>
              <div className="footer-social-icons">
                <FaFacebook className="social-icon" />
                <i className="fa-brands fa-square-x-twitter social-icon"></i>
                {/* <FaXTwitter className="social-icon" /> */}
                {/* <FaInstagram className="social-icon" /> */}
                <FaLinkedin className="social-icon" />
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {/* Links de otras páginas */}
          <div className="d-flex">
            {/* <h5 className="footer-title text-family-SF-Pro-titel">
              Quick Links
            </h5> */}
            <ul className="footer-links">
              {/* <li className="text-family-SF-Pro-text">
                <a href="/home">Home</a>
              </li> */}
              <li className="text-family-SF-Pro-text">
                <a href="/about">About Us</a>
              </li>
              <li className="text-family-SF-Pro-text">
                <a href="/services">Solutions</a>
              </li>
              <li className="text-family-SF-Pro-text">
                <a href="/contact">Pricing</a>
              </li>
              <li className="text-family-SF-Pro-text">
                <a href="/contact">Contact</a>
              </li>
              {/* <li className="text-family-SF-Pro-text">
                <a href="/faq">FAQ</a>
              </li> */}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="margin-info">
            {/* <h5 className="footer-title text-family-SF-Pro-titel">
              Contact Us
            </h5> */}
            <p className="text-family-SF-Pro-text">
              
              <FaPhoneAlt  className="contact-icon" /> +(502) 2372-2614
            </p>
            <p className="text-family-SF-Pro-text">
              <FaEnvelope className="contact-icon" /> example@argos-io.com
            </p>
            <p className="text-family-SF-Pro-text">
              <FaMapMarkerAlt className="contact-icon" /> Via 3, 1-00, Zona 4,
              Edificio Tec 3
              <br />
              <p className="mar-rig">Guatemala, Guatemala 01004</p>
            </p>
          </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center d-flex flex-wrap-reverse align-items-center w-100 justify-content-between">
            <p className="text-family-SF-Pro-text">
              © 2024 Pluster.ai by Argus Analytics All rights reserved
            </p>

            <div className="widthMobile">
              <a href="/privacy-policy" className="footer-link text-family-SF-Pro-text">
                Privacy Policy
              </a>
              {" "}
              <span className="hiddenMobile"> | </span>
              {" "}
              <a href="/terms-of-service" className="footer-link text-family-SF-Pro-text" >
                Terms of Service
              </a>  
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
