import { Image } from "react-bootstrap";
import { icon, icon1, icon2 } from "../../image/icon";

function Services() {
  return (
    <div className="pb-5" style={{ backgroundColor: "#31065A" }}>
      <div className="container text-center">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
        >
          My <span style={{ color: "#F86F03" }}>Services</span>
        </h1>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <div className="col-12 col-md-5 col-lg-3 bg-white rounded-3 px-5 ">
            <div className="py-5">
              <Image src={icon1}></Image>
            </div>
            <h3 className="pb-4">Web Development</h3>
            <p className="pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
          <div className="col-12 col-md-5 col-lg-3 bg-white rounded-3 px-5">
            <div className="py-5">
              <Image src={icon2}></Image>
            </div>
            <h3 className="pb-4">Web Development</h3>
            <p className="pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
          <div className=" col-12 col-md-5 col-lg-3 bg-white rounded-3 px-5">
            <div className="py-5">
              <Image src={icon}></Image>
            </div>
            <h3 className="pb-4">Web Development</h3>
            <p className="pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
