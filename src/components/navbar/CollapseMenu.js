import React from 'react';
import styled from 'styled-components';

import { Link } from "react-scroll"

const CollapseMenu = (props) => {
  return(
    <Wrapper>
      <div className={ props.navbarState ? "open" : "" }>
        <li>
          <Link
            activeClass="active"
            onClick={props.handleNavbar}
            to="me"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link
              activeClass="active"
              onClick={props.handleNavbar}
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link
              activeClass="active"
              onClick={props.handleNavbar}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
              activeClass="active"
              onClick={props.handleNavbar}
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
              activeClass="active"
              onClick={props.handleNavbar}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >
            CONTACT ME
          </Link>
        </li>
      </div>
    </Wrapper>
  );
};

export default CollapseMenu;

const Wrapper = styled.div`
  
`;