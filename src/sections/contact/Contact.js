import React from 'react';
import { StyledContact } from './Contact.styled';
import { createGlobalStyle } from 'styled-components'
import CopyIcon from '../../assets/Icons/Copy.svg';
import CheckmarkIcon from '../../assets/Icons/Checkmark.svg';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

const TippyTheme = createGlobalStyle`
  .tippy-tooltip.tomato-theme {
    background: #6BC38D;
    color: ${({ theme }) => theme.primaryLight};
  }

  .tippy-tooltip.tomato-theme .tippy-content {

    div {
      div {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 20%;
        }

        p {
          margin: 5px;
        }
      }
    }
  }

  .tippy-tooltip.tomato-theme[data-animatefill] {
    background-color: transparent;
  }

  .tippy-tooltip.tomato-theme .tippy-backdrop {
    background-color: #6BC38D;
  }

  .tippy-popper[x-placement^='top'] .tippy-tooltip.tomato-theme .tippy-arrow {
    border-top-color: #6BC38D;
  }
  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.tomato-theme .tippy-arrow {
    border-bottom-color: #6BC38D;
  }
  .tippy-popper[x-placement^='left'] .tippy-tooltip.tomato-theme .tippy-arrow {
    border-left-color: #6BC38D;
  }
  .tippy-popper[x-placement^='right'] .tippy-tooltip.tomato-theme .tippy-arrow {
    border-right-color: #6BC38D;
  }
  .tippy-tooltip.tomato-theme .tippy-roundarrow {
    fill: #6BC38D;
  }
`;

class Contact extends React.Component {

  copyToClipboard() {
    var textField = document.createElement('textarea');
    textField.innerText = 'erik@bavenstrand.se';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.animateButton.bind(this);
  };

  animateButton() {

  }

  render() {
    return (
      <StyledContact id="contact">
        <h1>Contact</h1>
        <TippyTheme />
        <div class="wrapper">
          <div class="container">
            <Tippy 
              content={
                <div>
                  <img src={CheckmarkIcon} alt="CheckmarkIcon"/>
                  <p>Copied</p>
                </div>
                }
              animation="shift-away"
              theme="tomato"
              trigger="click"
              duration="250"
            >
              <div class="copybutton" onClick={this.copyToClipboard.bind(this)}>
                <p class="hide" data="es.dnartsnevab@kire"></p>
                <img src={CopyIcon} alt="Copy"/>
              </div>
            </Tippy>
            <div class="text">
              <p>Feel free to send me an email if you have any questions. </p>
            </div>
          </div>
        </div>
      </StyledContact>
    )
  }
}

export default Contact;