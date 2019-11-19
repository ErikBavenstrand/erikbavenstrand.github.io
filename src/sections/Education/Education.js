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
          description="At KTH, I'm majoring in Computer Science with a Data Science specialization. In my B.Sc education, I focused on the foundations that make up the computer science field. Courses in mathematics, programming, algorithms and data structures let me develop a broad knowledge of the area.  In my master's, I have chosen to deepen my understanding in the domain of data science, machine learning, and data mining."
        />
      </div>
    </StyledEducation>
  )
}

export default Education;