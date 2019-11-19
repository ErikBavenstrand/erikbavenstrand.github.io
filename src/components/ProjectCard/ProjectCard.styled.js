import styled from 'styled-components';

export const StyledProjectCard = styled.div`
  .section {
    display: flex;
    flex-direction: column; 
    height: auto;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.lightBorder};
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    margin-bottom: 30px;

    .image {
      height: 50vw;
      .img {
        display: flex;
        align-items: flex-end;
        border-radius: 5px 5px 0 0;
        border-bottom: 1px solid ${({ theme }) => theme.lightBorder};
        margin: 0;
        height: 100%;
        overflow: hidden;
        background-position: center center;
        background-size: cover;
        
        .tools {
          height: 16%;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.7);
          display: flex;
          align-content: center;
          justify-content: flex-start;
          padding: 3px 3px 3px 3px;
          img {
            height: 100%;
            width: auto;
            margin-right: 5px;
          }
        }
      }
    }

    .title {
      p {
        font-size: 4.55vw;
        margin: 10px;
        font-weight: 500;
        text-align: left;
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

    .buttons {
      display: flex;
      margin: 10px;
      justify-content: space-between;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        border: 1px solid ${({ theme }) => theme.lightBorder};
        border-radius: 0.25em;
        cursor: pointer;

        &:hover {
          background: ${({ theme }) => theme.primaryGrey};
        }
        
        img {
          width: 4vw;
        }
        .vertical { 
          margin-left: 2px;
          margin-right: 2px;
          border: 0.5px solid ${({ theme }) => theme.lightBorder};
          height: 100%; 
          float: left;
        } 

        p {
          font-size: 3vw;
          color: ${({theme}) => theme.primaryDark};
          margin: 0;
        }
      }
    }

    @media screen and (min-width: 800px) {
      .image {
        height: 15vw;
        .img {
          display: flex;
          align-items: flex-end;
          border-radius: 5px 5px 0 0;
          border-bottom: 1px solid ${({ theme }) => theme.lightBorder};
          margin: 0;
          height: 100%;
          overflow: hidden;
          background-position: center center;
          background-size: cover;
          
          .tools {
            height: 15%;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-content: center;
            justify-content: flex-start;
            padding: 3px 3px 3px 3px;
            img {
              height: 100%;
              width: auto;
              margin-right: 5px;
            }
          }
        }
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        p {
          font-size: 1.5vw;
          margin: 10px;
          font-weight: 500;
          text-align: left;
        }
      }

      .description {
        padding: 0 10px 10px 10px;
        text-align: justify;
        hyphens: auto;
        font-size: 1.2vw;
        font-weight: 300;
        p {
          margin: 0;
        }
      }

      .buttons {
        display: flex;
        margin: 10px;
        justify-content: space-between;
      
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px;
          border: 1px solid ${({ theme }) => theme.lightBorder};
          border-radius: 0.25em;
          cursor: pointer;

          &:hover {
            background: ${({ theme }) => theme.primaryGrey};
          }
          height: 20px;
          img {
            width: 16px;
            height: 16px;
          }
          .vertical { 
            margin-left: 2px;
            margin-right: 2px;
            height: 16px;
            border: 0.5px solid ${({ theme }) => theme.lightBorder};
            float: left;
          } 
          p {
            font-size: 11px;
            color: ${({theme}) => theme.primaryDark};
            margin: 0;
          }
        }
      }
    }
  }
`;