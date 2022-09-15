import './Home.css';
import Navbar from './Navbar';
import Haven from './Haven';
import useSticky from './hooks/useSticky';
import Portrait from './assets/Portrait.png'

function About() {
    return (
        <>
          <div className="about">
            <div className="introduction-text">
                I was born in Shanghai, China and immigrated to Canada at the age of 5.
                <div className="introduction-paragraph">I 
                </div>
            </div>
            <img src={Portrait} className="portrait" alt="my-portrait"/>
          </div>
        </>
      )
}

export default About;
