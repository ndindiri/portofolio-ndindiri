import React from "react";
import PROJECTS from "../data/projects";

const Project2 = (props) => {
  const { title, image, description, link } = props.project;
  return (
    <div
      className="hoverlink"
      style={{
        display: "inline-block",
        width: 300,
        margin: 10,
        textDecoration: "none",
      }}
    >
      <h3>{title}</h3>
      <img src={image} alt="Project" style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link}>GitHub link</a>
    </div>
  );
};

const Projects2 = () => {
  return (
    <div>
      <h1>Highlighted Projects</h1>
      <div>
        {PROJECTS.map((PROJECT) => (
          <Project2 key={PROJECT.id} project={PROJECT} />
        ))}
      </div>
    </div>
  );
};

export default Projects2;
