import React, { useEffect, useState } from "react";
import "../stylesheets/profile.css";

const careers = [
  "Web Devoloper",
  "Web Designer",
  "Freelancer",
  "Frontend Developer",
  "Full Stack Developer",
];
export default function Profile() {
  const [careerText, setCareerText] = useState("");

  useEffect(() => {
    let careerIndex = 0;
    let charachterIndex = 0;
    const updateText = setInterval(() => {
      charachterIndex++;
      const text = `${
        careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
      } ${careers[careerIndex].slice(0, charachterIndex)}`;

      setCareerText(text);

      if (charachterIndex === careers[careerIndex].length) {
        careerIndex++;
        charachterIndex = 0;
      }
      if (careerIndex === careers.length) {
        careerIndex = 0;
      }
    }, 400);
    return () => clearInterval(updateText);
  }, []);
  return (
    <>
      <div className="container">
        <img
          className="profileimage"
          src={process.env.PUBLIC_URL + "/batman3.jpg"}
          alt="batman"
        />
        <h1 className="ph2">
          <span className="spanp1"> I am </span>
          &nbsp;{careerText}
        </h1>
        <div className="skills">
          <h3>Skills:</h3>
          <div className="skill">
            <span style={{ background: "#cea000" }}>Html</span>
            <span style={{ background: "#5ed4f3" }}>Css</span>
            <span style={{ background: "#b55f8c" }}>JavaScript</span>
            <span style={{ background: "#2f74c0" }}>React</span>
            <span style={{ background: "#e94e31" }}>Node.js</span>
            <span style={{ background: "#6d6d6d" }}>PostgreSql</span>
            <span style={{ background: "#c02f2a" }}>Express.js</span>
            <span style={{ background: "#f0c21c" }}>Github</span>
            <span style={{ background: "#009cda" }}>C++</span>
            <span style={{ background: "#5cbb6e" }}>Team work</span>
          </div>
        </div>
      </div>
    </>
  );
}
