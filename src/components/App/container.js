import { connect } from 'react-redux';
import App from './component.jsx';

import { example } from '../../store/actions';
const { exampleAction } = example;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    test: () => {
      dispatch(exampleAction('asdasda'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
