import styled from 'styled-components';

export const StyledLanding = styled.div`
  position: relative;
  height: 100vh;
  width: 70vw;
  display: flex;
  align-items: center;
  .container {
    position: absolute;
    display: flex;
    align-items: center;
    .text {
      float: left;
      width: 50%;
      h1 {
        text-align: left;
        opacity: 0;
        animation: fadeIn ease 3s; 
        animation-iteration-count: 1; 
        animation-fill-mode: forwards;
        font-size: 9vw;
        margin-bottom: 0;
      }
      h2 {
        text-align: left;
        opacity: 0;
        animation: fadeIn ease 3s; 
        animation-iteration-count: 1; 
        animation-fill-mode: forwards;
        animation-delay: 1s;
        font-size: 9vw;
        margin-top: 0;
        margin-bottom: 0;
      }
      p {
        text-align: left;
        font-size: 2vw;
        opacity: 0;
        animation: fadeIn ease 3s; 
        animation-iteration-count: 1; 
        animation-fill-mode: forwards;
        animation-delay: 3s;
      }
    }
    .portrait {
      width: 50%;
      float: right;
      img {
        border-radius: 50%;
        width: 80%;
        height: auto;
        border: 1px solid #ddd;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;