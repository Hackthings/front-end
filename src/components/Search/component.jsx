import React, { Component, PropTypes } from 'react';
import './style.css';

import { search } from '../../helpers/algolia';

class Search extends Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.latitude !== this.props.latitude || nextProps.longitude !== this.props.longitude) {
      this.getSearch();
    }
  }

  getSearch = () => {
    console.log('new search');
    search(this.props.latitude, this.props.longitude).on('result', content => {
      content.hits.forEach(hit => {
        const { distance } = hit._rankingInfo.matchedGeoLocation;
        console.log('\nhit: ', hit);
        console.log('distance: ', distance);
      });
    });
  }

  render () {
    return (
      <div className='Search'>
        <p>latitude: {this.props.latitude}</p>
        <p>longitude: {this.props.longitude}</p>
      </div>
    );
  }
}

Search.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default Search;
