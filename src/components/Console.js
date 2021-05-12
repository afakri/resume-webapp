import React from "react";

function Console() {
  return (
    <section className="console-section" id="myid">
      <div className="console-title">
        <p>A Little About Me</p>
      </div>
      <div className="console">
        <div className="header"></div>
        <div className="consolebody">
          <div className="consoleText">
            {"> "}Ayman.origin
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">"} "Kenitra, Morocco"{" "}
            </p>
            {"> "}Ayman.education{" "}
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">"} "University of Ottawa"
            </p>
            {"> "}Ayman.major{" "}
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">"} "Software Engineering"
            </p>
            {"> "}Ayman.CGPA <p className="consoleResponse">={">"} "9.6/10"</p>
            {"> "}Ayman.expectedGraduation{" "}
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">"} "January 2024"
            </p>
            {"> "}Ayman.interests{" "}
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">"} ["Web Dev", "Mobile Dev", "Blockchain",
              "Crypography", "AI","Data Science"]
            </p>
            {"> "}Ayman.workExperience{" "}
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">"} Work Experience:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company:
              "AEPONYX" role: "Software engineering Intern"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startDate:
              "May 2020"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endDate:
              "July 2020"
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company:
              "University of Ottawa" role: "Teaching Assistant:SEG2105"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startDate:
              "May 2021"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endDate:
              "Current"
            </p>
            {"> "}Ayman.resume{" "}
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">"}{" "}
              <a
                href="AymanResume.pdf"
                id="email"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <span>"AymanResume.pdf"</span>{" "}
              </a>
            </p>
            {"> "}Ayman.email
            <p className="consoleResponse">
              &nbsp;&nbsp;&nbsp;={">   "}
              <a
                href="mailto:theonlyayman@outlook.fr"
                style={{ textDecoration: "none" }}
                id="email"
              >
                <span>"theonlyayman@outlook.fr"</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Console;
