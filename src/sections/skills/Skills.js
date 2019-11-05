import React from 'react';
import { StyledSkills } from './Skills.styled';
import { DownArrow } from '../../components';

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <h1>Skills</h1>
      <DownArrow toId="contact" toName="Contact"/>
    </StyledSkills>
  )
}

export default Skills;