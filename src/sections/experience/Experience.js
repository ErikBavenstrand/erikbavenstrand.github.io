import React from 'react';
import { StyledExperience } from './Experience.styled';
import KTH from '../../assets/KTH.png';
import Byggmax from '../../assets/Byggmax.jpg';
import Fordonsbolaget from '../../assets/Fordonsbolaget.png';
import Nextline from '../../assets/Nextline.svg';
import { ExperienceCard } from '../../components';

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <h1>Experience</h1>
      <div class="container">
        <ExperienceCard 
          image={Nextline}
          location="Founder & Software Developer"
          titles={["Nextline AB"]}
          year="2019-Present"
          description="I founded Nextline AB to be able to work as a software development consulting while attending university. The experience of establishing and operating a company has been a great learning opportunity for me. 
It's been valuable to learn about building a business from the ground up and I have come to appreciate my knowledge of Industrial Economics since I'm in charge of the bookkeeping. Ever since it's establishing, Nextline has continually been on contract with Fordonsbolaget AB."
        />
        <ExperienceCard 
          image={Fordonsbolaget} 
          location="Fullstack Developer"
          titles={["Fordonsbolaget AB"]}
          year="2019-Present"
          description="Fordonsbolaget is a premium car reseller and a Honda retailer striving to modernize the car purchasing experience. I am part of an international development team working in scrum to build a customer-facing web application and an internal tool used by purchasing and the workshop.  The frontend of both applications is developed in Angular JavaScript, and the backend is implemented in Java with Spring Boot. SQL is used to query the databases, and the APIs are built according to the RESTful specification."
        />
        <ExperienceCard 
          image={KTH} 
          color="#1954a6"
          location="Lab assistant"
          titles={["Royal Institute of Technology"]}
          year="2018-2019"
          description="I was a lab assistant for the course Computer Hardware Engineering (IS1200). During lab sessions of the course, I examined students on their solutions to the labs. The subject of the labs ranged from assembler and C to programming microprocessors. Lunch office hours were held during lunch to give the students the option to ask for help with the subject. The ability to break down complex concepts and explaining them in a simple but accurate manner certainly improved my communication skills."
        />
        <ExperienceCard 
          image={Byggmax} 
          color="#ffe616"
          location="Store employee"
          titles={["Byggmax AB"]}
          year="2016-2019"
          description="I worked part-time at Byggmax during my B.Sc education on weekends and in the summers. The tasks ranged from attending the cash register to receiving and shipping deliveries with a forklift. I left in 2019 to found Nextline AB."
        />
      </div>
    </StyledExperience>
  )
}

export default Experience;