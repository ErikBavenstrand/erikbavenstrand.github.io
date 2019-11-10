import React from 'react';
import { StyledEducation } from './Education.styled';
import KTH from '../../assets/KTH.png';
import { ExperienceCard } from '../../components';

const Education = () => {
  return (
    <StyledEducation id="education">
      <h1>Education</h1>
      <div class="container">
        <ExperienceCard 
          image={KTH} 
          color="#1954a6"
          location="Royal Institute of Technology"
          titles={["B.Sc in Information Technology", "M.Sc in Computer Science"]}
          year="2016-2021"
          description="At KTH I am majoring in Computer Science with a specialization in Data Science. It includes courses in Algorithms and Data Structures, Machine Learning and Data Mining. I have also focused on deepeing my knowledge in additional fields such as, Concurrent Programming and Data Visualization."
        />
      </div>
    </StyledEducation>
  )
}

export default Education;