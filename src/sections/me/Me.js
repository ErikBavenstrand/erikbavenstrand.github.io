import React from "react";
import "./Me.css"

export default function Me({dark, id}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} class="me">
      <div className="section-content" id={id}>
        <h1>Hello</h1>
      </div>
    </div>
  );
}