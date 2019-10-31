import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Me from "./sections/me/Me";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";

import GlobalStyle from "./styles/Global";

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Me
          dark={false}
          id="me"
        />
        <Experience
          dark={true}
          id="experience"
        />
        <Projects
          dark={true}
          id="projects"
        />
        <Skills
          dark={false}
          id="skills"
        />
        <Contact
          dark={false}
          id="contact"
        />
        <GlobalStyle />
      </>
    );
  }
}

export default App;