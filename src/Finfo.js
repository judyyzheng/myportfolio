import React from "react"
import "./Finfo.css"
import frame1 from './assets/finfo/app.gif';
import FinfoLogo from './assets/finfo/finfo-logo.svg';

const Finfo = () => (
  <div className="finfo">
    {/* <img src={finfoBanner} className="finfoBanner" alt="banner-finfo"/>
    <img src={finfoProcess} className="finfoProcess" alt="process-finfo"/> */}
    <img src={FinfoLogo} className="finfo-logo" alt="Finfo" />
    <div className="finfo-text">
      <div className="finfo-title">
        Avocademy Designathon</div>
      <button className="finfo-description">explore this project {">"}</button>
      <div className="finfo-project">
        <ul className="project">
          <li>Time spent</li>
          <li>48 hours</li>
        </ul>
        <ul className="project">
          <li>Group size</li>
          <li>3</li>
        </ul>
        <ul className="project">
          <li>Rank</li>
          <li>Top 5 Finalist</li>
        </ul>
        <ul className="project">
          <li>Organization</li>
          <li>Wilfrid Laurier University</li>
        </ul>
      </div>
    </div>
    <img src={frame1} className="frame" alt="sidebar-orange"/>
  </div>
)

export default Finfo;