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
            <p className="texColorS fontSize30 fontWeight600 m0">{`Hi, It's me`}</p>
            <p className="texColorP fontSize50 fontWeight700 m0">
              MIDUL ISLAM RASEL
            </p>
            <h3 className="text-white fontSize35 fontWeight600 m0">
              {`And I'm a`} <span className="texColorS">Fontend Developer</span>{" "}
            </h3>
            <p className="texColorP fontSize20 fontWeight400 m0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ad
              ipsum labore molestiae eum nihil obcaecati rerum recusandae
              repellendus voluptatum!
            </p>
            <div className="d-flex pd36">
              <li className=" fontSize30 texColorP pdR24">
                {" "}
                <FaFacebook />
              </li>

              <li className="fontSize30 texColorP pdR24">
                {" "}
                <FaLinkedin />
              </li>
              <li className="fontSize30 texColorP pdR24">
                {" "}
                <FaGithub />
              </li>
              <li className="fontSize30 texColorP pdR24">
                {" "}
                <FaInstagramSquare />
              </li>
            </div>
            <button className="px-4 py-2.3 fontWeight600 texColorP borderR20 bgColorT pdButton">
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
