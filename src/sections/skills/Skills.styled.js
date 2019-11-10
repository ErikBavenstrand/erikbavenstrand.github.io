import styled from 'styled-components';

export const StyledSkills = styled.div`
  position: relative;
  h1 {
    text-align: center;
    margin-bottom: 0;
  }

  hr {
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 0.5px solid ${({ theme }) => theme.lightBorder};
    width: 40%;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.lightBorder};
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    justify-content: center;
    margin-bottom: 20px;
    
    h1 {
     margin-top: 0;
     margin-bottom: 20px;
    }
    
    .section {
      width: 50%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      img {
        height: 20vw;
        width: auto;
        border-radius: 0;
      }
      p {
        margin-top: 10px;
        margin-bottom: 20px;
      }  
    }
  }
`;