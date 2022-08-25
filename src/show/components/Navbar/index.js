import { connect } from 'react-redux';

import Navbar from './view';

export default connect(state => ({
  currentUser: state.user
}))(Navbar);
