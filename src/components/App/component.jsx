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
        this.setLatitude(position.coords.latitude);
        this.setLongitude(position.coords.longitude);
      }, this.geoFailed);
    } else {
      this.geoFailed('This site needs a browser with geolocation support');
    }
  }

  setLatitude = (latitude) => {
    this.props.setLatitude(latitude);
  }

  setLongitude = (longitude) => {
    this.props.setLongitude(longitude);
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
  setLatitude: PropTypes.func,
  setLongitude: PropTypes.func
};

export default App;
