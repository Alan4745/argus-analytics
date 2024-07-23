import React from "react";
import "./Overview.css";
import image1 from "./../../assets/icons/iconUser.svg";
import image2 from "./../../assets/icons/IconGroup.svg";
import image3 from "./../../assets/icons/IconQuestion.svg";

import iconMap from "./../../assets/icons/iconMap.svg";
import iconGruopFiles from "./../../assets/icons/gruopFiles.svg";
import iconChartDonut from "./../../assets/icons/IcondonutChart.svg";

import pantalla from "./../../assets/pantalla1.svg";
import arrow from "./../../assets/arrowRounding.svg"; // Asegúrate de tener la imagen de la flecha importada correctamente
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const Overview = () => {
  return (
    <div className="overview-background d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
      <div className="container overview-content text-center">
        <span className="aboutUs-span gradient-text-about">OVERVIEW</span>
        <h2>
          Understand <br /> competitive behavior
        </h2>
        <p>
          Visualización que muestra el ambiente competitivo de la industria
          separado por zona <br /> urbana (área metropolitana) y la zona rural
          (cabeceras departamentale y, municipales).
        </p>
      </div>

      <div className="container mt-0 mt-md-5">
        <div className="row mt-0 mt-md-3">
          <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-4 mb-md-0 mb-4">
            <div className="overview-box text-center">
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
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-4 mb-md-0 mb-4">
            <div className="overview-box text-center">
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
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-4 mb-md-0 mb-4">
            <div className="overview-box text-center">
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
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-0 mt-0 mb-md-5 mt-md-5">
        <div className="main-image-overview">
          <img
            src={pantalla}
            className="img-fluid image-overview"
            alt="Main Overview"
          />
        </div>
      </div>

      <div className="container overview-content text-center">
        <span className="aboutUs-span gradient-text-about">cómo funciona</span>
        <h2>
          Una solución <br /> sencilla a tus dudas.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices fermentum viverra
          bibendum phasellus. <br />
          Urna egestas eu iaculis libero aenean gravida turpis nunc.
        </p>
      </div>

      <div className="container">
        <div className="row position-relative">
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
            <div className="overview-card shadow-box">
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
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
            <div className="overview-card shadow-box">
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
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
            <div className="overview-card shadow-box">
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
            </div>
          </div>
          <div className="connector-left arrow-container-connector  flex-column align-items-center justify-content-center">
            <img src={arrow} className="img-fluid" />
          </div>

          <div className="connector-right  flex-column align-items-center justify-content-center arrow-container-connector">
            <img src={arrow} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
