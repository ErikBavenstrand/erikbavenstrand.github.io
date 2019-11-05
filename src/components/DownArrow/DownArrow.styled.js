import styled from 'styled-components';

export const StyledDownArrow = styled.div`
  position: absolute;
  bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 6rem;
  height: 2rem;
  a {
    cursor: pointer;
  }
  :hover {
    span {
      height: 0.2rem;
      :first-child {
        transform: rotate(30deg);
        transform-origin: right bottom;
      }
      :nth-child(2) {
        transform: rotate(-30deg);
        transform-origin: left bottom;
      }
    }
  }
  span {
    border-radius: 3px;
    width: 2rem;
    height: 0.1rem;
    position: relative;
    display: inline-block;
    background: ${({ theme }) => theme.primaryDark};
    transition-duration: 0.4s;
    :first-child {
      transform: rotate(20deg);
      transform-origin: right bottom;
    }
    :nth-child(2) {
      transform: rotate(-20deg);
      transform-origin: left bottom;
    }
  }
  p {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primaryDark};
  }
`;