import { connect } from 'react-redux';

import { getDrivers } from 'process/slices/driversSlice';
import { getConstructors } from 'process/slices/constructorsSlice';

import Standings from './view';

export default connect(
  state => ({
    constructors: state.constructors.constructors,
    drivers: state.drivers.drivers
  }),
  {
    getConstructors: getConstructors,
    getDrivers: getDrivers
  }
)(Standings);
