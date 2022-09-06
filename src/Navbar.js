import React from "react"
import "./Navbar.css"
import sidebar from './assets/side-bar.png';
import sideblob from './assets/side-blob.png';
import judylogo from './assets/judy-zheng.svg';

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <img src={sidebar} className="sidebar" alt="sidebar-orange"/>
    <img src={sideblob} className="sideblob" alt="sideblob-orange"/>
    <img src={judylogo} className="judylogo" alt="judy" />
  </nav>
)
export default Navbar