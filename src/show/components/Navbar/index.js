import { connect } from 'react-redux';

import { logOut } from 'process/slices/userSlice';

import Navbar from './view';

export default connect(
  state => ({
    currentUser: state.user,
    transient: state.transient
  }),
  {
    logOut: logOut
  }
)(Navbar);
