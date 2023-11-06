import React from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const LandingPage = () => {
  return (
    <section className="section section-header">
      <div className="section-container">
        <h1>Learn to Code</h1>
        <p>With the world's largest web developer site.</p>
        <div className="section-header-search">
          <input
            type="text"
            placeholder="Search our tutorial's, e.g. HTML"
          ></input>
          <div className="search-icon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={28}
              className="fa-logo"
            />
          </div>
        </div>
        <a href="https://www.w3schools.com/where_to_start.asp">
          Not Sure Where To Begin?
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
      >
        <path
          fill="#D9EEE1"
          fillOpacity="1"
          d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,208C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};
