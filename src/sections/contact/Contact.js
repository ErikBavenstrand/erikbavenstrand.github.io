import React from 'react';
import { StyledContact } from './Contact.styled';
import CopyIcon from '../../assets/Icons/Copy.svg';

class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      border: "1px solid black"
    }
  }

  copyToClipboard() {
    var textField = document.createElement('textarea');
    textField.innerText = 'erik@bavenstrand.se';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.setState({border: "1px solid #29AE60"})
  };

  render() {
    return (
      <StyledContact id="contact">
        <h1>Contact</h1>
        <div class="text">
          
        </div>
        <div class="copybutton" onClick={this.copyToClipboard.bind(this)} style={{"border": this.state.border}}>
          <div></div>
          <p class="hide" data="es.dnartsnevab@kire"></p>
          <img src={CopyIcon} alt="Copy"/>
        </div>
      </StyledContact>
    )
  }
}

export default Contact;