import { Image } from "react-bootstrap";
import {
  css,
  git,
  git2,
  html,
  js,
  react,
  tailwind,
  bootstrap,
  vscode,
  node,
  mongodb,
  express,
} from "../../image/icon";

function MyTech() {
  return (
    <div style={{ backgroundColor: "#170550", paddingBottom: "50px" }}>
      <div className="container">
        <div className="text-center text-white py-5 ">
          <h1>
            My <span style={{ color: "#F86F03" }}>Tech Stack</span>
          </h1>
          <p>Technologies I’ve been working with recently</p>
        </div>{" "}
        <div className="d-flex flex-wrap align-items-center justify-content-between pb-5">
          <div>
            <Image src={html} />
          </div>
          <div>
            <Image src={css} />
          </div>
          <div>
            <Image src={js} />
          </div>
          <div>
            <Image src={react} />
          </div>
          <div>
            <Image src={tailwind} />
          </div>
          <div>
            <Image src={bootstrap} />
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div>
            <Image src={git} />
          </div>
          <div>
            <Image src={vscode} />
          </div>
          <div>
            <Image src={git2} />
          </div>
          <div>
            <Image src={node} />
          </div>
          <div>
            <Image src={mongodb} />
          </div>
          <div>
            <Image src={express} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTech;
