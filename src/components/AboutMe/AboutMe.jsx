import { Image } from "react-bootstrap";
import { midul3 } from "../../image/image";

function AboutMe() {
  return (
    <div style={{ backgroundColor: "#170550", paddingBottom: "50px" }}>
      <div className="container">
        <h1 className="text-white text-center py-5">
          About <span style={{ color: "#F86F03" }}>Me</span>
        </h1>
        <div
          className=" d-md-flex flex-direction-column"
          style={{ columnGap: "130px" }}
        >
          <div style={{ borderRadius: "15px", height: "100%", width: "100%" }}>
            <Image
              style={{ borderRadius: "15px", height: "100%", width: "100%" }}
              src={midul3}
            ></Image>
          </div>
          <div>
            <div
              className="good"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div>
                {" "}
                <h1 className="text-white">Frontend Designer & Developer</h1>
              </div>
              <div>
                <p className="text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus asperiores minima saepe dignissimos rem! Quam incidunt
                  aperiam hic veritatis magni veniam nobis ullam fugit deleniti!
                  Ducimus asperiores minima saepe dignissimos rem! Quam incidunt
                  aperiam hic veritatis magni veniam nobis ullam fugit deleniti!
                </p>

                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam nemo aperiam fugiat, eius aspernatur impedit.
                </p>
              </div>
              <div>
                {" "}
                <button className="text-info bg-white py-2 px-3 rounded-3">
                  <a href="AboutMore.jsx">Readme More..</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
