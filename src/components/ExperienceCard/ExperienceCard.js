import React from 'react';
import { StyledExperienceCard } from './ExperienceCard.styled';

const ExperienceCard = ({image, location, titles, year, description, color, ...props}) => {
  let separateTitles = [];
  if (titles) {
    separateTitles = titles.map(title => {
      return <p>{title}</p>
    });
  }

  return (
    <StyledExperienceCard>
      <div class="section">
        <div class="title">
          <p>{location}</p>
        </div>
        <div class="logo" style={{ background: color }} >
          <img src={image} alt={location}/>
        </div>
        <div class="facts">
          {separateTitles}
          <p class="year">{year}</p>
        </div>
        <div class="description">
          <p>{description}</p>
        </div>
      </div>
    </StyledExperienceCard>
  )
}

export default ExperienceCard;