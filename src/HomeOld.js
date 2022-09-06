import './Home.css';
import ComputerLight from './assets/ComputerLight.svg';
import {
  Link,
} from "react-router-dom";

function Home() {
  return (
      <div className="Home">
        <div className="computer-light" alt="logo"></div>
        <div className="navigation">
            <div><button className="design"><Link to="/projects">ui design portfolio</Link></button></div>
            <div><button className="projects"><Link to="/projects">projects</Link></button></div>
            <div><button className="experience"><Link to="/experience">experience</Link></button></div>
            <div><button className="university"><Link to="/university">university of waterloo</Link></button></div>
            <div><button className="tools"><Link to="/tools">tools and frameworks</Link></button></div>
        </div>
      </div>
  );
}

export default Home;
