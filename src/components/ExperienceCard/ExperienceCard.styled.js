import styled from 'styled-components';

export const StyledExperienceCard = styled.div`
  .section-large {
    display: none;
  }

  .section-small {
    display: flex;
    flex-direction: column; 
    height: auto;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.lightBorder};
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    margin-bottom: 30px;

    .logo {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
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
        font-size: 5vw;
        margin: 10px 10px 0 10px;
        font-weight: 500;
        text-align: left;
      }
    }

    .facts {
      padding: 0 10px 10px 10px;
      width: 100%;
      font-size: 4.20vw;
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
      font-size: 4vw;
      font-weight: 300;
      
      p {
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .section-small {
      display: none;
    }
    .section-large {
      display: flex;
      flex-direction: column; 
      height: auto;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.lightBorder};
      box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
      margin-bottom: 40px;

      .meta {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;

        .logo {
          flex: 0.2;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px 0 0 5px;
          padding: 5px;
          img {
            width: 100%;
          }
        }
        
        .info {
          flex: 0.8;
          padding: 10px 10px 10px 10px;
          .title {
            p {
              font-size: 2vw;
              margin: 0;
              font-weight: 500;
              text-align: left;
            }
          }

          .facts {
            width: 100%;
            font-size: 1.5vw;
            margin-bottom: 10px;
            p {
              margin: 0;
              text-align: left;
              hyphens: auto;
              font-weight:400;
            }
            .year {
              margin: 0;
              font-weight: 300;
            }
          }

          .description {
            text-align: justify;
            hyphens: auto;
            font-size: 1.2vw;
            font-weight: 300;
            
            p {
              margin: 0;
            }
          }
        }
      }
    }
  }
`;