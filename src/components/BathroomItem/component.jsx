import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import './style.css';

class BathroomItem extends Component {

  state = {
    reserving: false
  }

  _onReserve = () => {
    if (!this.state.reserving) {
      this.setState({
        reserving: true
      });

      setTimeout(() => {
        this.setState({
          reserving: false
        });
      }, 20000);

      let url = 'https://pooping.website/1738';
      url += '?number=443301200292';
      url += '&toName=Dan';
      url += '&fromName=Josh';
      url += '&time=4';

      var oReq = new XMLHttpRequest();
      oReq.open('GET', url);
      oReq.setRequestHeader('Authorization', 'dankmemes');
      oReq.send();
      console.debug('sent');
    } else {
      return;
    }
  }

  render () {
    const { item, key } = this.props;

    const accessible = item.accessibility && item.accessibility.length > 0;

    return (
      <li
        key={key}
        className='item'
      >
        <div
          className='image-container'
          style={{
            backgroundImage: `url(${item.photoURL})`
          }}
        >
          <div className='image-overlay'>
            <div className='price'>£{(item.price / 100).toFixed(2)}</div>
            {
              accessible
              ? <div className='accessible'><FontAwesome name='wheelchair' /></div>
              : ''
            }
          </div>
          <div
            className='button'
            onClick={this._onReserve}
          >
            Reserve
          </div>
        </div>
        <div className='description-container'>
          <div className='description'>
            {item.description}
          </div>
          <div className='info'>
            <div className='stars'>
              <FontAwesome name='star' className={item.rating >= 1 ? 'on' : 'off'} />
              <FontAwesome name='star' className={item.rating >= 2 ? 'on' : 'off'} />
              <FontAwesome name='star' className={item.rating >= 3 ? 'on' : 'off'} />
              <FontAwesome name='star' className={item.rating >= 4 ? 'on' : 'off'} />
              <FontAwesome name='star' className={item.rating >= 5 ? 'on' : 'off'} />
            </div>
            <div className='distance'>
              {item._rankingInfo.geoDistance}m away
            </div>
          </div>
        </div>
      </li>
    );
  }
}

BathroomItem.propTypes = {
  item: PropTypes.object,
  key: PropTypes.number
};

export default BathroomItem;
