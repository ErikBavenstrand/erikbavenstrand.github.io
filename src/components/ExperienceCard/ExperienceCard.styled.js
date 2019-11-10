import styled from 'styled-components';

export const StyledExperienceCard = styled.div`
  .section {
    display: flex;
    flex-direction: column; 
    height: auto;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.lightBorder};
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    margin-bottom: 20px;

    .logo {
      border-top: 1px solid ${({ theme }) => theme.lightBorder};
      border-bottom: 1px solid ${({ theme }) => theme.lightBorder};
      height: 25vw;
      img {
        border-radius: 0px;
        margin: 0;
        display: block;
        margin: auto;
        padding-left: 10px;
        padding-right: 10px;
        width: 100%; /* or any custom size */
        height: 100%; 
        object-fit: contain;
      }
    }
    
    .title {
      p {
        font-size: 4.55vw;
        margin: 10px;
        font-weight: 500;
        text-align: center;
      }
    }

    .facts {
      padding: 10px;
      width: 100%;
      font-size: 4vw;
      p {
        margin: 0;
        text-align: justify;
        hyphens: auto;
        font-weight:400;
      }
      .year {
        margin: 0;
        font-weight: 300;
      }
    }
    

    .description {
      padding: 0 10px 10px 10px;
      text-align: justify;
      hyphens: auto;
      font-weight: 300;
      p {
        margin: 0;
      }
    }
  }
`;