import React from 'react';
import { StyledProjects } from './Projects.styled';
import { DownArrow } from '../../components';

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <h1>Projects</h1>
      <DownArrow toId="skills" toName="Skills"/>
    </StyledProjects>
  )
}

export default Projects;