import styled from 'styled-components';

export const StyledProjectCard = styled.div`
  .section {
    display: flex;
    flex-direction: column; 
    height: auto;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.lightBorder};
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    margin-bottom: 20px;

    .image {
      height: 40vw;
      .img {
        border-radius: 0px;
        border-top: 1px solid ${({ theme }) => theme.lightBorder};
        border-bottom: 1px solid ${({ theme }) => theme.lightBorder};
        margin: 0;
        height: 100%;
        overflow: hidden;
        background-position: center center;
        background-size: cover;
      }
    }

    .title {
      p {
        font-size: 4.55vw;
        margin: 10px;
        font-weight: 500;
        text-align: center;
      }
    }

    .tools {
      display: flex;
      align-content: center;
      justify-content: flex-start;
      height: ;
      padding: 5px 10px 10px 10px;
      img {
        width: 12%;
        height: 12%;
        margin-right: 5px;
      }
    }
    

    .description {
      padding: 0 10px 10px 10px;
      text-align: justify;
      hyphens: auto;
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
        padding: 2px;
        border: 1px solid ${({ theme }) => theme.lightBorder};
        border-radius: 0.25em;
        cursor: pointer;

        &:hover {
          background: ${({ theme }) => theme.primaryGrey};
        }

        img {
          width: 14px;
          height: 14px;
        }
        .vertical { 
          margin-left: 2px;
          margin-right: 2px;
          border: 0.5px solid ${({ theme }) => theme.lightBorder};
          height: auto; 
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
`;