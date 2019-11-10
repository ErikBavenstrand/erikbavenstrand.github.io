import React from 'react';
import { StyledExperience } from './Experience.styled';
import KTH from '../../assets/KTH.png';
import Nextline from '../../assets/Nextline.png';
import Byggmax from '../../assets/Byggmax.jpg';
import Fordonsbolaget from '../../assets/Fordonsbolaget.png';
import { ExperienceCard } from '../../components';

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <h1>Experience</h1>
      <div class="container">
        <ExperienceCard 
          image={Nextline} 
          location="Nextline AB"
          titles={["Founder"]}
          year="2019-Present"
          description="Nextline is a software development firm founded by myself in 2019. Since its founding I have constantly been on contract. It is has been very valuable for me to learn about building a business from the ground up and i have come to appreciate my knowledge of Industrial Economics since I am handling the bookkeeping."
        />
        <ExperienceCard 
          image={Fordonsbolaget} 
          location="Fordonsbolaget AB"
          titles={["Fullstack Developer"]}
          year="2019-Present"
          description="Fordonsbolaget is a premium car reseller and a Honda retailer striving to modernize the car purchasing experience. I am part of an international software development team building a customer facing web application and an in-house adminstrative tool used by all parts of the company. We work agile in the framework scrum and I work fullstack with MySQL, Angular JavaScript and Java."
        />
        <ExperienceCard 
          image={KTH} 
          color="#1954a6"
          location="Royal Institute of Technology"
          titles={["Lab assistant"]}
          year="2018-2019"
          description="I was a lab assistant for the course Computer Hardware Engineering (IS1200) where I examined the students on the laborations and helped them with the course during the lunch office hours. I assisted during two separate course offerings. "
        />
        <ExperienceCard 
          image={Byggmax} 
          color="#ffe616"
          location="Byggmax AB"
          titles={["Store employee"]}
          year="2016-2019"
          description="I worked at Byggmax part-time during my B.Sc studies and full-time during the summers. I quit in 2019 to found Nextline AB."
        />
      </div>
    </StyledExperience>
  )
}

export default Experience;