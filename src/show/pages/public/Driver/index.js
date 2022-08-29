import { connect } from 'react-redux';

import { getDriver } from 'process/slices/driversSlice';

import Driver from './view';

export default connect(
  state => ({
    driver: state.drivers.driver
  }),
  {
    getDriver: getDriver
  }
)(Driver);
