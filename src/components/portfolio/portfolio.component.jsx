import React from "react";
import "./portfolio.styles.css";
import PortfolioData from "./portfolio.data";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(PortfolioData);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredItems(PortfolioData);
    } else {
      const filterData = PortfolioData.filter(
        (item) => item.category === category
      );
      setFilteredItems(filterData);
    }
  };

  return (
    <section>
      <div className="container portfolio" id="projects">
        <div className="heading">
          <h3>My Projects</h3>
          <p className="projects_summary">
            Explore my portfolio featuring dynamic projects spanning React.js,
            Vanilla JavaScript, PHP, and MERN stack, highlighting versatile
            expertise across a spectrum of web development technologies.
          </p>
        </div>
        <div className="filter_nav">
          {["All", "React JS", "MERN", "Vanilla JS"].map((category) => (
            <div
              key={category}
              className={`filter_option 
              ${activeFilter === category ? "active" : ""}`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="filter_result">
          {filteredItems.map((item) => {
            return (
              <div key={item.id} className="filter_item">
                <div className="img">
                  <a href={item.link} target="_blank">
                    <img src={item.image} alt="" />
                  </a>
                </div>
                <span>{item.category}</span>
                <a href={item.link} target="_blank">
                  <h4>{item.title}</h4>
                </a>
                <p>
                  <b>Features : </b>
                  <span className="project_features">{item.features}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ruler">
        <hr />
      </div>
    </section>
  );
};

export default Portfolio;
