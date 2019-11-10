import styled from 'styled-components';

export const StyledLanding = styled.div`
  position: relative;
  height: 80vh;
  margin-bottom: 20vh;
  display:flex;
  align-items: center;
  justify-content: center;
  .container {
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: auto;

    .section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column; 
      height: auto;
      
      .greeting {
        font-size: 19vw;
        font-weight: 700;
        p {
          text-align: left;
          margin: 0;
        }
      }

      img {
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.lightBorder};
        width: 100%;
      }
    }
  }
`;