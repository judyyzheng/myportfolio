import React from "react"
import "./ArtPortfolio.css"
import ArtPortfolioLogo from '../assets/art-portfolio/Art-Portfolio.svg';

const ArtPortfolio = () => (
  <div className="ArtPortfolio">
    <img src={ArtPortfolioLogo} className="ArtPortfolio-logo" alt="ArtPortfolio" />
    <div className="ArtPortfolio-text">
      <div className="ArtPortfolio-project">
        <ul className="project">
          <li>From</li>
          <li>2016 - Present</li>
        </ul>
        <ul className="project">
          <li>Achievements</li>
          <li>$10k+ sold commissions, prints, original work.</li>
        </ul>
        <ul className="project">
          <li>Organization</li>
          <li>Alberta University of Arts</li>
        </ul>
      </div>
    </div>
  </div>
)

export default ArtPortfolio;