import "./about.css";
import Award from "../../img/award.png";
import gitesh from "../../img/gitesh.jpeg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={gitesh}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title" id="About">About Me</h1>
        <p className="a-sub">
          A jack of all trades technology enthusiast who's always trying to learn and create impact.
        </p>
        <p className="a-desc">
        A technology enthusiast and aspiring  entrepreneur 
        with a knack for turning abstract ideas into tangible digital assets.
         Proficient in languages like C/C++, Python, JavaScript, React and NodeJS I find joy in crafting impactful solutions.
           My journey has been shaped by hands-on experience, from getting my own hands dirty in 
           various projects and hackathons to working with startups and learning about various businesses.
           Beyond code, I'm a hustler in the world of business strategies and marketing, 
           thriving as a tech enthusiast and a jack-of-all-trades at heart.
           Passionate, curious, and always eager to learn.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
