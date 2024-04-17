import React, { useContext } from "react";
import GithubLogo from "../../assests/github.svg";
import LinkedInLogo from "../../assests/linkedin-in.svg";
import "./hero.css";
import { DataContext } from "../../context/DataContext";

function Hero() {
  const { content, theme } = useContext(DataContext);

  return (
    <div
      className={`hero-container ${
        theme === "dark" ? "hero-container-dark" : ""
      }`}
    >
      <div className="left-section">
        <p className={`hero-name ${theme === "dark" ? "hero-name-dark" : ""}`}>
          {content.aboutSection.name}
        </p>
        <h1 className={`hero-h1 ${theme === "dark" ? "hero-h1-dark" : ""}`}>
          {content.title}
        </h1>
        <p
          className={`left-section-info ${
            theme === "dark" ? "left-section-info-dark" : ""
          }`}
        >
          {content.description}
        </p>
        <div className="button-container-hero">
          <button
            className={`hire-button ${
              theme === "dark" ? "hire-button-dark" : ""
            }`}
          >
            {content.headerData.navigationLinks[2]}
          </button>

          <a href="https://github.com/yagmurrb" target="_blank">
            <button
              className={`github-button ${
                theme === "dark" ? "github-button-dark" : ""
              }`}
            >
              <img src={GithubLogo} alt="Github Logo" />
              Github
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/yagmur-beyza-caglar-797042189/"
            target="_blank"
          >
            <button
              className={`linkedIn-button ${
                theme === "dark" ? "linkedIn-button-dark" : ""
              }`}
            >
              <img src={LinkedInLogo} alt="Linkedin Logo" />
              Linkedin
            </button>
          </a>
        </div>
      </div>
      <div className="right-section">
        <img
          className={`hero-photo ${theme === "dark" ? "hero-photo-dark" : ""}`}
          src="https://picsum.photos/200/300"
        />
      </div>
    </div>
  );
}

export default Hero;
