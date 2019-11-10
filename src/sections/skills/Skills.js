import React from 'react';
import { StyledSkills } from './Skills.styled';
import Cpp from '../../assets/LanguageLogos/C++.svg';
import Python from '../../assets/LanguageLogos/Python.svg';
import Java from '../../assets/LanguageLogos/Java.svg';
import JavaScript from '../../assets/LanguageLogos/JavaScript.svg';
import Angular from '../../assets/LanguageLogos/Angular.svg';
import MySQL from '../../assets/LanguageLogos/MySQL.svg';
import Reactlogo from '../../assets/LanguageLogos/React.svg';
import Tensorflow from '../../assets/LanguageLogos/Tensorflow.svg';
import Git from '../../assets/LanguageLogos/Git.svg';

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <h1>Skills</h1>
      <div class="container">
        <h1>Languages</h1>
        <div class="section">
          <img src={Cpp} alt="C++" />
          <p>C/C++</p>
        </div>
        <div class="section">
          <img src={Python} alt="Python" />
          <p>Python</p>
        </div>
        <div class="section">
          <img src={Java} alt="Java" />
          <p>Java</p>
        </div>
        <div class="section">
          <img src={JavaScript} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div class="section">
          <img src={MySQL} alt="SQL" />
          <p>SQL</p>
        </div>
      </div>
      <div class="container">
      <h1>Technologies</h1>
        <div class="section">
          <img src={Tensorflow} alt="Tensorflow" />
          <p>Tensorflow</p>
        </div>
        <div class="section">
          <img src={Git} alt="Git" />
          <p>Git</p>
        </div>
        <div class="section">
          <img src={Angular} alt="Angular" />
          <p>Angular</p>
        </div>
        <div class="section">
          <img src={Reactlogo} alt="Reactlogo" />
          <p>React</p>
        </div>
      </div>
      <div class="container">
        <h1>Soft Skills</h1>
        <div class="section">
          <img src={Cpp} alt="C++" />
          <p>C/C++</p>
        </div>
      </div>
    </StyledSkills>
  )
}

export default Skills;