import React from "react";
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
        <div className="navigation">
            <div className="project-heading">Projects</div>
        </div>
        <div className ="project-list">
            <div className="project">
                <div className = "project-name">Harvest Builders Incubator</div>
                <div className = "project-tools">
                    <ul>
                        <li>Typescript</li>
                        <li>Docker</li>
                        <li>MongoDB</li>
                        <li>MaterialUI</li>
                        <li>Jest</li>
                        <li>Formic</li>
                    </ul>
                </div>
                <div className = "project-description"></div>
                <div className = "project-link"></div>
            </div>
            <div className="project">
                <div className = "project-name">Covid-19 Test Optimization Program</div>
                <div className = "project-tools">
                    <ul>
                        <li>Python</li>
                    </ul>
                </div>
                <div className = "project-description"></div>
            </div>
            <div className="project">
                <div className = "project-name">Haven Prototype: UX Laurier Designathon</div>
                <div className = "project-tools">'                    
                    <ul>
                        <li>Figma</li>
                    </ul></div>
                <div className = "project-description"></div>
            </div>
            <div className="project">
                <div className = "project-name">Sustainable fashion plug-in: IKEA Sustainability Challenge</div>
                <div className = "project-tools">
                <ul>
                        <li>Figma</li>
                    </ul>
                </div>
                <div className = "project-description"></div>
            </div>
        </div>
     </div>
  );
}

export default Projects;
