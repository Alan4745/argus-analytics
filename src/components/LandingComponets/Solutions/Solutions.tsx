import "./Solutions.css";
import { motion } from "framer-motion";

// Importa imágenes para las tarjetas
import cardImage1 from "./../../../assets/Expansion genie.svg";
import cardImage2 from "./../../../assets/Vision Hive.svg";
import cardImage3 from "./../../../assets/Share of visit.svg";
import cardImage4 from "./../../../assets/Fidelity Flow Chart.svg";

const Solutions = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="solutions-background d-flex flex-column justify-content-start align-items-center pt-5 pb-5"
      id="solutions"
    >
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="ellipse ellipse-3"></div>
      <div className="container solutions-content text-center z-3">
        <motion.h2
          className="text-solutions-h2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Enjoy Our solutions
        </motion.h2>
        <motion.span
          className="solutions-texto-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur. Ac mattis duis vitae orci
          dolor ac. Purus <br /> faucibus nibh cursus arcu pretium massa nam ac.
        </motion.span>
      </div>

      <div className="container solutions-grid mt-5 z-3">
        <div className="row">
          <div className="col-md-5">
            <motion.div
              className="solution-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={cardVariants}
            >
              <img src={cardImage1} alt="Solution 1" className="card-image" />
              <div className="p-md-4 p-0">
                <h3 className="card-title">Expansion genie</h3>
                <p className="card-description">
                  Nos permite entende la cobertura con isodistancias de nuevos
                  puntos de venta o prospecciones según los criterios que le
                  defina.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-7">
            <motion.div
              className="solution-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={cardVariants}
            >
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
            </motion.div>
          </div>
        </div>
        <div className="row mt-md-4">
          <div className="col-md-7">
            <motion.div
              className="solution-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              variants={cardVariants}
            >
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
            </motion.div>
          </div>
          <div className="col-md-5">
            <motion.div
              className="solution-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 1 }}
              variants={cardVariants}
            >
              <img src={cardImage4} alt="Solution 4" className="card-image" />
              <div className=" p-md-4 p-0">
                <h3 className="card-title">Fidelity Flow Chart</h3>
                <p className="card-description">
                  Permite analizar la partición de compra entre diversas tiendas
                  de la industria. Indica el porcentaje de clientes de la tienda
                  “X” que visita la tienda “Y”.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.button
        className="gradient-button-home mt-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        See all solutions
      </motion.button>
    </div>
  );
};

export default Solutions;
