import React from "react"
import "./Experience.css"

import Morty from './assets/morty.png';
import Neo from './assets/neo.png';
import Covid from './assets/covid.png';
import Resume from './resume.pdf';
import Sylvan from './assets/Sylvan.png';

import {
    Link,
  } from "react-router-dom";


const Experience = () => (

  <div className="experience-section">
        <div class="experience-title">
            <span data-title="experience" class="text">
                experience
            </span>
        </div>
        <div class="experience-title-description">learn more about each of my experiences and get links to my projects!</div>
        <div className="sections-e">
            <button className="about-e">
                <Link to='/home' style={{ textDecoration: 'none', color: 'rgb(152, 152, 152)'}}>about</Link>
            </button>
            <button className="work-e">
                <Link to='/experience' style={{ textDecoration: 'none', color: 'black'}}>experience</Link>
            </button>
            <button className="resume-e">
                <a href={Resume} target = "_blank" style={{ textDecoration: 'none', color: 'rgb(152, 152, 152)'}}>resume</a>
            </button>
            <button className="contact-e">
                contact
            </button>
        </div>

        <div class="cards-wrapper">
            <div class="card">
                <div class="card-background">
                    <div class="overview">
                        overview {'>'}
                    </div>
                    <div class="overview-description">
                        <div class="role-description">
                            My role
                        </div>
                        <div class="list-description">
                            <ul>
                                <li><b>Configured</b> and enhanced new Selenium/Cucumber framework to automate GUI tests in Typescript code base</li>
                                <li><b>Developed</b> a backend script to mock user data generation in the testing environment, <b>doubling the possible test coverage</b></li>
                                <li>Designed a user-friendly digital report of historical test results, accessible to all software and product team</li>
                                <li>Collaborated with agile test automation team in a <b>high-pressure environment</b> to ship code at a fast pace with Git</li>
                            </ul>
                        </div>
                        <div class="company-description">
                            <span class="company-title">
                                    Company:
                            </span>
                            <span class="company-name">
                                    Neo Financial
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card0">
                    <div class="card-text">
                        <div class="title">Software Engineer Co-op</div>
                        <div class="company">internship @ Neo Financial</div>
                    </div>
                    <div class="card-image">
                        <img src={Neo} className="neo" alt="neologo"/>
                    </div>
                    <div class="card-info">
                        <div class="date-icon"></div>
                        <div class="date-icon-description">Jan 2022 – May 2022</div>
                    </div>
                    <div class="skills-info">
                        <div class="skills-container">
                            <div class="skills">
                                <div class="skills-usage">
                                    <ul>
                                        <li>
                                            <p>Typescript</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Git</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Selenium/Cucumber</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-fifty" />
                                            </div>
                                        </li>     
                                        <li>                                   
                                            <p>GraphQL</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-seventy" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Jest</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-fifty" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-background">
                    <div class="overview">
                        overview {'>'}
                    </div>
                    <div class="overview-description">
                        <div class="role-description">
                            My role
                        </div>
                        <div class="list-description">
                        <ul>
                            <li><b>Successfully built</b> a web API using GraphQL and MongoDB in a one-month incubator with historical 1% completion rate.</li>
                            <li><b>Created</b> an interactive React front-end interface using Material UI components, Formic and cursor pagination.</li>
                            <li><b>Developed</b> mock and stub test clients for each mutation to ensure full code coverage using Jest.</li>
                        </ul>   
                        </div>
                        <div class="company-description">
                            <span class="company-title">
                                    Github:
                            </span>
                            <span class="company-name">
                                    <a href="https://github.com/judyyzheng/pizza-samurai-cats">pizza-samurai-cats</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card0-harvest">
                    <div class="card-text">
                        <div class="title">Harvest Builders Developer Incubator Bootcamp</div>
                        <div class="company">bootcamp @ harvest builders x Neo</div>
                    </div>
                    {/* <div class="card-image">
                        <img src={GithubIcon} className="git" alt="githubicon"/>
                    </div> */}
                    <div class="card-info">
                        <div class="date-icon"></div>
                        <div class="date-icon-description">Jan 2022 – May 2022</div>
                    </div>
                    <div class="skills-info">
                        <div class="skills-container">
                            <div class="skills">
                                <div class="skills-usage">
                                    <ul>
                                        <li>
                                            <p>Typescript</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Git</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Selenium/Cucumber</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-fifty" />
                                            </div>
                                        </li>     
                                        <li>                                   
                                            <p>GraphQL</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-seventy" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Jest</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-fifty" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-background">
                    <div class="overview">
                        overview {'>'}
                    </div>
                    <div class="overview-description">
                        <div class="role-description">
                            My role
                        </div>
                        <div class="list-description">
                            <ul>
                                <li> <b>Led</b> document automation projects for several lending firms involving technical presentations and HTML/PHP development</li>
                                <li>Collaborated with front-end team to refactor web application with an <b>intuitive and consistent UI</b> using Figma</li>
                                <li><b>Developed</b> first standardized client file request system with PHP, cutting communication time by 30+ hours per week</li>
                                <li><b>Cultivated strong customer relationships</b></li>
                            </ul>
                        </div>
                        <div class="company-description">
                            <span class="company-title">
                                    Company:
                            </span>
                            <span class="company-name">
                                    Mortgage Automator
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card1">
                    
                    <div class="card-text">
                        <div class="title">Jr. HTML Developer</div>
                        <div class="company">internship @ Mortgage Automator</div>
                    </div>
                    <div class="card-image">
                        <img src={Morty} className="morty" alt="mortgageautomator"/>
                    </div>
                    <div class="card-info">
                        <div class="date-icon"></div>
                        <div class="date-icon-description">May 2021 – Aug 2021</div>
                    </div>
                    <div class="skills-info">
                        <div class="skills-container">
                            <div class="skills">
                                <div class="skills-usage">
                                    <ul>
                                        <li>
                                            <p>HTML/CSS</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>PHP</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-fifty" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-background">
                    <div class="overview">
                        overview {'>'}
                    </div>
                    <div class="overview-description">
                        <div class="role-description">
                            My role
                        </div>
                        <div class="list-description">
                            <ul>
                                <li> Developed responsive portfolio website and online gallery/shop using React, SCSS and JavaScript</li>
                                <li>Generated over $10,000 in revenue through the sale of commissions, prints, and original works.</li>
                            </ul>
                        </div>
                        <div class="company-description">
                            <span class="company-title">
                                    Github:
                            </span>
                            <span class="company-name">
                                    <a href="https://github.com/judyyzheng/portfolio">portfolio</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    
                    <div class="card-text">
                        <div class="title">Personal Art Portfolio and Business</div>
                        <div class="company">Personal Business</div>
                    </div>
                    {/* <div class="card-image">
                        <img src={Fish} className="fish" alt="Fish"/>
                    </div> */}
                    <div class="card-info">
                        <div class="date-icon"></div>
                        <div class="date-icon-description">Aug 2020 - Present</div>
                    </div>
                    <div class="skills-info">
                        <div class="skills-container">
                            <div class="skills">
                                <div class="skills-usage">
                                    <ul>
                                        <li>
                                            <p>HTML/CSS</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Javascript</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-forty" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>React</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Figma</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-ninety" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-background">
                    <div class="overview">
                        overview {'>'}
                    </div>
                    <div class="overview-description">
                        <div class="role-description">
                            My role
                        </div>
                        <div class="list-description">
                            <ul>
                                <li>Built Python program to model optimized group testing, improving provincial test capacity by 200%</li>
                                <li>Received personal recognition from Alberta Health Minister for ideas and algorithm presented in report.</li>
                            </ul>
                        </div>
                        <div class="company-description">
                            <span class="company-title">
                                    Project:
                            </span>
                            <span class="company-name">
                                    Personal
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card3">
                    
                    <div class="card-text">
                        <div class="title">Covid Test Optimization Program</div>
                        <div class="company">personal project</div>
                    </div>
                    <div class="card-image">
                        <img src={Covid} className="covid" alt="covid"/>
                    </div>
                    <div class="card-info">
                        <div class="date-icon"></div>
                        <div class="date-icon-description">Jun 2020 - Nov 2020</div>
                    </div>
                    <div class="skills-info">
                        <div class="skills-container">
                            <div class="skills">
                                <div class="skills-usage">
                                    <ul>
                                        <li>
                                            <p>Python</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-fifty" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-background">
                    <div class="overview">
                        overview {'>'}
                    </div>
                    <div class="overview-description">
                        <div class="role-description">
                            My role
                        </div>
                        <div class="list-description">
                            <ul>
                                <li>Improved marks by 10-25 percentage points through designing and delivering 1-on-1 math workshops.</li>
                            </ul>
                        </div>
                        <div class="company-description">
                            <span class="company-title">
                                    Company:
                            </span>
                            <span class="company-name">
                                   Sylvan Learning
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card4">
                    <div class="card-text">
                        <div class="title">SAT and Math Diploma tutor</div>
                        <div class="company">Sylvan Learning Center</div>
                    </div>
                    <div class="card-image">
                    <img src={Sylvan} className="sylvan" alt="sylvan"/>
                    </div>
                    <div class="card-info">
                        <div class="date-icon"></div>
                        <div class="date-icon-description">Sept 2019 - Apr 2020</div>
                    </div>
                    <div class="skills-info">
                        <div class="skills-container">
                            <div class="skills">
                                <div class="skills-usage">
                                    <ul>
                                        <li>
                                            <p>Communication</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>Leadership</p>
                                            <div class="bar-bg">
                                                <div class="bar-bg-inner-about-html5" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Experience