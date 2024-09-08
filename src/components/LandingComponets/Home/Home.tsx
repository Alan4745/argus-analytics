import Navbar from "../../Navbar/Navbar";
import "./Home.css";
import screeMain from "./../../../assets/screenMain.svg";
import grafico1 from "./../../../assets/grafico1.svg";
import grafico2 from "./../../../assets/grafico2.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="home-background" id="home">

        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <Navbar />
        <div className="home-content">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-home-h1">
              <span className="gradient-text">{t("homeTitle1-1")} </span>
              <span className="text-shadows"> {t("homeTitle1-2")} </span>
              <br />
              <span className="text-shadows"> {t("homeTitle2-1")}</span>
              <span className="gradient-text"> {t("homeTitle2-2")}</span>
            </h1>
          </motion.div>

          <div className="spacer"></div>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="home-texto-content"
          >
            {t("homeSubtitle1")} <br />
            {t("homeSubtitle2")}
          </motion.p>
          <div className="large-spacer"></div>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gradient-button-home"
          >
            {t("homeBtnText1")}
          </motion.button>
          <div className="outline-gradient-container">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="outline-gradient-button"
            >
              {t("homeBtnText2")}
            </motion.button>
          </div>
        </div>
        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>

        {/* Nueva sección de imágenes */}
        <div className="image-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="main-image"
          >
            <img src={screeMain} alt="" className="img-fluid" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="floating-image-left"
          >
            <img src={grafico1} alt="" className="img-fluid img-shadow " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="floating-image-right"
          >
            <img src={grafico2} alt="" className="img-fluid img-shadow " />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
