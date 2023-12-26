import { Image } from "react-bootstrap";
import "../../index.css";
import { logo } from "../../image/image";

function Navbar() {
  return (
    <>
      <div style={{ backgroundColor: "#170550" }}>
        <nav className="container navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand fs-4 text-light" href="#">
              <Image src={logo}></Image>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item text-light">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="#">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <button className=" bg-light  py-1 px-4  rounded text-primary fs-6 fw-medium">
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
