import { connect } from 'react-redux';

import { deleteEvent, editEvent } from 'process/slices/eventsSlice';

import EventCardAdmin from './view';

export default connect(state => ({}), {
  deleteEvent: deleteEvent,
  editEvent: editEvent
})(EventCardAdmin);
