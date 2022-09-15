import React from "react";
import './Home.css';
import Spotlight from './Spotlight';
import Test from './Test';
import Social from './Social';
import Portrait from './assets/Portrait.png'

import Resume from './resume.pdf';

import { useState } from "react";
import {
    Link,
  } from "react-router-dom";



function Home() {

    const [showed, setShowed] = useState(true);

    return (
        <>
            <div className="padding">
                <Social />
            </div>
            <div className="home-wrapper">
                <div className="introduction">
                    <div className="introduction-text">
                        <div className="hi-im-judy">Hi, I’m Judy -</div>
                        <div className="redirect-links">
                            <button className="art-gallery-link">art gallery {'>'}</button>
                            <button className="ui-portfolio-link">ui portfolio {'>'}</button>
                        </div>
                        <div className="introduction-paragraph">currently in my third year of pursuing a double degree 
                            in Computer Science and Business Administration at the University of Waterloo. 
                            I've always been an artist at heart, and my work has evolved from paper to canvas to screen. 
                            (If you’re interested in a little passion project feel free to check out my art gallery!)
                            I am logical, inquisitive and enjoy finding simple solutions to complicated problems.
                        </div>
                    </div>
                    <img src={Portrait} className="portrait" alt="my-portrait"/>
                </div>
                <div className="sections">
                    <button className="about">
                        about
                    </button>
                    <button className="work">
                        <Link to='/experience' style={{ textDecoration: 'none', color: 'black'}}>experience</Link>
                    </button>
                    <button className="resume">
                        <a href={Resume} target = "_blank" style={{ textDecoration: 'none', color: 'black'}}>resume</a>
                    </button>
                    <button className="contact">
                        contact
                    </button>
                </div>
                <div style={showed ? { display: "block" } : { display: "none" }} className="blackbox">spotlight
                    {/* <div className="blackbox-img">
                        <img src={Exclude} className="blackbox-image" alt="logo" />
                    </div> */}
                    <button onClick={(e) => setShowed(false)} className="see-projects">see projects {">"}</button>
                </div>
                <Spotlight />
                <Test />
            </div>
        </>
      )
}

export default Home;
