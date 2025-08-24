import React from "react";
import "../CSS/body.css";
import Skills from "../Components/skills";
import About from "../Components/About";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
export default function Body() {
  return (
    <>
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
