import React, { Component } from 'react';
import './style.css';

import FontAwesome from 'react-fontawesome';

export default class TopBar extends Component {
  render () {
    return (
      <footer>
        <div className='made-by'>
          <p>Made with <FontAwesome name='heart-o' /> by:</p>
          <ul className='makers'>
            <li>David Maitland</li>
            <li>Josh Farrant</li>
            <li>Dan Katri</li>
            <li>Adam Bowles</li>
          </ul>
        </div>
        <p className='copyright'><FontAwesome name='copyright' /> 4 idiots</p>
      </footer>
    );
  }
}
