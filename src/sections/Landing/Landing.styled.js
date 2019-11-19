import styled from 'styled-components';

export const StyledLanding = styled.div`
  position: relative;
  min-height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;

  .container {  
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .section {
      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: column; 
      height: auto;
      
      .greeting {
        width: 100%;
        p {
          font-weight: 700;
          font-size: 15vw;
          text-align: left;
          margin: 0;
        }
      }

      .about {
        width: 100%;
        p {
          font-weight: 400;
          font-size: 4vw;
          text-align: left;
          margin: 0 5px 0 0;
        }
      }

      .resume {
        width: 100%;
        margin-top: 5px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;

        .download {
          display: flex;
          border: 0.2vw solid ${({ theme }) => theme.primaryDark};
          text-decoration: none;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          padding: 5px 20px;

          p {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.primaryDark};
            font-size: 3vw;
            margin: 0;
          }

          &:hover {
            
          }
        }

        .social {
          display: flex;
          a {
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 4vw;

            img {
              border: 0;
              border-radius: 0;
              height: 100%;
              width: auto;
            }
          }
        }
      }

      img {
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.lightBorder};
        width: 70vw;
      }
    }
    @media screen and (min-width: 800px) {
      .section {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column; 
        height: auto;
        
        .greeting {
          width: 100%;
          
          p {
            font-weight: 700;
            font-size: 7vw;
            text-align: left;
            margin: 0;
          }
        }

        .about {

          p {
            font-weight: 400;
            font-size: 2vw;
            text-align: left;
            margin: 0 5px 0 0;
          }
        }

        .resume {
          width: 100%;
          margin-top: 40px;
          display: flex;
          justify-content: space-between;

          .download {
            display: flex;
            border: 0.08vw solid ${({ theme }) => theme.primaryDark};
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            padding: 5px 20px;

            p {
              display: flex;
              align-items: center;
              color: ${({ theme }) => theme.primaryDark};
              font-size: 1.1vw;
              margin: 0;
            }

            &:hover {
              
            }
          }

          .social {
            display: flex;
            a {
              text-decoration: none;
              font-weight: bold;
              border-radius: 5px;
              cursor: pointer;
              margin-right: 1vw;

              img {
                border: 0;
                border-radius: 0;
                width: 3vw;
              }
            }
          }
        }

        img {
          width: 100%;
        }
      }
    }
  }
`;