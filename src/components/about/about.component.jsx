import React from "react";
import "./about.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faComputer } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="main" id="about">
      <div className="container about">
        <h3>About me</h3>
        <div className="details">
          {/* Education */}
          <div className="education">
            <ul>
              <li>
                <strong>Education</strong>
              </li>
              <li style={{ marginTop: "2rem" }}>
                <FontAwesomeIcon
                  icon={faBook}
                  style={{ marginRight: "10px" }}
                />
                M.Sc. Computer Science
              </li>
              <li>
                <span className="masters">
                  Department of Computer Science, University of Delhi
                </span>
              </li>
              <li style={{ marginTop: "2rem" }}>
                <FontAwesomeIcon
                  icon={faBook}
                  style={{ marginRight: "10px" }}
                />
                B.Sc. Computer Science
              </li>
              <li>
                <span className="bachelors">
                  Rajdhani College, University of Delhi
                </span>
              </li>
            </ul>
          </div>
          {/* Experience */}
          <div className="experience">
            <ul>
              <li>
                <b>Experience</b>
              </li>
              <li style={{ marginTop: "2rem" }}>
                <FontAwesomeIcon
                  icon={faBook}
                  style={{ marginRight: "10px" }}
                />
                Web Development Intern
              </li>
              <li>
                <span className="ducc">Delhi University Computer Center</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
