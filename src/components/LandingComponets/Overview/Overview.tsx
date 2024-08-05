import React from "react";
import "./Overview.css";
import { motion } from "framer-motion";
import image1 from "./../../../assets/icons/iconUser.svg";
import image2 from "./../../../assets/icons/IconGroup.svg";
import image3 from "./../../../assets/icons/IconQuestion.svg";
import iconMap from "./../../../assets/icons/iconMap.svg";
import iconGruopFiles from "./../../../assets/icons/gruopFiles.svg";
import iconChartDonut from "./../../../assets/icons/IcondonutChart.svg";
import pantalla from "./../../../assets/pantalla1.svg";
import arrow from "./../../../assets/arrowRounding.svg"; // Asegúrate de tener la imagen de la flecha importada correctamente
import { MdOutlineArrowOutward } from "react-icons/md";

const Overview = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overview-background d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
      <div className="container overview-content text-center">
        <motion.span
          className="aboutUs-span gradient-text-about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          OVERVIEW
        </motion.span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Understand <br /> competitive behavior
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Visualización que muestra el ambiente competitivo de la industria
          separado por zona <br /> urbana (área metropolitana) y la zona rural
          (cabeceras departamentale y, municipales).
        </motion.p>
      </div>

      <div className="container mt-0 mt-md-5">
        <div className="row mt-0 mt-md-3">
          <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-4 mb-md-0 mb-4">
            <motion.div
              className="overview-box text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={cardVariants}
            >
              <div className="overview-icon-title d-flex justify-content-between align-items-center">
                <img src={image1} alt="Icon 1" className="overview-image" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="overview-button d-flex justify-content-center align-items-center"
                >
                  <MdOutlineArrowOutward />
                </motion.button>
              </div>
              <h4 className="overview-title">Customer Profile</h4>
              <p className="overview-description">
                Get to know your customer socioeconomic status and visiting
                patterns.
              </p>
            </motion.div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-4 mb-md-0 mb-4">
            <motion.div
              className="overview-box text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              variants={cardVariants}
            >
              <div className="overview-icon-title d-flex justify-content-between align-items-center">
                <img src={image2} alt="Icon 2" className="overview-image" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="overview-button d-flex justify-content-center align-items-center"
                >
                  <MdOutlineArrowOutward />
                </motion.button>
              </div>
              <h4 className="overview-title">Competitive Environment</h4>
              <p className="overview-description">
                Compare your stores with your competition, diving into their
                coverage and consumer types and behaviors.
              </p>
            </motion.div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-4 mb-md-0 mb-4">
            <motion.div
              className="overview-box text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 1 }}
              variants={cardVariants}
            >
              <div className="overview-icon-title d-flex justify-content-between align-items-center">
                <img src={image3} alt="Icon 3" className="overview-image" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="overview-button d-flex justify-content-center align-items-center"
                >
                  <MdOutlineArrowOutward />
                </motion.button>
              </div>
              <h4 className="overview-title">AD HOC</h4>
              <p className="overview-description">
                Get additional information for you to make better business
                decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mb-0 mt-0 mb-md-5 mt-md-5">
        <motion.div
          className="main-image-overview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <img
            src={pantalla}
            className="img-fluid image-overview"
            alt="Main Overview"
          />
        </motion.div>
      </div>

      <div className="container overview-content text-center">
        <motion.span
          className="aboutUs-span gradient-text-about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          cómo funciona
        </motion.span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Una solución <br /> sencilla a tus dudas.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices fermentum viverra
          bibendum phasellus. <br />
          Urna egestas eu iaculis libero aenean gravida turpis nunc.
        </motion.p>
      </div>

      <div className="container">
        <div className="row position-relative gap-4 gap-md-0">
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
            <motion.div
              className="overview-card shadow-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={cardVariants}
            >
              <div className="card-image-wrapper d-flex justify-content-center align-items-center ">
                <div className="card-image-overview d-flex  align-items-center justify-content-center ">
                  <img src={iconMap} alt="Image 3" className="img-fluid" />
                  <div className="card-number">1</div>
                </div>
              </div>
              <h4 className="overview-title text-center">
                Mapa del entorno competitivo
              </h4>
              <p className="overview-description text-center">
                Mapeamos el ambiente competitivo de toda la industria
              </p>
            </motion.div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
            <motion.div
              className="overview-card shadow-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              variants={cardVariants}
            >
              <div className="card-image-wrapper d-flex justify-content-center align-items-center ">
                <div className="card-image-overview d-flex  align-items-center justify-content-center ">
                  <img
                    src={iconGruopFiles}
                    alt="Image 3"
                    className="img-fluid"
                  />
                  <div className="card-number">2</div>
                </div>
              </div>
              <h4 className="overview-title text-center">Generando datos</h4>
              <p className="overview-description text-center">
                Georeferenciamos las tiednas y generamos la data
              </p>
            </motion.div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
            <motion.div
              className="overview-card shadow-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 1 }}
              variants={cardVariants}
            >
              <div className="card-image-wrapper d-flex justify-content-center align-items-center ">
                <div className="card-image-overview d-flex  align-items-center justify-content-center ">
                  <img
                    src={iconChartDonut}
                    alt="Image 3"
                    className="img-fluid"
                  />
                  <div className="card-number">3</div>
                </div>
              </div>
              <h4 className="overview-title text-center">
                Explorando nuevos análisis
              </h4>
              <p className="overview-description text-center">
                Insights de qué está pasando en el mercado
              </p>
            </motion.div>
          </div>
          <motion.div
            className="connector-left arrow-container-connector  flex-column align-items-center justify-content-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <img src={arrow} className="img-fluid" />
          </motion.div>

          <motion.div
            className="connector-right  flex-column align-items-center justify-content-center arrow-container-connector"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <img src={arrow} className="img-fluid" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
