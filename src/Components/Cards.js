import React from "react";
import image from "../Images/prof.jpeg";
import "../CSS/card.css";

export default function Cards() {
  return (
    <>
      <hr className="hr" />
      <div className="cards">
        <p className="me">
          <h2 id="wave">
            {" "}
            Hi
            <picture className="emoji">
              <source
                srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
                type="image/webp"
                id="hi"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                alt="👋"
                className="hii"
                width="40"
                height="40"
              />
            </picture>
          </h2>
          <h1>I'm Dinesh Kotha</h1> <h2>Software Developer</h2>{" "}
          <span>
            {" "}
            Competitive Programmer with strong competency skills on Java. <br />{" "}
            Currently, upskilling myself in Data Structures and Algorithms.{" "}
            <br />I love to guide and support others.
          </span>
          <br />
          <button className="res">View Resume</button>
        </p>
        <section className="imge">
          <img src={image} alt="Dinesh's Image" />
        </section>
      </div>

      <hr className="hor" />
    </>
  );
}
