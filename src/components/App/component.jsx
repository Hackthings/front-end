import React, { Component, PropTypes } from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.css';

import strings from '../../helpers/strings';

import TopBar from '../TopBar';
import Search from '../Search';
import Footer from '../Footer';

class App extends Component {
  componentDidMount () {
    document.title = strings.appName;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setLocation(position.coords.latitude, position.coords.longitude);
      }, this.geoFailed);
    } else {
      this.geoFailed('This site needs a browser with geolocation support');
    }
  }

  setLocation = (latitude = 0, longitude = 0) => {
    this.props.setLocation(latitude, longitude);
  }

  geoFailed = (error) => {
    window.alert(error);
  }

  render () {
    return (
      <div className='App'>
        <TopBar />
        <Search />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  setLocation: PropTypes.func
};

export default App;
