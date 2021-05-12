import React from "react";
import { ProjectData } from "./ProjectData";
import Project from "./Project";
import Android from "../assets/android.png";
import Leaderboard from "../assets/leaderboard.png";
import Plagia from "../assets/plagia.png";

function ProjectSections() {
  const images = [Android, Leaderboard, Plagia];
  return (
    <div id="myprojects">
      <ul className="section-title">
        <p>Some Stuff I've Built</p>
      </ul>
      <ul className="projects-list">
        {ProjectData.map((item, index) => {
          return (
            <li
              className="project-element"
              key={index}
              style={{ marginBottom: "100px" }}
            >
              <Project
                title={item.title}
                description={item.description}
                overline={item.overline}
                stack={item.stack}
              />
              <div className="image">
                <a href={item.link}>
                  <img src={images[index]} alt="project image" />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectSections;
