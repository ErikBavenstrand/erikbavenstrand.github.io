import styled from 'styled-components';

export const StyledSkills = styled.div`
  position: relative;
  min-height: 100vh;

  h1 {
    font-weight: 600;
    margin-bottom: 0;
  }
  
  h2 {
    font-weight: 300;
    font-size: 5.5vw;
    margin-top: 0;
    margin-bottom: 30px;
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
      font-weight: 500;
      font-size: 6vw;
      margin-bottom: 30px;
      width: 100%;
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
        font-weight: 600;
        font-size: 4vw;
      }  
    }
  }
`;