import React from 'react';
import { StyledLanding } from './Landing.styled';
import { DownArrow } from '../../components';
import Portrait from '../../assets/Portrait.png';

const Landing = () => {
  return (
    <StyledLanding id="me">
      <div class="container">
        <div class="text">
          <h1>Hello</h1>
          <h2>I'm Erik</h2>
        </div>
        <div class="portrait">
          <img src={Portrait} alt="Portrait" />
        </div>
      </div>
      <DownArrow toId="experience" toName="Experience"/>
    </StyledLanding>
  )
}

export default Landing;