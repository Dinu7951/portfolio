import React from "react";
import "../CSS/style.css";

export default function Header() {
  return (
    <>
      <div className="Nav">
        <h1>&copy;Dinesh.</h1>
        <ul className="items">
          <li>
            <a href="#Home" id="red">
              Home
            </a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact </a>
          </li>
        </ul>
      </div>
    </>
  );
}
