import "./skills.css";
import html from "../../img/html.png";
import mongo from "../../img/mongo.png";
import node from "../../img/node.png";
import mysql from "../../img/mysql.png";
import python from "../../img/python.png";
import react from "../../img/react.png";


const Skills = () => {
    return (    
    <div className="__brand section__padding">
    <h1 className="gradient__text">Technical Skills</h1>
    <br/>
    <div>
    <img src={html}
    alt="new"/>
    </div>
    <div>
    <img src={react}
    alt="new"/>
    </div>
    <div>
    <img src={mongo}
    alt="new"/>
    </div>
    <div>
    <img src={node}
    alt="new"/>
    </div>
    <div>
    <img src={python}
    alt="new"/>
    </div>
    <div>
    <img src={mysql}
    alt="new"/>
    </div>
  </div>
    
    );

};
export default Skills;