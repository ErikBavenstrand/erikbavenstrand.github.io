import styled from 'styled-components';

export const StyledContact = styled.div`
  position: relative;
  min-height: 60vh;

  h1 {
    font-size: 10vw;
    font-weight: 500;
    margin-bottom: 100px;
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
      margin-bottom: 100px;
    }
    h2 {
      margin-top: -30px;
      font-size: 3vw;
      font-weight: 300;
      margin-bottom: 30px;
    }
  }

  .wrapper {
    .container {
      .copybutton {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed black;
        justify-content: space-between;
        border-radius: 3px;
        cursor: pointer;
        padding: 5px;
        animation-duration: 4s;
        width: 40vw;
        margin: auto;
        font-size: 3vw;

        &:focus {
          animation-name: example;
        }

        img {
          width: 10%;
          fill: red !important;
        }

        div {
          width: 10%;
        }

        .hide {
          display: inline-block;
          margin: 0;
        }

        .hide:before {
          content: attr(data);
          unicode-bidi: bidi-override;
          direction: rtl;
        }
      }

      @media screen and (min-width: 800px) {
        .copybutton {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px dashed black;
          justify-content: space-between;
          border-radius: 3px;
          cursor: pointer;
          padding: 5px;
          animation-duration: 4s;
          width: 25vw;
          margin: auto;
          font-size: 2vw;

          &:focus {
            animation-name: example;
          }

          img {
            width: 10%;
            fill: red !important;
          }

          div {
            width: 10%;
          }

          .hide {
            display: inline-block;
            margin: 0;
          }

          .hide:before {
            content: attr(data);
            unicode-bidi: bidi-override;
            direction: rtl;
          }
        }
      }

      .text {
        p {

        }
      }
    }
  }
`;