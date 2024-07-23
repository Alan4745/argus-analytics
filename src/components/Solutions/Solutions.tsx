import React from "react";
import "./Solutions.css";

// Importa imágenes para las tarjetas
import cardImage1 from "./../../assets/Expansion genie.svg";
import cardImage2 from "./../../assets/Vision Hive.svg";
import cardImage3 from "./../../assets/Share of visit.svg";
import cardImage4 from "./../../assets/Fidelity Flow Chart.svg";

const Solutions = () => {
  return (
    <div className="solutions-background d-flex flex-column justify-content-start align-items-center pt-5 pb-5">
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="ellipse ellipse-3"></div>
      <div className="container solutions-content text-center z-3">
        <h2 className="text-solutions-h2">Enjoy Our solutions</h2>
        <span className="solutions-texto-content ">
          Lorem ipsum dolor sit amet consectetur. Ac mattis duis vitae orci
          dolor ac. Purus <br /> faucibus nibh cursus arcu pretium massa nam ac.
        </span>
      </div>

      <div className="container solutions-grid mt-5 z-3">
        <div className="row">
          <div className="col-md-5">
            <div className="solution-card">
              <img src={cardImage1} alt="Solution 1" className="card-image" />
              <div className="p-md-4 p-0">
                <h3 className="card-title">Expansion genie</h3>
                <p className="card-description">
                  Nos permite entende la cobertura con isodistancias de nuevos
                  puntos de venta o prospecciones según los criterios que le
                  defina.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="solution-card">
              <img src={cardImage2} alt="Solution 2" className="card-image" />
              <div>
                <div className="p-md-4 p-0">
                  <h3 className="card-title">Vision Hive</h3>
                  <p className="card-description">
                    Permite entender la cobertura actual de una cadena o un
                    comercio específico para tomar decisiones estratégicas. Ac
                    mattis duis vitae orci dolor ac. Purus faucibus nibh cursus
                    arcu pretium massa nam ac.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-7">
            <div className="solution-card">
              <img src={cardImage3} alt="Solution 3" className="card-image" />
              <div className="p-md-4 p-0">
                <h3 className="card-title">Share of visit</h3>
                <p className="card-description">
                  Distribución de visitas trimestrales según los parámetros de
                  análisis. Estos parámetros pueden ser desde nivel país o
                  comercio contra comercio. Ac mattis duis vitae orci dolor ac.
                  Purus faucibus nibh cursus arcu pretium massa nam ac.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="solution-card">
              <img src={cardImage4} alt="Solution 4" className="card-image" />
              <div className=" p-md-4 p-0">
                <h3 className="card-title">Fidelity Flow Chart</h3>
                <p className="card-description">
                  Permite analizar la partición de compra entre diversas tiendas
                  de la industria. Indica el porcentaje de clientes de la tienda
                  “X” que visita la tienda “Y”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="gradient-button-home mt-5">See our solutions</button>
    </div>
  );
};

export default Solutions;
