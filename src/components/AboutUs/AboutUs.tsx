import "./AboutUs.css";
import logo1 from "./../../assets/warerio.svg";
import logo2 from "./../../assets/squareStone.svg";
import logo3 from "./../../assets/natroma.svg";
import logo4 from "./../../assets/martino.svg";
import logo5 from "./../../assets/vertex.svg";
import logo6 from "./../../assets/aromix.svg";
import image1 from "./../../assets/mapaGlobal.svg"; // Asegúrate de tener la imagen correcta importada
import iconBalansa from "./../../assets/iconbalansa.svg";

import iconAnalitys from "./../../assets/iconAnalitys.svg";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs-background">
        <div className="text-center mb-4 aboutUs-title">
          JOINING 1000+ SATISFIED CLIENTS
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={logo1} alt="Logo 1" />
            </div>
            <div className="slide">
              <img src={logo2} alt="Logo 2" />
            </div>
            <div className="slide">
              <img src={logo3} alt="Logo 3" />
            </div>
            <div className="slide">
              <img src={logo4} alt="Logo 4" />
            </div>
            <div className="slide">
              <img src={logo5} alt="Logo 5" />
            </div>
            <div className="slide">
              <img src={logo6} alt="Logo 6" />
            </div>
            <div className="slide">
              <img src={logo1} alt="Logo 1" />
            </div>
            <div className="slide">
              <img src={logo2} alt="Logo 2" />
            </div>
            <div className="slide">
              <img src={logo3} alt="Logo 3" />
            </div>
            <div className="slide">
              <img src={logo4} alt="Logo 4" />
            </div>
            <div className="slide">
              <img src={logo5} alt="Logo 5" />
            </div>
            <div className="slide">
              <img src={logo6} alt="Logo 6" />
            </div>
          </div>
        </div>

        {/* Nueva sección */}
        <div className="container aboutUs-content mt-2  mt-md-5">
          <div className="row">
            <div className="col-md-6 position-relative d-flex justify-content-center align-items-center aboutUs-column-left order-1 order-sm-0">
              <div className="main-image-about">
                <img src={image1} alt="Main" className="img-fluid" />
              </div>
              <div className="floating-image-left-about d-block ">
                <div className="floating-box-left d-flex flex-row justify-content-start align-items-center">
                  <img
                    src={iconBalansa}
                    alt="Floating"
                    className="floating-image"
                  />
                  <div className="separator"></div>

                  <div className="d-flex flex-column justify-content-center align-items-start h-100">
                    <span className="floating-text-large">32%</span>
                    <span className="floating-text-small">Save team time</span>
                  </div>
                </div>
              </div>
              <div className="floating-image-right-about d-block ">
                <div className="floating-box-right d-flex flex-row justify-content-start align-items-center ">
                  <img
                    src={iconAnalitys}
                    alt="Floating"
                    className="floating-image"
                  />
                  <div className="separator"></div>

                  <div className="d-flex flex-column justify-content-center align-items-start h-100">
                    <span className="floating-text-large">40+</span>
                    <span className="floating-text-small">
                      comparison parameters
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 aboutUs-column-right text-left order-0 order-sm-1">
              <span className="aboutUs-span gradient-text-about">ABOUT US</span>
              <h2 className="aboutUs-heading">
                Pioneers in geospatial data generation and analysis
              </h2>
              <span className="aboutUs-description">
                Through customer lifecycles, from discovery to engagement and
                retention, our platform allows a true understanding of consumer
                behavior and industry trends, resulting in better strategic
                decisions and a higher ROI.
              </span>
              <div>
                <div className="outline-gradient-container-about mt-3">
                  <button className="outline-gradient-button-about">
                    More about us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
