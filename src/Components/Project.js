import React from "react";
import "../CSS/body.css";
import Pro from "../Components/pro";

export default function Project(props) {
  return (
    <>
      <h1 className="headding">Projects</h1>
      <section id="Projects">
        <Pro
          link=""
          pro="Travel Stories"
          explain="TravelStories is a user-friendly platform designed to help travelers discover and explore a diverse range of destinations. Exotic getaways where you can unwind amidst nature’s beauty, to vibrant and bustling city escapes filled with culture, entertainment, and adventure, travel packages cater to every type of explorer"
        ></Pro>
        <Pro
          link="https://github.com/Dinu7951/artistic"
          pro="Artistic Alley"
          explain="ArtisticAlley is a social media platform where students can
showcase their work in photography, literature, fashion, and art, providing them with a
space to express their creativity and pursue their passion in these careers"
        ></Pro>
        <Pro
          pro="PolySync"
          explain="PolySync is an innovative real-time collaboration platform designed for polymaths, enabling seamless knowledge-sharing, brainstorming, and project co-creation across diverse domains"
        ></Pro>
        {/* <Pro pro="Federated Learning" explain=""></Pro> */}
        <button className="but">View more</button>
      </section>
    </>
  );
}
