import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

import strings from '../../helpers/strings';

export default class TopBar extends Component {

  render() {
    return (
      <div className='header'>
        <img src={logo} className='logo' alt={strings.appName} />
        <h1 className='title'>{strings.appName}</h1>
      </div>
    );
  }
}
