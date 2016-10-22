import React, { Component } from 'react';
import './style.css';

import TopBar from '../TopBar';

class App extends Component {
  componentDidMount () {
    document.title = 'Spend a penny';
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
