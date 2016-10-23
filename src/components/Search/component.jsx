import React, { Component, PropTypes } from 'react';
import './style.css';

import { search } from '../../helpers/algolia';

import BathroomList from '../BathroomList';
import Map from '../Map';

class Search extends Component {
  state = {
    results: []
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.latitude !== this.props.latitude || nextProps.longitude !== this.props.longitude) {
      this.getSearch(nextProps.latitude, nextProps.longitude);
    }
  }

  getSearch = (latitude, longitude) => {
    const helper = search(latitude, longitude);

    helper.on('result', content => {
      this.setState({ results: content.hits });
    });

    helper.setQueryParameter('aroundRadius', 3 * 1000);
    helper.setQueryParameter('aroundLatLng', `${latitude}, ${longitude}`);
    helper.setQueryParameter('getRankingInfo', true);

    this.setState({ results: [] });

    helper.search();
  }

  render () {
    const { results } = this.state;
    return (
      <div className='search'>
        {/* <p>latitude: {this.props.latitude}</p>
        <p>longitude: {this.props.longitude}</p> */}

        <div className='results'>
          <BathroomList items={results} />
        </div>
        <div className='map'>
          <Map results={this.state.results} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default Search;
