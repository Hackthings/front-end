import React, { Component } from 'react';
import './style.css';

import strings from '../../helpers/strings';

import TopBar from '../TopBar';

class App extends Component {
  componentDidMount () {
    document.title = strings.appName;
  }

  render() {
    return (
      <div className='App'>
        <TopBar />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>asd</h2>
      </div>
    );
  }
}

export default App;
