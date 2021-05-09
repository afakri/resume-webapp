import React from "react";

function Project(props) {
  
  return (
    <div className="project-content">
      <p className="project-overline">{props.overline}</p>
      <p className="project-title"><a href="">{props.title}</a></p>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
      <ul className="tech-stack">
        {props.stack.map((tech,index) => {
          
          return(
            <li key={index}>{tech}</li>
          );

        })}
      </ul>
    </div>
  );
}

export default Project;
