import { Image } from "react-bootstrap";
import {
  tem1,
  tem2,
  tem3,
  tem4,
  tem5,
  tem6,
  tem7,
  tem8,
} from "../../image/tem_image";
// import styles from "./Project.module.css";

function Project() {
  return (
    <div className="pb-5 " style={{ backgroundColor: "#31065A" }}>
      <h2 className="text-center py-4 text-white">Portfolio</h2>
      <div className="container">
        <div className="d-flex flex-wrap gap-3 aline-center justify-content-center">
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem1}></Image>
          </div>
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem2}></Image>
          </div>
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem3}></Image>
          </div>
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem4}></Image>
          </div>
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem5}></Image>
          </div>
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem6}></Image>
          </div>
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem7}></Image>
          </div>
          <div style={{ while: "200px", height: "150px" }}>
            <Image style={{ height: "100%", width: "100%" }} src={tem8}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
