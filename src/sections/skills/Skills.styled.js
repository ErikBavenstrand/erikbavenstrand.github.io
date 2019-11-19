import styled from 'styled-components';

export const StyledSkills = styled.div`
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

  .container-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      border-radius: 5px;
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
          font-weight: 500;
          font-size: 4vw;
        }  
      }
    }

    @media screen and (min-width: 800px) {
      .container {
        width: 47%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.lightBorder};
        box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
        justify-content: space-around;
        margin-bottom: 20px;
        
        h1 {
          font-weight: 500;
          font-size: 2.5vw;
          margin-bottom: 30px;
          width: 100%;
          height: 3vw;
        }
        
        .section {
          width: 50%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          img {
            height: 7vw;
            width: auto;
            border-radius: 0;
          }
          p {
            margin-top: 10px;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 1.2vw;
          }  
        }
      }
    }
  }
`;