import React, { useState } from "react";
import logo from "../Images/logo.png";
import "./MyNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faShoppingCart,
  faCircleHalfStroke,
  faCode,
  faCartShopping,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const MyNav = ({ toggleBottom }) => {
  /*Mobile Menu Toggling */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    toggleBottom();
  };

  /* Tutorial Main Menu Toggling*/
  const [tutorialMenuOpen, setTutorialMenuOpen] = useState(false);
  const handleTutorialButtonClick = (e) => {
    e.stopPropagation();
    setTutorialMenuOpen(!tutorialMenuOpen);
    if (exerciseMenuOpen === true) {
      setExerciseMenuOpen(!exerciseMenuOpen);
    }
    if (certifiedMenuOpen === true) {
      setCertifiedMenuOpen(!certifiedMenuOpen);
    }
    toggleBottom();
  };

  /* Exercise Main Menu Toggling*/
  const [exerciseMenuOpen, setExerciseMenuOpen] = useState(false);
  const handleExerciseMenuOpen = (e) => {
    e.stopPropagation();
    setExerciseMenuOpen(!exerciseMenuOpen);
    if (tutorialMenuOpen === true) {
      setTutorialMenuOpen(!tutorialMenuOpen);
    }
    if (certifiedMenuOpen === true) {
      setCertifiedMenuOpen(!certifiedMenuOpen);
    }
    toggleBottom();
  };

  /* Certified Main Menu Toggling*/
  const [certifiedMenuOpen, setCertifiedMenuOpen] = useState(false);
  const handleCertifiedMenu = (e) => {
    e.stopPropagation();
    setCertifiedMenuOpen(!certifiedMenuOpen);
    if (tutorialMenuOpen === true) {
      setTutorialMenuOpen(!tutorialMenuOpen);
    }
    if (exerciseMenuOpen === true) {
      setExerciseMenuOpen(!exerciseMenuOpen);
    }
    toggleBottom();
  };

  /* Tutorial Mobile Menu Toggling*/
  const [tutorialMenuBackground, setTutorialMenuBackground] = useState(false);
  const [tutorialMobileMenu, setTutorialMobileMenuOpen] = useState(false);
  const handleMobileTutorialMenu = () => {
    setTutorialMobileMenuOpen(!tutorialMobileMenu);
    setTutorialMenuBackground(!tutorialMenuBackground);
    toggleMenuActive();
  };

  const toggleMenuActive = () => {
    const tutorialMobile = document.getElementById("tutorial-menu-mobile");
    tutorialMobile.classList.toggle("mobile-menu-Active");
  };

  /* Exercise Mobile Menu Toggling*/
  const [exerciseMenuBackground, setexerciseMenuBackground] = useState(false);
  const [exerciseMobileMenu, setExerciseMobileMenuOpen] = useState(false);
  const handleMobileExerciseMenu = () => {
    setExerciseMobileMenuOpen(!exerciseMobileMenu);
    setexerciseMenuBackground(!exerciseMenuBackground);
    toggleExerciseMenuActive();
  };

  const toggleExerciseMenuActive = () => {
    const exerciseMobile = document.getElementById("exercise-menu-mobile");
    exerciseMobile.classList.toggle("mobile-menu-Active");
  };

  /* Certified Mobile Menu Toggling*/
  const [certifiedMobileMenuOpen, setCertifiedMobileMenuOpen] = useState(false);
  const [certifiedMenuBackground, setcertifiedMenuBackground] = useState(false);
  const handleMobileCertifiedMenu = () => {
    setCertifiedMobileMenuOpen(!certifiedMobileMenuOpen);
    setcertifiedMenuBackground(!certifiedMenuBackground);
    toggleCertifiedMenuActive();
  };

  const toggleCertifiedMenuActive = () => {
    const certifiedMobile = document.getElementById("certified-menu-mobile");
    certifiedMobile.classList.toggle("mobile-menu-Active");
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <header>
        <div className="header-left">
          <a href="/">
            <div className="w3-logo">
              <img src={logo} alt="Logo"></img>
            </div>
          </a>
          <div className="menu-btn" id="mobile-menu" onClick={toggleMobileMenu}>
            Menu
            <FontAwesomeIcon icon={faCaretDown} className="fa-logo" />
          </div>
          <div
            href="#Tutorials"
            className="menu-btn"
            id="tutorial-btn"
            onClick={handleTutorialButtonClick}
          >
            Tutorials
            <FontAwesomeIcon icon={faCaretDown} className="fa-logo" />
          </div>
          <div
            href="#Exercises"
            className="menu-btn"
            id="reference-btn"
            onClick={handleExerciseMenuOpen}
          >
            Exercises
            <FontAwesomeIcon icon={faCaretDown} className="fa-logo" />
          </div>
          <div
            href="#Certified"
            className="menu-btn"
            id="exercise-btn"
            onClick={handleCertifiedMenu}
          >
            Get Certified
            <FontAwesomeIcon icon={faCaretDown} className="fa-logo" />
          </div>
          <div href="#Services" className="menu-btn" id="service-btn">
            Services
            <FontAwesomeIcon icon={faCaretDown} className="fa-logo" />
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="   Search..."
              className="search"
              id="search-b"
            ></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
          </div>
          <div className="toggleLightDark btn">
            <FontAwesomeIcon icon={faCircleHalfStroke} />
          </div>
        </div>
        <div className="header-right">
          <div className="buttons">
            <div
              href="#Spaces"
              className="btn btn-link bg-white"
              id="space-btn"
            >
              <FontAwesomeIcon icon={faCode} className="icon" />
              Spaces
            </div>
            <div
              href="#Certificates"
              className="btn btn-link bg-white"
              id="certificate-btn"
            >
              <FontAwesomeIcon icon={faCartShopping} className="icon" />
              Certificates
            </div>
          </div>
          <div
            onClick={() => {
              window.location.href = "/login";
            }}
            className="btn btn-link bg-green"
            id="login-btn"
          >
            Login
          </div>
        </div>
      </header>
      <div
        className={`mobile-menu-container ${mobileMenuOpen ? "open" : ""}`}
        id="mobile-menu-nav"
      >
        <div className="mobile-menu-close">
          <button onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faXmark} className="close-btn" />
          </button>
        </div>
        <ul>
          <a
            href="#Tutorials"
            className={`menu-btn-mobile ${
              tutorialMenuOpen ? "mobile-menu-Active" : ""
            }`}
            id="tutorial-menuLink-mobile"
            onClick={handleMobileTutorialMenu}
            style={{
              background: tutorialMenuBackground ? "transparent" : "white",
              color: tutorialMenuBackground ? "white" : "black",
            }}
          >
            Tutorials
            <FontAwesomeIcon
              icon={faCaretDown}
              className="fa-logo"
              style={{
                color: tutorialMenuBackground ? "white" : "black",
              }}
            />
            <div
              className="nested-tutorial-mobile-container"
              id="tutorial-menu-mobile"
              onClick={stopPropagation}
            >
              <input
                type="text"
                placeholder="  Filter..."
                className="search"
                id="search-ba"
                onClick={(e) => e.stopPropagation()}
              ></input>
              <h1>HTML and CSS</h1>
              <ul>
                <a href="/html">Learn HTML</a>
                <a href="#HTML">Learn CSS</a>
                <a href="#HTML">Learn RWD</a>
                <a href="#HTML">Learn Bootstrap</a>
                <a href="#HTML">Learn W3.CSS</a>
                <a href="#HTML">Learn Sass</a>
                <a href="#HTML">Learn Colors</a>
                <a href="#HTML">Learn Icons</a>
                <h1>JavaScript</h1>
                <a href="#HTML">Learn JavaScript</a>
                <a href="#HTML">Learn React</a>
                <a href="#HTML">Learn JQuery</a>
                <a href="#HTML">Learn Vue</a>
                <a href="#HTML">Learn AngularJS</a>
                <a href="#HTML">Learn JSON</a>
                <a href="#HTML">Learn AJAX</a>
                <a href="#HTML">Learn AppML</a>
                <h1>Backend</h1>
                <a href="#HTML">Learn Python</a>
                <a href="#HTML">Learn SQL</a>
                <a href="#HTML">Learn MySQL</a>
                <a href="#HTML">Learn PHP</a>
                <a href="#HTML">Learn JAVA</a>
                <a href="#HTML">Learn C</a>
                <a href="#HTML">Learn C++</a>
                <a href="#HTML">Learn C#</a>
                <a href="#HTML">Learn R</a>
                <a href="#HTML">Learn Kotlin</a>
                <a href="#HTML">Learn Go</a>
                <a href="#HTML">Learn DJango</a>
                <a href="#HTML">Learn PostgreSQL</a>
                <a href="#HTML">Learn TypeScript</a>
                <a href="#HTML">Learn ASP</a>
              </ul>
            </div>
          </a>
          <a
            href="#Exercises"
            className={`menu-btn-mobile ${
              exerciseMenuOpen ? "mobile-menu-Active" : ""
            }`}
            onClick={handleMobileExerciseMenu}
            style={{
              background: exerciseMenuBackground ? "transparent" : "white",
              color: exerciseMenuBackground ? "white" : "black",
            }}
          >
            Exercises
            <FontAwesomeIcon
              icon={faCaretDown}
              className="fa-logo"
              style={{
                color: exerciseMenuBackground ? "white" : "black",
              }}
            />
            <div
              className="nested-tutorial-mobile-container"
              id="exercise-menu-mobile"
            >
              <input
                type="text"
                placeholder="  Filter..."
                className="search"
                id="search-ba"
                onClick={(e) => e.stopPropagation()}
              ></input>
              <h1>HTML and CSS</h1>
              <ul>
                <a href="#HTML">HTML</a>
                <a href="#HTML">CSS</a>
                <a href="#HTML">Bootstrap</a>
                <h1>JavaScript</h1>
                <a href="#HTML">JavaScript</a>
                <a href="#HTML">React</a>
                <a href="#HTML">JQuery</a>
                <a href="#HTML">Vue</a>
                <h1>Backend</h1>
                <a href="#HTML">Learn Python</a>
                <a href="#HTML">Learn SQL</a>
                <a href="#HTML">Learn MySQL</a>
                <a href="#HTML">Learn PHP</a>
                <a href="#HTML">Learn JAVA</a>
                <a href="#HTML">Learn C</a>
                <a href="#HTML">Learn C++</a>
                <a href="#HTML">Learn C#</a>
                <a href="#HTML">Learn R</a>
                <a href="#HTML">Learn Kotlin</a>
                <a href="#HTML">Learn Go</a>
                <a href="#HTML">Learn DJango</a>
                <a href="#HTML">Learn PostgreSQL</a>
                <a href="#HTML">Learn TypeScript</a>
                <a href="#HTML">Learn Git</a>
                <div className="nested-nav-item data-analytic-nav">
                  <h2>Data Analytics</h2>
                  <a href="#HTML">NumPy</a>
                  <a href="#HTML">Pandas</a>
                  <a href="#HTML">SciPy</a>
                </div>
              </ul>
            </div>
          </a>
          <a
            href="#Services"
            className={`menu-btn-mobile ${
              certifiedMenuOpen ? "mobile-menu-Active" : ""
            }`}
            onClick={handleMobileCertifiedMenu}
            style={{
              background: certifiedMenuBackground ? "transparent" : "white",
              color: certifiedMenuBackground ? "white" : "black",
            }}
          >
            Get Certified
            <FontAwesomeIcon
              icon={faCaretDown}
              className="fa-logo"
              style={{
                color: certifiedMenuBackground ? "white" : "black",
              }}
            />
            <div
              className="nested-tutorial-mobile-container"
              id="certified-menu-mobile"
              onClick={stopPropagation}
            >
              <input
                type="text"
                placeholder="  Filter..."
                className="search"
                id="search-ba"
                onClick={(e) => e.stopPropagation()}
              ></input>
              <h1>HTML and CSS</h1>
              <ul>
                <a href="#HTML">HTML</a>
                <a href="#HTML">CSS</a>
                <a href="#HTML">Bootstrap</a>

                <h1>JavaScript</h1>
                <a href="#HTML"> JavaScript</a>
                <a href="#HTML"> React</a>
                <a href="#HTML"> JQuery</a>
                <a href="#HTML"> Vue</a>

                <h1>Backend</h1>
                <a href="#HTML"> Python</a>
                <a href="#HTML"> SQL</a>
                <a href="#HTML"> MySQL</a>
                <a href="#HTML"> PHP</a>
                <a href="#HTML"> JAVA</a>
                <a href="#HTML"> C</a>
                <a href="#HTML"> C++</a>
                <a href="#HTML"> C#</a>
                <a href="#HTML"> R</a>
                <a href="#HTML"> Kotlin</a>
                <a href="#HTML"> Go</a>
                <a href="#HTML"> DJango</a>
                <a href="#HTML"> PostgreSQL</a>
                <a href="#HTML"> TypeScript</a>
                <a href="#HTML"> ASP</a>
              </ul>
            </div>
          </a>
          <a href="#Services" className="menu-btn-mobile">
            Services
            <FontAwesomeIcon icon={faCaretDown} className="fa-logo" />
          </a>
          <a href="#Spaces" className="menu-btn-mobile">
            Spaces
            <FontAwesomeIcon icon={faCode} className="fa-logo" />
          </a>
          <a href="#Certificates" className="menu-btn-mobile">
            Certificates
            <FontAwesomeIcon icon={faShoppingCart} className="fa-logo" />
          </a>
        </ul>
      </div>
      <div
        className={`nested-tutorial ${tutorialMenuOpen ? "open" : ""}`}
        id="nested-tutorial-id"
        onClick={handleTutorialButtonClick}
      >
        <div className="nested-tutorial-close">
          <button>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="nested-nav-container-content" onClick={stopPropagation}>
          <h1>Tutorials</h1>
          <div
            className="nested-nav-container-content-data"
            onClick={stopPropagation}
          >
            <div className="nested-nav-item">
              <h2>HTML and CSS</h2>
              <a href="/html">Learn HTML</a>
              <a href="#HTML">Learn CSS</a>
              <a href="#HTML">Learn RWD</a>
              <a href="#HTML">Learn Bootstrap</a>
              <a href="#HTML">Learn W3.CSS</a>
              <a href="#HTML">Learn Sass</a>
              <a href="#HTML">Learn Colors</a>
              <a href="#HTML">Learn Icons</a>
            </div>
            <div className="nested-nav-item">
              <h2>JavaScript</h2>
              <a href="#HTML">Learn JavaScript</a>
              <a href="#HTML">Learn React</a>
              <a href="#HTML">Learn JQuery</a>
              <a href="#HTML">Learn Vue</a>
              <a href="#HTML">Learn AngularJS</a>
              <a href="#HTML">Learn JSON</a>
              <a href="#HTML">Learn AJAX</a>
              <a href="#HTML">Learn AppML</a>
            </div>
            <div className="nested-nav-item">
              <h2>Backend</h2>
              <a href="#HTML">Learn Python</a>
              <a href="#HTML">Learn SQL</a>
              <a href="#HTML">Learn MySQL</a>
              <a href="#HTML">Learn PHP</a>
              <a href="#HTML">Learn JAVA</a>
              <a href="#HTML">Learn C</a>
              <a href="#HTML">Learn C++</a>
              <a href="#HTML">Learn C#</a>
              <a href="#HTML">Learn R</a>
              <a href="#HTML">Learn Kotlin</a>
              <a href="#HTML">Learn Go</a>
              <a href="#HTML">Learn DJango</a>
              <a href="#HTML">Learn PostgreSQL</a>
              <a href="#HTML">Learn TypeScript</a>
              <a href="#HTML">Learn ASP</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`nested-exercise ${exerciseMenuOpen ? "open" : ""}`}
        id="nested-exercise-id"
        onClick={handleExerciseMenuOpen}
      >
        <div className="nested-tutorial-close">
          <button>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="nested-nav-container-content" onClick={stopPropagation}>
          <h1>Exercises</h1>
          <div
            className="nested-nav-container-content-data"
            onClick={stopPropagation}
          >
            <div className="nested-nav-item">
              <h2>HTML and CSS</h2>
              <a href="#HTML">HTML</a>
              <a href="#HTML">CSS</a>
              <a href="#HTML">Bootstrap</a>
            </div>
            <div className="nested-nav-item">
              <h2>JavaScript</h2>
              <a href="#HTML">JavaScript</a>
              <a href="#HTML">React</a>
              <a href="#HTML">JQuery</a>
              <a href="#HTML">Vue</a>
            </div>
            <div className="nested-nav-item">
              <h2>Backend</h2>
              <a href="#HTML">Python</a>
              <a href="#HTML">SQL</a>
              <a href="#HTML">MySQL</a>
              <a href="#HTML">PHP</a>
              <a href="#HTML">JAVA</a>
              <a href="#HTML">C</a>
              <a href="#HTML">C++</a>
              <a href="#HTML">C#</a>
              <a href="#HTML">R</a>
              <a href="#HTML">Kotlin</a>
              <a href="#HTML">Go</a>
              <a href="#HTML">DJango</a>
              <a href="#HTML">PostgreSQL</a>
              <a href="#HTML">TypeScript</a>
              <a href="#HTML">Git</a>
            </div>
            <div className="nested-nav-item data-analytic-nav">
              <h2>Data Analytics</h2>
              <a href="#HTML">NumPy</a>
              <a href="#HTML">Pandas</a>
              <a href="#HTML">SciPy</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`nested-certified ${certifiedMenuOpen ? "open" : ""}`}
        id="nested-certified-id"
        onClick={handleCertifiedMenu}
      >
        <div className="nested-tutorial-close">
          <button>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="nested-nav-container-content" onClick={stopPropagation}>
          <h1>Get Certified</h1>
          <div
            className="nested-nav-container-content-data"
            onClick={stopPropagation}
          >
            <div className="nested-nav-item">
              <h2>HTML and CSS</h2>
              <a href="#HTML">HTML</a>
              <a href="#HTML">CSS</a>
              <a href="#HTML">Bootstrap</a>
            </div>
            <div className="nested-nav-item">
              <h2>JavaScript</h2>
              <a href="#HTML">JavaScript</a>
              <a href="#HTML">React</a>
              <a href="#HTML">JQuery</a>
              <a href="#HTML">Vue</a>
            </div>
            <div className="nested-nav-item">
              <h2>Backend</h2>
              <a href="#HTML">Python</a>
              <a href="#HTML">SQL</a>
              <a href="#HTML">MySQL</a>
              <a href="#HTML">PHP</a>
              <a href="#HTML">JAVA</a>
              <a href="#HTML">C</a>
              <a href="#HTML">C++</a>
              <a href="#HTML">C#</a>
              <a href="#HTML">R</a>
              <a href="#HTML">Kotlin</a>
              <a href="#HTML">Go</a>
              <a href="#HTML">DJango</a>
              <a href="#HTML">PostgreSQL</a>
              <a href="#HTML">TypeScript</a>
              <a href="#HTML">Git</a>
            </div>
            <div className="nested-nav-item data-analytic-nav">
              <h2>Data Analytics</h2>
              <a href="#HTML">NumPy</a>
              <a href="#HTML">Pandas</a>
              <a href="#HTML">SciPy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
