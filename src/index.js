import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import Tabs from "./components/Tabs.js";
import Profile from "./components/Profile.js";
import Footer from "./components/footer.js";

export default function App() {
  const [position, setPosition] = useState({ x: 835, y: 665 });

  const handleMouseMove = (event) => {
    const { pageX: xpos, pageY: ypos } = event;
    setPosition({ x: xpos, y: ypos });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <span className="mouse-effects" onMouseMove={handleMouseMove}>
        <span
          className={"ball"}
          style={{
            left: position.x,
            top: position.y,
          }}
        ></span>

        <header className="App-header">
          <Navbar />
          <Profile />
          <Tabs />
          <Footer />
        </header>
      </span>
    </>
  );
}
function Navbar() {
  return (
    <div className={"navbar1"}>
      {/*<img src="./logo.svg" alt="logo">*/}
      <h1 className="ph1">My Portfolio</h1>
      <ul className="a1">
        <li>
          <a href="sa">
            <span className="span1">
              <FontAwesomeIcon
                icon={faUser}
                className="fai"
                style={{ fontSize: "20px", color: "rgb(20, 247, 247)" }}
              />
              Portfolio
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:anveshsadam3@gmail.com">
            <span className="span1">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fai"
                style={{
                  fontSize: "20px",
                  color: "rgb(20, 247, 247)",
                  zindex: "1000",
                }}
              />
              Email
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/find-me1">
            <span className="span1">
              <FontAwesomeIcon
                icon={faGithub}
                className="fai"
                style={{ fontSize: "20px", color: "rgb(20, 247, 247)" }}
              />
              Github
            </span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/9110307224">
            <span className="span1">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="fai"
                style={{ fontSize: "20px", color: "rgb(20, 247, 247)" }}
              />
              whatsapp
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anvesh45">
            <span className="span1">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fai"
                style={{ fontSize: "20px", color: "rgb(20, 247, 247)" }}
              />
              Linkedin
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
