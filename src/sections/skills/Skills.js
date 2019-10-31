import React from "react";
import "./Skills.css"

export default function Skills({dark, id}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} class="skills">
      <div className="section-content" id={id}>
        <h1>Skills</h1>
      </div>
    </div>
  );
}