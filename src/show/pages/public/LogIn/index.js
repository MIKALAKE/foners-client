import { connect } from 'react-redux';

import { logIn } from 'process/slices/userSlice';
import { updateProps } from 'process/slices/transientSlice';

import LogIn from './view';

export default connect(
  state => ({
    transient: state.transient
  }),
  {
    logIn: logIn,
    updateProps: updateProps
  }
)(LogIn);
