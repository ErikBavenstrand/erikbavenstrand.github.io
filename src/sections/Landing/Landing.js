import React from 'react';
import { StyledLanding } from './Landing.styled';
import Portrait from '../../assets/Portrait.png';

const Landing = () => {
  return (
    <StyledLanding id="landing">
      <div class="container">
        <div class="section">
          <div class="greeting">
            <p>Hello</p>
            <p>I'm Erik</p>
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