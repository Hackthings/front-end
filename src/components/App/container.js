import { connect } from 'react-redux';
import App from './component.jsx';

import { example } from '../../actions';
const { exampleAction } = example;
// const { updateDashboard } = dashboards;
// const { setTimer } = refresh;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    test: () => {
      console.log('dispatching exampleAction');
      dispatch(exampleAction('asdasda'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
