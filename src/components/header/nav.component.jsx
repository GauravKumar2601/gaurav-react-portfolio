import React from "react";
import "./header.styles.css";
import logo from "../../assets/images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  // JavaScript for smooth scrolling
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <span>
            <img src={logo} alt="" />
          </span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#services">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>

            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a
                href="https://github.com/GauravKumar2601"
                target="_blank"
                className="mainBtn github"
              >
                <span>
                  <FontAwesomeIcon className="github_icon" icon={faGithub} />
                  Github
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
