import React, { Component, PropTypes } from 'react';
import './style.css';

import BathroomItem from '../BathroomItem';

class BathroomList extends Component {

  render () {
    const { items } = this.props;

    return (
      <ul className='list'>
        {items.map((item, index) => {
          return (
            <BathroomItem
              item={item}
              key={index}
            />
          );
        })}
      </ul>
    );
  }
}

BathroomList.propTypes = {
  items: PropTypes.array
};

export default BathroomList;
