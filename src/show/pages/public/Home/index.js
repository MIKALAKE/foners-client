import { connect } from 'react-redux';

import { getEvent } from 'process/slices/eventsSlice';
import { getConstructors } from 'process/slices/constructorsSlice';

import Home from './view';

export default connect(
  state => ({
    constructors: state.constructors.constructors,
    event: state.events.event
  }),
  {
    getConstructors: getConstructors,
    getEvent: getEvent
  }
)(Home);
