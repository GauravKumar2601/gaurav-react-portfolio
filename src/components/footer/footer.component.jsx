import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer>
      <div className=" footer_part">
        <div className="logo">
          <span>
            <b>G</b>aurav Kumar
          </span>
        </div>
        <div className="menus">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#services">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social_links">
          <a
            href="https://www.linkedin.com/in/gauravkumar0126/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/GauravKumar2601" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/gauravartspace/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <div className="footer">
        <p>
          © 2023 <span>Gaurav Kumar</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
