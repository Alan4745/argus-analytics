import React from "react";
import { motion, useInView } from "framer-motion";
import "./ContactUs.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  // Usar refs para detectar cuándo los elementos están en la vista
  const titleRef = React.useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const subtitleRef = React.useRef(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  const descRef = React.useRef(null);
  const isDescInView = useInView(descRef, { once: true });

  const contactRef = React.useRef(null);
  const isContactInView = useInView(contactRef, { once: true });

  const formRef = React.useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  return (
    <div className="contact-us pt-5 pb-5" id="ContactUs">
      <div className="floating-image-ContactUs left"></div>
      <div className="floating-image-ContactUs right"></div>
      <div className="container">
        <div className="row">
          {/* Información de contacto */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="contact-info">
              <motion.span
                ref={titleRef}
                className="aboutUs-span gradient-text-ContactUs"
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* CONTACT US */}
                {t("contactUs")}
              </motion.span>
              <motion.h2
                ref={subtitleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isSubtitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ fontSize: 40 }}
              >
                {/* Making decisions <br />
                is no longer a gamble */}
                {t("makingDecisions")}
              </motion.h2>
              <motion.p
                ref={descRef}
                className="text-contactUs"
                initial={{ opacity: 0, y: 20 }}
                animate={isDescInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* It is a long established fact that a reader will be distracted
                by the readable content met facilisis facilisis eget. */}
                {t("longEstablishedFact")}
              </motion.p>
              <motion.p
                ref={contactRef}
                className="text-contactUs"
                initial={{ opacity: 0, y: 20 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <i className="fas fa-map-marker-alt contact-icon text-white"></i> Via 3,
                1-00, Zona 4, Edificio Tec 3 <br />
                <p className="mar-rig-less">Guatemala, Guatemala 01004</p>
              </motion.p>
              <motion.p
                className="text-contactUs"
                initial={{ opacity: 0, y: 20 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <i className="fa-solid fa-phone contact-icon text-white"></i> +(502)
                2372-2614
              </motion.p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="col-12 col-md-6">
            <motion.form
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="row mb-3">
                <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="message">How can we help you?</label>
                </div>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the processing of my data in accordance with the
                  Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-light fw-bolder btnWidth"
              >
                Request a Demo
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
