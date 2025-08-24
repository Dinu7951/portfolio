import React from "react";
import "../CSS/body.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <>
      <section id="Contact">
        <h1 className="headding">Contact</h1>
        <div className="contact">
          <li>
            <h1>Wanna build something cool together? Get in touch!</h1>
          </li>
          <div className="cont">
            <div className="c-form">
              <div>
                <form action="">
                  <div>
                    <label htmlFor="name">Name :</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="e-id">E-Mail Id :</label>
                    <input
                      type="text"
                      id="e-id"
                      placeholder="Enter your E-Mail Id"
                    />
                  </div>
                  <div>
                    <label htmlFor="area">Query :</label>
                    <textarea
                      name="q-area"
                      id="area"
                      placeholder="Express your Query or Idea"
                    ></textarea>
                  </div>
                  <h1>Fill the form to get contact with me..!</h1>
                </form>
              </div>
            </div>
            <div className="social">
              <h1>Contact Info</h1>
              <section>
                <h3>E-mail</h3>
                <span>dasarhu2005@gmail.com</span>
              </section>
              <section>
                <h3>Phone</h3>
                <span>+91 7013025262</span>
              </section>
              <section>
                <h3>Location</h3>
                <span>Palanadu,Andhra Pradesh,India </span>
              </section>
              <a href="https://www.instagram.com/itz.dineshhhh_/">
                <FontAwesomeIcon
                  className="icon"
                  icon={faInstagram}
                  size="2xl"
                  style={{ color: "#00d4ff" }}
                />
              </a>
              <a href="https://github.com/Dinu7951">
                <FontAwesomeIcon
                  className="icon"
                  size="2xl"
                  icon={faGithub}
                  style={{ color: "#00d4ff" }}
                />
              </a>
              <a href="www.linkedin.com/in/dineshk51">
                <FontAwesomeIcon
                  className="icon"
                  size="2xl"
                  icon={faLinkedin}
                  style={{ color: "#00d4ff" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
