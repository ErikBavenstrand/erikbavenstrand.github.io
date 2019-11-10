import React from 'react';
import { StyledProjects } from './Projects.styled';
import Project from '../../assets/Project.jpg';
import Torcs from '../../assets/Projects/Torcs.jpeg';
import Thesis from '../../assets/Papers/Performance_Evaluation_of_Imitation_Learning_Algorithms_with_Human_Experts.pdf';
import nbodyReport from '../../assets/Papers/id1217_project_report.pdf';
import { ProjectCard } from '../../components';

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <h1>Projects</h1>
      <div class="container">
        <ProjectCard
          image={Torcs}
          title="Performance Evaluation of Imitation Learning Algorithms with Human Experts"
          description="I, together with a coursemate did this project as our B.Sc thesis and was built with Python and the artificial neural networks used Tensorflow. The aim of the project was to evaluate three different imitation learning algorithms that used human experts. The learning environment was TORCS, a car racing simulator. More information about the project can be found on GitHub."
          toolLogos={["Python", "Tensorflow", "Git", "Bash"]}
          gitHubLink="https://github.com/ErikBavenstrand/Performance-Evaluation-of-Imitation-Learning-Algorithms-with-Human-Experts"
          fileName="thesis"
          fileURL={Thesis}
        />
        <ProjectCard
          image={Project}
          title="Concurrent N-Body Simulation"
          description="N-Body simulation is a simulation of a dynamical system of particles under the forces of gravity. This project contains two different methods of aproximating such a system both with sequential and parallel implementations and was made for a course in concurrent programming. I also patched a visualization tool made in OpenGL."
          toolLogos={["C++", "Git", "Bash"]}
          gitHubLink="https://github.com/ErikBavenstrand/Performance-Evaluation-of-Imitation-Learning-Algorithms-with-Human-Experts"
          fileName="report"
          fileURL={nbodyReport}
        />
        <ProjectCard
          image={Project}
          title="Thesis project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </StyledProjects>
  )
}

export default Projects;