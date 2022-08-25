import { connect } from 'react-redux';

import { register } from 'process/slices/userSlice';
import { updateProps } from 'process/slices/transientSlice';

import Register from './view';

export default connect(
  state => ({
    transien: state.transient
  }),
  {
    register: register,
    updateProps: updateProps
  }
)(Register);
