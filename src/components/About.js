import React from "react";
import ReactTypingEffect from "react-typing-effect";

function About() {
  const desc =
    "I'm a third year software engineering student at the University of Ottawa,working on my startup idea while also pursuing my degree. I enjoy building projects while learning new technologies.I'm currently seeking an internship for Summer 2022.";

  return (
    <div className="About-section">
      <div className="small-header">
        <p>Hi, my name is </p>
      </div>
      <div className="Name">
        <ReactTypingEffect
          text={["Ayman Fakri"]}
          typingDelay="100"
          eraseDelay="700"
          eraseSpeed="200"
          speed="200"
        />
      </div>
      <div className="below-name-container">
        <p className="Name below-name">Computer Science Enthusiast </p>
      </div>

      <div className="about-info-container">
        <p className="about-info">{desc}</p>
      </div>
    </div>
  );
}

export default About;
