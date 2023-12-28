import { Image } from "react-bootstrap";
import "../../index.css";
import { logo } from "../../image/image";

function Navbar() {
  return (
    <>
      <div className="bgColorP">
        <nav className="container navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="mgR150">
              <a className="navbar-brand fs-4 text-light " href="#">
                <Image src={logo}></Image>
              </a>
            </div>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fontSize18 fontWeight600">
                <li className="nav-item text-light pd15">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item pd15">
                  <a className="nav-link text-light " href="#">
                    About Me
                  </a>
                </li>
                <li className="nav-item pd15">
                  <a className="nav-link text-light" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item pd15">
                  <a className="nav-link text-light" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item pd15">
                  <a className="nav-link text-light" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <button className=" bgColorW pdButton  borderR20 textColorBtn fontSize18 fw-medium">
                Hire me
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
