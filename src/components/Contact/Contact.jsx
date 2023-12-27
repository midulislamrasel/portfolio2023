import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#170550",
        paddingTop: "70px",
        paddingBottom: "70px",
        color: "white",
      }}
    >
      <div className="container ">
        <div className=" row ">
          <div className="col-md-5  col-sm-12  d-flex align-items-center justify-content-around ">
            <div className="">
              <li className="fs-4">
                <FaPhoneAlt /> + 01789563124
              </li>

              <li className="fs-4 py-3">
                <MdOutlineMail /> mdriead.bd@gmail.com
              </li>
              <li className="fs-4">
                <PiTelegramLogoLight /> Zirabo, Ashulia, Savar, Dhaka
              </li>
            </div>
          </div>
          <div className=" col-md-5  col-sm-12 text-white">
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  style={{ backgroundColor: "#31065A", border: "none" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  style={{ backgroundColor: "#31065A", border: "none" }}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Phone Number"
                    style={{ backgroundColor: "#31065A", border: "none" }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="text-white"
                    placeholder="Subject"
                    style={{ backgroundColor: "#31065A", border: "none" }}
                  />
                </Col>
              </Row>
              <FloatingLabel className="mt-3">
                <Form.Control
                  placeholder="Phone Number"
                  style={{
                    height: "100px",
                    backgroundColor: "#31065A",
                    border: "none",
                  }}
                />
              </FloatingLabel>
            </Form>
            <div className="text-center">
              <button
                className="btn  px-4 text-white mt-3 "
                style={{ backgroundColor: "#31065A" }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
