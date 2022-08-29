import { connect } from 'react-redux';

import {
  deleteConstructor,
  editConstructor
} from 'process/slices/constructorsSlice';

import ConstructorCardAdmin from './view';

export default connect(state => ({}), {
  deleteConstructor: deleteConstructor,
  editConstructor: editConstructor
})(ConstructorCardAdmin);
