import React from "react";

export default function Pro(props) {
  return (
    <>
      <div className="pro border">
        <a href={props.link}>
          <h3>{props.pro}</h3>
        </a>
        <p>{props.explain}</p>
      </div>
    </>
  );
}
