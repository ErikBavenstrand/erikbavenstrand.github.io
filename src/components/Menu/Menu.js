import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-scroll';

const Menu = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link activeClass="active"
        to="landing"
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        onClick={() => setOpen(!open)}
      >
        Me
      </Link>
      <Link activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        onClick={() => setOpen(!open)}
      >
        Education
      </Link>
      <Link activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        onClick={() => setOpen(!open)}
      >
        Experience
      </Link>
      <Link activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        onClick={() => setOpen(!open)}
      >
        Projects
      </Link>
      <Link activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        onClick={() => setOpen(!open)}
      >
        Skills
      </Link>
      <Link activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        onClick={() => setOpen(!open)}
      >
        Contact
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;