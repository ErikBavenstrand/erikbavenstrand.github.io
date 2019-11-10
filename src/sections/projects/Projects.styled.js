import styled from 'styled-components';

export const StyledProjects = styled.div`
  position: relative;
  min-height: 100vh;

  h1 {
    font-weight: 600;
    margin-bottom: 30px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: auto;
    margin-bottom: 20px;
  }
`;