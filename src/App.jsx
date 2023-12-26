import AboutMe from "./components/AboutMe/AboutMe";
import AboutMore from "./components/AboutMore/AboutMore";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MyTech from "./components/MyTech/MyTech";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <AboutMe />
        <Services />
        <MyTech />
        <Project />
        <Contact />
        <Footer />
        <AboutMore />
      </div>
    </>
  );
}

export default App;
