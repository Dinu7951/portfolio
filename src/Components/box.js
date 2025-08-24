import React from "react";

export default function Box(props) {
  return (
    <>
      <div className="scontainer border">
        <div className="first">{props.skill}</div>
      </div>
    </>
  );
}
