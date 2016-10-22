import { connect } from 'react-redux';
import App from './component.jsx';

import { location } from '../../store/actions';
const { setLatitude, setLongitude } = location;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLatitude: (latitude = 0) => {
      dispatch(setLatitude(latitude));
    },
    setLongitude: (longitude = 0) => {
      dispatch(setLongitude(longitude));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
