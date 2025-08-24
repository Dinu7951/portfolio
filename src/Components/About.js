import React from "react";
import Lang from "../Components/lang";
import "../CSS/body.css";
export default function About() {
  const nums = ["English", "Telugu", "Hindi"];
  return (
    <>
      <section id="About" className="abt">
        <h1 className="headding">Know About Me</h1>
        <div className="box">
          <div className="container">
            <div className="bax">
              <p className="me-1">
                An enthusiastic developer with solid Java skills and a passion
                for exploring new technologies and tools. I enjoy solving
                problems logically and consistently strive to grow beyond
                conventional boundaries. Guided by the 3Cs—Consistency,
                Collaboration, and Contribution—I stay committed to continuous
                learning and improvement.
              </p>
              <div className="boz">
                <div>
                  <h1>Education :</h1>
                  <section className="study-b">
                    <li>
                      Currently Studying in B. Tech in Computer Science
                      Engineering with Artificial Intelligence and Machine
                      Learning | Vellore Institution of Technology Amaravathi
                      with 8.34 CGPA (2022-Present)
                    </li>
                  </section>
                  <section className="study-b">
                    <li>
                      Completed XII(State Board) from Narayana Jr. College,
                      Vijayawada with 89.1%
                    </li>
                  </section>
                  <section className="study-b">
                    <li>
                      Completed X(State Board) from Bhashyam High School, Guntur
                      with 99%
                    </li>
                  </section>
                </div>
                <div>
                  <h1>Languages :</h1>
                  {nums.map((langs) => (
                    <Lang lang={langs} />
                  ))}
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1S0UxZ_SqIZK4NR6Z8sGhqfn2MSc_y_Wa/view?usp=drive_link"
                download
              >
                <button className="res-bt"> Resume</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
