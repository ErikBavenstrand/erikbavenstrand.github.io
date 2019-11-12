import styled from 'styled-components';

export const StyledContact = styled.div`
  position: relative;
  height: 100vh;

  h1 {
    text-align: center;
  }
  .copybutton {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;

    img {
      width: 10%;
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
`;