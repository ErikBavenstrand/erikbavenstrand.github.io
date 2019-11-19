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
import Elixir from '../../assets/LanguageLogos/Elixir.png';
import Jupyter from '../../assets/LanguageLogos/Jupyter.svg';
import Scikit from '../../assets/LanguageLogos/Scikit.svg';
import Bash from '../../assets/LanguageLogos/Bash.svg';
import Docker from '../../assets/LanguageLogos/Docker.svg';

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <h1>Skills</h1>
      <h2>Languages & Technologies</h2>
      <div class="container-wrapper">
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
          <div class="section">
            <img src={Elixir} alt="Elixir" />
            <p>Elixir</p>
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
            <p>AngularJS</p>
          </div>
          <div class="section">
            <img src={Reactlogo} alt="Reactlogo" />
            <p>ReactJS</p>
          </div>
          <div class="section">
            <img src={Jupyter} alt="Jupyter" />
            <p>Jupyter Notebook</p>
          </div>
          <div class="section">
            <img src={Scikit} alt="Scikit" />
            <p>Scikit-learn</p>
          </div>
          <div class="section">
            <img src={Bash} alt="Bash" />
            <p>Bash</p>
          </div>
          <div class="section">
            <img src={Docker} alt="Docker" />
            <p>Docker</p>
          </div>
        </div>
      </div>
    </StyledSkills>
  )
}

export default Skills;