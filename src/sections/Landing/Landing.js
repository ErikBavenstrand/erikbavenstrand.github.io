import React from 'react';
import { StyledLanding } from './Landing.styled';
import Portrait from '../../assets/Portrait.png';
import Resume from '../../assets/Papers/Resume_Erik_Bavenstrand.pdf';
import GitHub from '../../assets/Icons/GitHub.svg';
import LinkedIn from '../../assets/Icons/LinkedIn.svg';

const Landing = () => {
  return (
    <StyledLanding id="landing">
      <div class="container">
        <div class="section">
          <div class="greeting">
            <p>Hello</p>
            <p>I'm Erik</p>
          </div>
          <div class="about">
            <p>I'm a creative and driven individual that always strives to improve myself. </p>
          </div>
          <div class="resume">
            <a href={Resume} download target="_blank" rel="noopener noreferrer" class="download">
              <p>Download my resumé</p>
            </a>
            <div class="social">
              <a href="https://www.linkedin.com/in/erik-bavenstrand/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn"/>
              </a>
              <a href="https://github.com/ErikBavenstrand" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub"/>
              </a>
            </div>
          </div>
        </div>
        <div class="section">
          <img src={Portrait} alt="Portrait" />
        </div>
      </div>
    </StyledLanding>
  )
}

export default Landing;