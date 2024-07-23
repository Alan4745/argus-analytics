import React from "react";
import "./Overview.css";
import { FaIconName, FaArrowRight } from "react-icons/fa"; // Importa los iconos que necesitas

const Overview = () => {
  return (
    <div className="overview-background d-flex flex-column justify-content-center align-items-center">
      <div className="container overview-content text-center">
        <h2>Overview</h2>
        <p>A brief overview of our services and offerings.</p>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-4 overview-box text-center">
            <div className="overview-icon-title d-flex justify-content-between align-items-center">
              <FaIconName className="overview-icon" />
              <button className="overview-button">
                <FaArrowRight />
              </button>
            </div>
            <h3 className="overview-title">Title 1</h3>
            <p className="overview-description">Small description text here.</p>
          </div>
          <div className="col-4 overview-box text-center">
            <div className="overview-icon-title d-flex justify-content-between align-items-center">
              <FaIconName className="overview-icon" />
              <button className="overview-button">
                <FaArrowRight />
              </button>
            </div>
            <h3 className="overview-title">Title 2</h3>
            <p className="overview-description">Small description text here.</p>
          </div>
          <div className="col-4 overview-box text-center">
            <div className="overview-icon-title d-flex justify-content-between align-items-center">
              <FaIconName className="overview-icon" />
              <button className="overview-button">
                <FaArrowRight />
              </button>
            </div>
            <h3 className="overview-title">Title 3</h3>
            <p className="overview-description">Small description text here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
