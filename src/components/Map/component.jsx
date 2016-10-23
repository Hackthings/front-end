import React, { Component, PropTypes } from 'react';
import './style.css';

import GoogleMap, { GoogleApiWrapper, Marker } from 'google-maps-react';
import keys from '../../helpers/keys';

class Map extends Component {
  state = {
    googleMapsKey: keys.googleMaps.apiKey,
    latitude: this.props.latitude,
    longitude: this.props.longitude
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      latitude: nextProps.latitude,
      longitude: nextProps.longitude
    });
  }

  renderMarkers = () => {
    return this.props.results.map(result => {
      return (
        <Marker key={result.objectID}
          name={result.ownerName}
          position={result._geoloc}
        />
      );
    });
  }

  render () {
    return (
      <GoogleMap
        className='map'
        google={this.props.google}
        center={{ lat: this.state.latitude, lng: this.state.longitude }}
        zoom={15}
      >
        {this.renderMarkers()}
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  results: PropTypes.array
};

export default GoogleApiWrapper({
  apiKey: keys.googleMaps.apiKey
})(Map);
