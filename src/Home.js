import './Home.css';
import Navbar from './Navbar';
import useSticky from './hooks/useSticky';
import Portrait from './assets/Portrait.png'

function Home() {
    const { isSticky } = useSticky()
    return (
        <>
          <Navbar sticky={isSticky} />
          <div className="padding"></div>
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
          <div className="padding"></div>
          <div className="sections">
            <div className="about">
                <div className="about-text">about</div>
                <div className="about-descriptions">More about my background, career goals and values!</div>
            </div>
            <div className="experience-group">
                <div className="experience">
                    <div className="experience-text">experience</div>
                    <div className="experience-descriptions">What I’ve done to build my skills</div>
                </div>
                <div className="work">work</div>
                <div className="projects">projects</div>
            </div>
            <div className="accomplishments">
                <div className="accomplishments-text">achievements</div>
                <div className="accomplishments-descriptions"></div>
            </div>
          </div>
        </>
      )
}

export default Home;
