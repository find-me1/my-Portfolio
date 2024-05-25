import React, { useState } from "react";
import Slider from "./slider.js";
import "../stylesheets/tabs.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("step1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const link1 = ["https://aphasiatherapysession.netlify.app/"];
  const link2 = ["https://agroconnect1-zeta.vercel.app/"];
  const link3 = ["https://purevanillajs1.netlify.app/"];
  const link4 = [
    "https://find-me1.github.io/60-HTML-CSS-JS-projects-HTML5-CSS3-and-vanilla-JavaScript/Weather%20App/index.html",
  ];
  const link5 = [
    "https://find-me1.github.io/60-HTML-CSS-JS-projects-HTML5-CSS3-and-vanilla-JavaScript/English%20Dictionary/index.html",
  ];
  const link6 = [
    "https://find-me1.github.io/60-HTML-CSS-JS-projects-HTML5-CSS3-and-vanilla-JavaScript/Image%20Search%20App/index.html",
  ];
  const images1 = [
    `${process.env.PUBLIC_URL}/aphasia.jpg`,
    `${process.env.PUBLIC_URL}/aphasia2.png`,
    `${process.env.PUBLIC_URL}/aphasia3.png`,
    `${process.env.PUBLIC_URL}/aphasia4.png`,
    `${process.env.PUBLIC_URL}/aphasia5.png`,
    `${process.env.PUBLIC_URL}/aphasia6.png`,
  ];
  const images2 = [
    `${process.env.PUBLIC_URL}/agroconnect.png`,
    `${process.env.PUBLIC_URL}/agroconnect2.png`,
    `${process.env.PUBLIC_URL}/agroconnect3.png`,
    `${process.env.PUBLIC_URL}/agroconnect4.png`,
    `${process.env.PUBLIC_URL}/agroconnect5.png`,
    `${process.env.PUBLIC_URL}/agroconnect6.png`,
  ];
  const images3 = [
    `${process.env.PUBLIC_URL}/elfester1.png`,
    `${process.env.PUBLIC_URL}/elfster2.png`,
    `${process.env.PUBLIC_URL}/elfster3.png`,
  ];
  const images4 = [
    `${process.env.PUBLIC_URL}/weatherapp.png`,
    `${process.env.PUBLIC_URL}/weatherapp2.png`,
    `${process.env.PUBLIC_URL}/weatherapp3.png`,
  ];
  const images5 = [
    `${process.env.PUBLIC_URL}/englishdictionary.png`,
    `${process.env.PUBLIC_URL}/englishdictionary2.png`,
    `${process.env.PUBLIC_URL}/englishdictionary3.png`,
  ];
  const images6 = [
    `${process.env.PUBLIC_URL}/imagesearchapp.png`,
    `${process.env.PUBLIC_URL}/imagesearchapp2.png`,
    `${process.env.PUBLIC_URL}/imagesearchapp3.png`,
  ];

  return (
    <div className="section-center">
      <img
        className="image"
        src={process.env.PUBLIC_URL + "/luffy2.jpeg"}
        alt="luffy"
      />
      <div>
        <div className="tabs">
          <div className="btn-container">
            <button
              className={`button ${activeTab === "step1" ? "live" : ""}`}
              onClick={() => handleTabClick("step1")}
              type="button"
              data-id="step1"
            >
              About Me
            </button>
            <button
              className={`button ${activeTab === "step2" ? "live" : ""}`}
              onClick={() => handleTabClick("step2")}
              type="button"
              data-id="step2"
            >
              My Projects
            </button>
            <button
              className={`button ${activeTab === "step3" ? "live" : ""}`}
              onClick={() => handleTabClick("step3")}
              type="button"
              data-id="step3"
            >
              Quick look at my projects
            </button>
            <button
              className={`button ${activeTab === "step4" ? "live" : ""}`}
              type="button"
              onClick={() => handleTabClick("step4")}
              data-id="step4"
            >
              Let's Connect
            </button>
          </div>
          <div className="tabs-content">
            <div
              className={`content ${activeTab === "step1" ? "live" : ""}`}
              id="step1"
            >
              <p className="contentp1">
                Hi, I'm Anvesh, a final-year Computer Science and Engineering
                student at IIT Palakkad. I live in Hyderabad, I am deeply
                passionate about web development and coding. I spend my days
                crafting interactive web experiences and exploring the latest
                technologies in the field. Beyond coding, I have a keen interest
                in UI/UX design and am always on the lookout for opportunities
                to combine functionality with aesthetics. In my free time,
                you'll often find me delving into various web pages, learning
                new techniques, and refining my skills. I believe in continuous
                learning and growth, and I'm excited about the endless
                possibilities that the world of web development offers.
              </p>
            </div>
            <div
              className={`content ${activeTab === "step2" ? "live" : ""}`}
              id="step2"
            >
              <span className="projspan1">
                <img
                  className="image1"
                  src={process.env.PUBLIC_URL + "/aphasia.jpg"}
                  alt="aphasia"
                />
                <span>
                  <h1>e-Therapy Platform for Aphasia Patients - React.js</h1>
                  <p className="contentp1">
                    • Developed an innovative e-Therapy platform with React.js
                    for &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;intuitive interfaces,
                    aiding Aphasia patients in language &nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp;rehabilitation.
                    <br />• Listening and speaking exercises, each with their
                    own datasets,&nbsp; &nbsp; &nbsp;&nbsp;are used in therapy
                    to offer users various questions. <br />
                    • Create day-wise tasks and develop an interactive website
                    that &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;speaks a question
                    every 60 seconds if the patient is inactive. <br />•
                    Implemented speech recognition for interactive therapy
                    sessions.
                  </p>
                </span>
              </span>
              <span className="projspan1">
                <img
                  className="image1"
                  src={process.env.PUBLIC_URL + "/agroconnect.png"}
                  alt="aphasia"
                />
                <span>
                  <h1>Agro Connect - PostgreSql , React.js , Node.js</h1>
                  <p className="contentp1">
                    • Developed a digital marketplace named Agro Connect,
                    leveraging&nbsp; &nbsp;&nbsp;PostgreSQL for the database
                    backend.
                    <br />
                    • Utilized React.js for a user-friendly interface for buyers
                    and &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;farmers.
                    <br />
                    • Integrated Node.js to facilitate equipment sharing among
                    farmers &nbsp;&nbsp;and Products for customers to buy.
                    <br />• Implemented robust querying and nodemon for
                    efficient &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp; development.
                  </p>
                </span>
              </span>
              <span className="projspan1">
                <img
                  className="image1"
                  src={process.env.PUBLIC_URL + "/elfester1.png"}
                  style={{}}
                  alt="aphasia"
                />
                <span>
                  <h1>Elfster Clone - Pure Vanilla Js</h1>
                  <p className="contentp1">
                    • Created an Elfster Clone.
                    <br />
                    • Technologies used: HTML, CSS, JavaScript (No CSS framework
                    or &nbsp; &nbsp; JavaScript library).
                    <br />
                    • Developed to enhance skills in web development.
                    <br />
                    • Focused on building from scratch to understand core
                    concepts.
                    <br />• Aimed to improve proficiency in front-end
                    technologies.
                  </p>
                </span>
              </span>
              <span className="projspan1">
                <img
                  className="image1"
                  src={process.env.PUBLIC_URL + "/weatherapp.png"}
                  style={{}}
                  alt="aphasia"
                />
                <span>
                  <h1>Weather App - Pure Vanilla Js</h1>
                  <p className="contentp1">
                    • Created a Weather App.
                    <br />
                    • Technologies used: HTML, CSS, JavaScript (No CSS framework
                    or &nbsp; &nbsp; JavaScript library).
                    <br />
                    • Developed to enhance skills in web development.
                    <br />
                    • Focused on building from scratch to understand core
                    concepts.
                    <br />• Aimed to improve proficiency in front-end
                    technologies.
                  </p>
                </span>
              </span>
              <span className="projspan1">
                <img
                  className="image1"
                  src={process.env.PUBLIC_URL + "/imagesearchapp.png"}
                  alt="imagesearchapp"
                />
                <span>
                  <h1>Image Search App - Pure Vanilla Js</h1>
                  <p className="contentp1">
                    • Created an Image Search App.
                    <br />
                    • Technologies used: HTML, CSS, JavaScript (No CSS framework
                    or &nbsp; &nbsp; JavaScript library).
                    <br />
                    • Developed to enhance skills in web development.
                    <br />
                    • Focused on building from scratch to understand core
                    concepts.
                    <br />• Aimed to improve proficiency in front-end
                    technologies.
                  </p>
                </span>
              </span>
              <span className="projspan1">
                <img
                  className="image1"
                  src={process.env.PUBLIC_URL + "/englishdictionary.png"}
                  alt="englishdictionary"
                />
                <span>
                  <h1>English Dictionary - Pure Vanilla Js</h1>
                  <p className="contentp1">
                    • Created an English Dictionary.
                    <br />
                    • Technologies used: HTML, CSS, JavaScript (No CSS framework
                    or &nbsp; &nbsp; JavaScript library).
                    <br />
                    • Developed to enhance skills in web development.
                    <br />
                    • Focused on building from scratch to understand core
                    concepts.
                    <br />• Aimed to improve proficiency in front-end
                    technologies.
                  </p>
                </span>
              </span>
            </div>
            <div
              className={`content ${activeTab === "step3" ? "live" : ""}`}
              id="step3"
            >
              <span className="sliderspan1">
                <Slider images={images1} link={link1} />
                <Slider images={images2} link={link2} />
                <Slider images={images3} link={link3} />
                <Slider images={images4} link={link4} />
                <Slider images={images5} link={link5} />
                <Slider images={images6} link={link6} />
              </span>
            </div>
            <div
              className={`content ${activeTab === "step4" ? "live" : ""}`}
              id="step4"
            >
              <div className="iframe-container">
                <span className="step4span">
                  <img
                    className="image3"
                    src={process.env.PUBLIC_URL + "/join.jpg"}
                    alt="batman"
                  />
                  <span className="step5span">
                    <p class="text">
                      "Alone we can do so little; together we can do so much."
                    </p>
                    <h4 class="username">- Helen Keller.</h4>
                  </span>
                </span>
                <a
                  className="alink"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScCWKtiFfwtnWq19LVmY2KFMY-7iXLs_7pxbyUCRwbsxgB_hw/viewform?usp=sf_link"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
