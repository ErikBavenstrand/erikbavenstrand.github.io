import React from "react";
import "./Contact.css"

export default function Contact({dark, id}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} class="contact">
      <div className="section-content" id={id}>
        <h1>Contact</h1>
      </div>
    </div>
  );
}