import "./AboutUs.css";
import logo1 from "./../../assets/warerio.svg";
import logo2 from "./../../assets/squareStone.svg";
import logo3 from "./../../assets/natroma.svg";
import logo4 from "./../../assets/martino.svg";
import logo5 from "./../../assets/vertex.svg";
import logo6 from "./../../assets/aromix.svg";
import image1 from "./../../assets/mapaGlobal.svg"; // Asegúrate de tener la imagen correcta importada

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
        <div className="container aboutUs-content mt-5">
          <div className="row">
            <div className="col-md-6 position-relative d-flex justify-content-center align-items-center aboutUs-column-left">
              <div className="main-image-about">
                <img src={image1} alt="Main" className="img-fluid" />
              </div>
              <div className="floating-image-left-about d-block ">
                <div className="floating-box-left"></div>
              </div>
              <div className="floating-image-right-about d-block ">
                <div className="floating-box-right"></div>
              </div>
            </div>
            <div className="col-md-6 aboutUs-column-right text-left">
              <span className="aboutUs-span">ABOUT US</span>
              <h2 className="aboutUs-heading">
                Pioneers in geospatial data generation and analysis
              </h2>
              <span className="aboutUs-description">
                We specialize in generating and analyzing geospatial data to
                help you make informed decisions.
              </span>
              <div className="outline-gradient-container mt-3">
                <button className="outline-gradient-button">
                  More about us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
