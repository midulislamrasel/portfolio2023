import { Image } from "react-bootstrap";
import { bannerImage } from "../../image/image";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";

function Banner() {
  return (
    <div style={{ backgroundColor: "#31065A" }}>
      <div className="container">
        <div className="  d-flex  justify-content-between align-items-center ">
          <div>
            <h3 style={{ color: "#F86F03" }}>{`Hi, It's me`}</h3>
            <h2 className="text-white">MIDUL ISLAM RASEL</h2>
            <h3 className="text-white">
              {`And I'm a`}{" "}
              <span style={{ color: "#F86F03" }}>Fontend Developer</span>{" "}
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ad
              ipsum labore molestiae eum nihil obcaecati rerum recusandae
              repellendus voluptatum!
            </p>
            <div className="d-flex ">
              <li className=" fs-3 text-white">
                {" "}
                <FaFacebook />
              </li>

              <li className="ms-3 fs-3 text-white">
                {" "}
                <FaLinkedin />
              </li>
              <li className="ms-3 fs-3 text-white">
                {" "}
                <FaGithub />
              </li>
              <li className="ms-3 fs-3 text-white">
                {" "}
                <FaInstagramSquare />
              </li>
            </div>
            <button
              style={{
                backgroundColor: "#F86F03",
                padding: "9px 44px",
                borderRadius: "20px",
                margin: "32px 0px 32px 0px",
                color: "wheat",
                fontWeight: "600",
              }}
              className="px-4 py-2.3"
            >
              Dowinlode CV
            </button>
          </div>

          <div className="" style={{ height: "100%", width: "100%" }}>
            <Image
              style={{ height: "100%", width: "100%" }}
              src={bannerImage}
              alt="banner"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
