import React from "react";
import "./Projects.css"

export default function Projects({dark, id}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} class="projects">
      <div className="section-content" id={id}>
        <h1>Projects</h1>
      </div>
    </div>
  );
}