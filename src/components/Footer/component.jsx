import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

import FontAwesome from 'react-fontawesome';

import strings from '../../helpers/strings';

export default class TopBar extends Component {

  render() {
    return (
      <footer>
        <FontAwesome name='tint' />
        <ul>
          <li>David Maitland</li>
          <li>Josh Farrant</li>
          <li>Dan Katri</li>
          <li>Adam Bowles</li>
        </ul>
        <h2 className='title'>{strings.appName}</h2>
      </footer>
    );
  }
}
