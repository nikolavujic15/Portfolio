import { useState } from "react";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";
import pijaca from "../../assets/pijaca.png";
import mreza from "../../assets/mreza.png";

const Projects = () => {
  const [tags] = useState([
    
    "CSS/SCSS",
    "NodeJS",
    "HTML",
    "JavaScript",
    "Python"
  ]);
  return (
    <div className="projects-wrapper">
      <div></div>
      
      <ProjectTemplate
        projectName="SocialNetwork"
        projectDesc="In this social network, you can register if you don't have an account or simply log in if you already have one. Here, you can publish various quotes of your own and share them with your friends. They can like and comment on your posts."
        tags={tags}
        img={mreza}
      />
    
      <div></div>
    </div>
  );
};

export default Projects;
