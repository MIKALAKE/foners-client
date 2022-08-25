import { connect } from 'react-redux';

import { getConstructor } from 'process/slices/constructorsSlice';

import Constructor from './view';

export default connect(
  state => ({
    constructor: state.constructors.constructor
  }),
  { getConstructor: getConstructor }
)(Constructor);
