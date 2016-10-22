import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

export default class TopBar extends Component {

  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}
