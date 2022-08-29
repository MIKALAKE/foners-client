import { connect } from 'react-redux';

import { deleteDriver, editDriver } from 'process/slices/driversSlice';

import DriverCardAdmin from './view';

export default connect(state => ({}), {
  deleteDriver: deleteDriver,
  editDriver: editDriver
})(DriverCardAdmin);
