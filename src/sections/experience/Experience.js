import React from 'react';
import { StyledExperience } from './Experience.styled';
import { DownArrow } from '../../components'
import KTH from '../../assets/KTH.png';
import Nextline from '../../assets/Nextline.png';
import Byggmax from '../../assets/Byggmax.jpg';

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <h1>Education</h1>
      <div class="container">
        <div class="organization">
          <img src={KTH} alt="KTH" />
          <div class="description">
            <div class="facts">
              <p class="place">Royal Institute of Technology</p>
              <p class="title">M.Sc in Computer Science</p>
              <p class="year">2016-2021</p>
            </div>
            <div class="information">
              <p>During my studies at KTH I have focused on a mix of theoretical and practical knowledge within IT and computer science. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1>Experience</h1>
      <div class="container">
        <div class="organization">
          <img src={Nextline} alt="Nextline" />
          <div class="description">
            <div class="facts">
              <p class="place">Nextline AB</p>
              <p class="title">Founder & CEO</p>
              <p class="year">2019-Present</p>
            </div>
            <div class="information">
              <p>Lorem ipsum dium</p>
            </div>
          </div>
        </div>
        <div class="organization">
          <img src={KTH} alt="KTH" />
          <div class="description">
            <div class="facts">
              <p class="place">Royal Institute of Technology</p>
              <p class="title">Lab assistant</p>
              <p class="year">2018-2019</p>
            </div>
            <div class="information">
              <p>Lorem ipsum dium</p>
            </div>
          </div>
        </div>
        <div class="organization">
          <img src={Byggmax} alt="Byggmax" />
          <div class="description">
            <div class="facts">
              <p class="place">Byggmax AB</p>
              <p class="title">Employee</p>
              <p class="year">2016-2019</p>
            </div>
            <div class="information">
              <p>Lorem ipsum dium</p>
            </div>
          </div>
        </div>
      </div>
      <DownArrow toId="projects" toName="Projects"/>
    </StyledExperience>
  )
}

export default Experience;