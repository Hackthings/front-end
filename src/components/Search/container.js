import { connect } from 'react-redux';
import Search from './component.jsx';

const mapStateToProps = (state) => {
  return {
    latitude: state.location.latitude,
    longitude: state.location.longitude
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
