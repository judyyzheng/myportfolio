import React from "react"
import "./Haven.css"
import frame1 from './assets/haven/frame1.png';
import frame2 from './assets/haven/frame2.png';
import frame3 from './assets/haven/frame3.png';
import frame4 from './assets/haven/frame4.png';
import HavenLogo from './assets/haven/HavenLogo.svg';
import frame5 from './assets/haven/frame5.png';
import frame6 from './assets/haven/frame6.png';
import frame7 from './assets/haven/frame7.png';
import frame8 from './assets/haven/frame8.png';
import HavenBanner from './assets/haven/Haven-Banner.png';
import HavenProcess from './assets/haven/Haven-Design.png';

const Haven = () => (
  <div className="haven">
    {/* <img src={HavenBanner} className="HavenBanner" alt="banner-haven"/>
    <img src={HavenProcess} className="HavenProcess" alt="process-haven"/> */}
    <img src={HavenLogo} className="haven-logo" alt="HavenLogo" />
    <div className="haven-text">
      <div className="haven-title">
        <b>Haven</b> | UXL Designathon</div>
      {/* <button className="haven-description">explore this project {">"}</button> */}
      <div className="haven-project">
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
    <img src={frame1} className="frame1" alt="sidebar-orange"/>
    <img src={frame2} className="frame2" alt="sideblob-orange"/>
    <img src={frame3} className="frame3" alt="judy" />
    <img src={frame4} className="frame4" alt="judy" />
    {/* <img src={frame5} className="frame5" alt="judy" />
    <img src={frame6} className="frame6" alt="judy" />
    <img src={frame7} className="frame7" alt="judy" />
    <img src={frame8} className="frame8" alt="judy" /> */}
  </div>
)

export default Haven;