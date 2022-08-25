import { connect } from 'react-redux';

import {
  addConstructor,
  getConstructors
} from 'process/slices/constructorsSlice';
import { updateProps } from 'process/slices/transientSlice';
import { addEvent, getEvents } from 'process/slices/eventsSlice';
import { addDriver, getDrivers } from 'process/slices/driversSlice';

import Admin from './view';

export default connect(
  state => ({
    constructors: state.constructors.constructors,
    drivers: state.drivers.drivers,
    events: state.events.events,
    transien: state.transient
  }),
  {
    addConstructor: addConstructor,
    addDriver: addDriver,
    addEvent: addEvent,
    getConstructors: getConstructors,
    getDrivers: getDrivers,
    getEvents: getEvents,
    updateProps: updateProps
  }
)(Admin);
