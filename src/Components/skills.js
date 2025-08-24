import React from "react";
import "../CSS/body.css";
import Box from "../Components/box";
export default function Skill() {
  const nums = [
    "DSA",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "ReactJS",
    "UI/UX",
  ];
  return (
    <>
      <section id="Skills">
        <h1 className="headding">Skills</h1>
        <h1 className="bit">
          <li>
            Driven by curiosity and purpose, I find these domains most exciting
            and impactful.
          </li>
        </h1>
        <div className="ski">
          {nums.map((skill) => (
            <Box skill={skill} />
          ))}
        </div>
      </section>
    </>
  );
}
