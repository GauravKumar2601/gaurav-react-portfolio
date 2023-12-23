import React from "react";
import "./services.styles.css";

const Services = () => {
  return (
    <section className="container services" id="services">
      <div className="heading">
        <h3>Skills</h3>
        <p>
          Proficient in a diverse range of technologies and frameworks,
          including React.js, Vanilla JavaScript, PHP, and the MERN stack,
          showcasing a deep understanding and expertise in web development.
        </p>
      </div>
      <div className="services_list">
        {servicedata.map((item) => (
          <div key={item.title} className="item">
            <span className="icon">
              <img src={item.icon} alt="" />
            </span>
            <div className="skill_detail">
              <h4 style={{ margin: "1rem 0" }}>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

//Services data
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";

const servicedata = [
  {
    icon: icon1,
    title: "Front End",
    text: "HTML, CSS, Javascript, React.js, Tailwind CSS, Bootstrap, Context API, Redux Toolkit",
  },
  {
    icon: icon2,
    title: "Backend",
    text: "Javascript, Node.js, Express.js, MongoDB, MySQL, PHP",
  },
  {
    icon: icon3,
    title: "Others",
    text: "Git, EJS, Appwrite, API Development, Java, C++, Figma",
  },
];
