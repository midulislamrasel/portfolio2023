import { CgCalendarDates } from "react-icons/cg";
import { FaRegBuilding } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
function AboutMore() {
  return (
    <div style={{ backgroundColor: "#170550", color: "white" }}>
      <div className="container">
        <h2>Work Experience</h2>
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex flex-column ">
            <h4>Junior Web Developer</h4>
            <div className="d-flex gap-5">
              <li>
                <FaRegBuilding />
                Dr. Rajkumar's learning App
              </li>
              <li>
                <CiLocationOn /> Bengaiur{" "}
              </li>
            </div>
          </div>
          <div className="text-center">
            <p className="">Full Time</p>
            <p>
              <CgCalendarDates /> Sep 2021 - Dec 2022
            </p>
          </div>
        </div>

        {/* ============= */}
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex flex-column ">
            <h4>Junior Web Developer</h4>
            <div className="d-flex gap-5">
              <li>
                <FaRegBuilding />
                Dr. Rajkumar's learning App
              </li>
              <li>
                <CiLocationOn /> Bengaiur{" "}
              </li>
            </div>
          </div>
          <div className="text-center">
            <p className="">Full Time</p>
            <p>
              <CgCalendarDates /> Sep 2021 - Dec 2022
            </p>
          </div>
        </div>
        {/* ============= */}
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex flex-column ">
            <h4>Junior Web Developer</h4>
            <div className="d-flex gap-5">
              <li>
                <FaRegBuilding />
                Dr. Rajkumar's learning App
              </li>
              <li>
                <CiLocationOn /> Bengaiur{" "}
              </li>
            </div>
          </div>
          <div className="text-center">
            <p className="">Full Time</p>
            <p>
              <CgCalendarDates /> Sep 2021 - Dec 2022
            </p>
          </div>
        </div>

        {/* ========Education=========== */}
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex flex-column ">
            <h4>Junior Web Developer</h4>
            <div className="d-flex gap-5">
              <li>
                <FaRegBuilding />
                Dr. Rajkumar's learning App
              </li>
              <li>
                <CiLocationOn /> Bengaiur{" "}
              </li>
            </div>
          </div>
          <div className="text-center">
            <p className="">Full Time</p>
            <p>
              <CgCalendarDates /> Sep 2021 - Dec 2022
            </p>
          </div>
        </div>
        {/* ==================== */}
        <h2>Education</h2>
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex flex-column ">
            <h4>Bachelor In Electronics & Communication</h4>
            <div className="d-flex gap-5">
              <li>
                <FaRegBuilding />
                Bangalore Instutute of Technology
              </li>
              <li>
                <CiLocationOn /> Bengaiur{" "}
              </li>
            </div>
          </div>
          <div className="text-center">
            <p className="">Full Time</p>
            <p>
              <CgCalendarDates /> Sep 2021 - Dec 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMore;
