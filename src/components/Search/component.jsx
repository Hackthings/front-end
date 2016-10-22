import React, { Component, PropTypes } from 'react';
import './style.css';

import { search } from '../../helpers/algolia';

class Search extends Component {
  state = {
    results: []
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.latitude !== this.props.latitude || nextProps.longitude !== this.props.longitude) {
      this.getSearch();
    }
  }

  getSearch = () => {
    const helper = search(this.props.latitude, this.props.longitude);

    helper.on('result', content => {
      this.setState({ results: content.hits });
    });

    helper.setQueryParameter('aroundRadius', 3 * 1000);
    helper.setQueryParameter('aroundLatLng', '52.47692018502711, -1.8878567218780518');
    helper.setQueryParameter('getRankingInfo', true);

    this.setState({ results: [] });

    helper.search();
  }

  render () {
    const { results } = this.state;
    return (
      <div className='Search'>
        <p>latitude: {this.props.latitude}</p>
        <p>longitude: {this.props.longitude}</p>
        <div>
          {results.map((result, index) => {
            return (
              <div key={index}>
                <span>{result.description} ({result._rankingInfo.geoDistance}m away)</span>
                <img src={result.photoURL} width='100' height='100' />
              </div>
            );
          })}
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
