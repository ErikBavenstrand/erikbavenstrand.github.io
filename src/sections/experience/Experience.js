import React from "react";
import "./Experience.css"

export default function Experience({dark, id}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} class="experience">
      <div className="section-content" id={id}>
        <h1>Experience</h1>
      </div>
    </div>
  );
}