import Navbar from "../Navbar/Navbar";
import "./Home.css";
import screeMain from "./../../assets/screenMain.svg";
import grafico1 from "./../../assets/grafico1.svg";
import grafico2 from "./../../assets/grafico2.svg";

const Home = () => {
  return (
    <>
      <div className="home-background">
        <Navbar />
        <div className="home-content">
          <h1 className="text-home-h1">
            <span className="gradient-text">Discover</span> the power of <br />
            geo-behavioral <span className="gradient-text">intelligence</span>
          </h1>
          <div className="spacer"></div>
          <p className="home-texto-content">
            We help you create a clear view of consumer patterns and <br />
            trends that impact your business
          </p>
          <div className="large-spacer"></div>
          <button className="gradient-button-home">See our solutions</button>
          <div className="outline-gradient-container">
            <button className="outline-gradient-button">More about us</button>
          </div>
        </div>
        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>

        {/* Nueva sección de imágenes */}
        <div className="image-container">
          <div className="main-image">
            <img src={screeMain} alt="" className="img-fluid" />
          </div>
          <div className="floating-image-left">
            <img src={grafico1} alt="" className="img-fluid img-shadow " />
          </div>
          <div className="floating-image-right">
            <img src={grafico2} alt="" className="img-fluid img-shadow " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
