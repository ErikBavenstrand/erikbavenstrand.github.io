import React from 'react';
import { StyledExperienceCard } from './ExperienceCard.styled';

const ExperienceCard = ({image, location, titles, year, description, color, ...props}) => {
  let separateTitles = [];
  if (titles) {
    separateTitles = titles.map(title => {
      return <p>{title}</p>
    });
  }
  let logo = [];
  if (image) {
    logo = <img src={image} alt={location}/>
  }

  return (
    <StyledExperienceCard>
      <div class="section-small">
        <div class="logo" style={{ background: color }}>
          <img src={image} alt={location}/>
        </div>
        <div class="title">
          <p>{location}</p>
        </div>
        <div class="facts">
          {separateTitles}
          <p class="year">{year}</p>
        </div>
        <div class="description">
          <p>{description}</p>
        </div>
      </div>
      <div class="section-large">
        <div class="meta">
          <div class="logo" style={{ background: color }}>
            {logo}
          </div>
          <div class="info">
            <div class="title">
              <p>{location}</p>
            </div>
            <div class="facts">
              {separateTitles}
              <p class="year">{year}</p>
            </div>
            <div class="description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledExperienceCard>
  )
}

export default ExperienceCard;