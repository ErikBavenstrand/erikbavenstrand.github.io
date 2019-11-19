import styled from 'styled-components';

export const StyledProjects = styled.div`
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

  .container {

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
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      grid-column-gap: 30px;
    }
  }
  @media screen and (min-width: 1200px) {
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
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: auto;
      grid-column-gap: 30px;
    }
  }
`;