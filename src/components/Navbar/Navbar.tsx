import "./Navbar.css";
import logo from "./../../assets/logo.svg";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo-text fs-4" href="#">
            <img
              src={logo}
              alt="Company Logo"
              style={{ width: "30px", marginRight: "10px" }}
            />
            Pluster.ai
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link fw-normal text-dark-nav"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-normal text-dark-nav" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-normal text-dark-nav" href="#">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-normal text-dark-nav" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe ms-2 p-2 fw-bold color-icon "></i>
                  Eng
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </li>
                </ul>
              </div>
              <button className="gradient-button">Contact us</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
