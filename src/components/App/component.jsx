import React, { Component, PropTypes } from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.css';

import strings from '../../helpers/strings';

import TopBar from '../TopBar';
import Footer from '../Footer';

class App extends Component {
  componentDidMount () {
    document.title = strings.appName;
    this.props.test();
  }

  render() {
    return (
      <div className='App'>
        <TopBar />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

App.PropTypes = {
  test: PropTypes.func
}

export default App;
