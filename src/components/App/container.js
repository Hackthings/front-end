import { connect } from 'react-redux';
import App from './component.jsx';

import { location } from '../../store/actions';
const { setLocation } = location;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (latitude = 0, longitude = 0) => {
      dispatch(setLocation(latitude, longitude));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
