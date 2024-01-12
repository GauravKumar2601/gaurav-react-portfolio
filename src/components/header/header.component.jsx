import React from "react";
import Navbar from "./nav.component";
import profile from "../../assets/images/profile.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "UI/UX Developer",
      "Front End Developer",
      "React Developer",
      "Programmer",
      "Full Stack Developer",
    ],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 60,
  });
  return (
    <header>
      <Navbar />
      <hr />
      <div className="container" id="home">
        <div className="main">
          <div className="text-content">
            <span className="main"> </span>
            <span className="main">Hi, I am a</span>
            <span>{text}</span>
            <span style={{ color: "red" }}>
              <Cursor cursorStyle=">" />
            </span>

            <p>
              I, Gaurav Kumar, am a versatile web developer proficient in a wide
              array of technologies and frameworks with a passion for crafting
              exceptional web experiences, I specialize in creating responsive
              and user-friendly websites and applications.
            </p>
            <a
              href="https://drive.google.com/file/d/1oOKw9gLA9ER3evFe8S-9TJDL3wQwCnKI/view?usp=sharing"
              target="_blank"
              className="mainBtn"
            >
              Download Resume
            </a>
          </div>
          <div className="main-img">
            <div className="img">
              <img src={profile} alt="" />
            </div>
            <SocialIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const SocialIcon = () => {
  return (
    <div className="social-icon">
      <a href="https://www.linkedin.com/in/gauravkumar0126/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/GauravKumar2601" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.instagram.com/gauravartspace/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};
