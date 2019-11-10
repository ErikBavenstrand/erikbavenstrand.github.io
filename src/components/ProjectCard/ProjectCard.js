import React from 'react';
import { StyledProjectCard } from './ProjectCard.styled';
import GitHub from '../../assets/LanguageLogos/GitHub.svg';
import DownloadIcon from '../../assets/Icons/Download.svg';

const ProjectCard = ({image, title, description, toolLogos, gitHubLink, fileName, fileURL, ...props}) => {
  let tools = [];
  if (toolLogos) {
    tools = toolLogos.map(toolLogo => {
      return <img key={toolLogo} src={require(`../../assets/LanguageLogos/${toolLogo}.svg`)} alt={toolLogo} />
    });
  }
  let file = []
  if (fileName && fileURL) {
    file = (
      <a href={fileURL} download class="leftButton">
        <img src={DownloadIcon} alt="Download"/>
        <div class="vertical"></div>
        <p>Download {fileName}</p>
      </a>
    );
  }
  
  return (
    <StyledProjectCard>
      <div class="section">
        <div class="title">
          <p>{title}</p>
        </div>
        <div class="image">
          <div class="img" style={{"background-image" : `url(${image})`}}></div>
        </div>
        <div class="tools">
          {tools}
        </div>
        <div class="description">
          <p>{description}</p>
        </div>
        <div class="buttons">
          {file}
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub"/>
            <div class="vertical"></div>
            <p>View on GitHub</p>
          </a>
        </div>
      </div>
    </StyledProjectCard>
  )
}

export default ProjectCard;