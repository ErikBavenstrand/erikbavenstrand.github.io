import styled from 'styled-components';

export const StyledEducation = styled.div`
  position: relative;
  min-height: 100vh;

  h1 {
    font-size: 10vw;
    font-weight: 500;
    margin-bottom: 30px;
  }
  h2 {
    margin-top: -30px;
    font-size: 8vw;
    font-weight: 300;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4vw;
      font-weight: 500;
      margin-bottom: 30px;
    }
    h2 {
      margin-top: -30px;
      font-size: 3vw;
      font-weight: 300;
      margin-bottom: 30px;
    }
  }

  .container { 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: auto;
    margin-bottom: 20px;
  }
`;