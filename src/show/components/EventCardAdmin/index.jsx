import { useDispatch } from 'react-redux';
import { Fragment, useState } from 'react';

import { Button, EventInfoCard, Modal, TextField } from '../';
import { deleteEvent, editEvent } from 'process/slices/eventsSlice';

const EventCardAdmin = ({ event }) => {
  const [eventAdminModal, setEventAdminModal] = useState(false);
  const [editEventModal, setEditEventModal] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event);

  const dispatch = useDispatch();

  const updateEvent = () => {
    dispatch(editEvent(editedEvent));
    setEditEventModal(false);
  };

  return (
    <Fragment>
      <div className='flex flex-col w-72 h-64 my-5 ml-5 cursor-pointer bg-charade rounded-md'>
        <div className='flex flex-col items-center'>
          <div className='flex text-secondary text-lg'>{event.country}</div>
          <img
            src={event.cover_url}
            alt={event.name}
            className='justify-center w-28 h-28 mt-5'
          />
          <div className='flex w-full h-full ml-28 mt-16'>
            <Button
              label='Info'
              variant='primary'
              onClick={() => setEventAdminModal(true)}
            />
          </div>
        </div>
      </div>

      <Modal setVisible={setEventAdminModal} visible={eventAdminModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-3xl font-extrabold text-charade'>
                {event.name}
              </h2>
            </div>
            <div className='mt-8 space-y-6'>
              <div className='rounded-md space-y-px'>
                <EventInfoCard key={event.id} event={event} />
              </div>
              <div className='flex items-center justify-between w-full'>
                <div className='flex w-full flex-row'>
                  <Button
                    variant='secondary'
                    label='Edit'
                    onClick={setEditEventModal}
                  />
                  <Button
                    variant='primary'
                    label='Delete'
                    onClick={() => dispatch(deleteEvent({ id: event.id }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal setVisible={setEditEventModal} visible={editEventModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='mt-2 text-center text-3xl font-extrabold text-charade'>
                Edit Event
              </h2>
            </div>
            <div className='flex mt-8 flex-col justify-center space-y-6'>
              <div className='rounded-md pace-y-px'>
                <div className='flex flex-col w-full space-y-5 justify-between'>
                  <div>
                    <TextField
                      label='Name:'
                      type='text'
                      placeholder='Name'
                      value={editedEvent.name}
                      onChange={e =>
                        setEditedEvent({
                          ...editedEvent,
                          name: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='City:'
                      type='text'
                      placeholder='City'
                      value={editedEvent.city}
                      onChange={e =>
                        setEditedEvent({
                          ...editedEvent,
                          city: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Cover:'
                      type='url'
                      placeholder='Cover URL'
                      value={editedEvent.cover_url}
                      onChange={e =>
                        setEditedEvent({
                          ...editedEvent,
                          cover_url: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Descritpion:'
                      type='text'
                      placeholder='Descritpion'
                      value={editedEvent.description}
                      onChange={e =>
                        setEditedEvent({
                          ...editedEvent,
                          description: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Country:'
                      type='text'
                      placeholder='Country'
                      value={editedEvent.country}
                      onChange={e =>
                        setEditedEvent({
                          ...editedEvent,
                          country: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Date:'
                      type='date'
                      placeholder='Date'
                      value={editedEvent.date}
                      onChange={e =>
                        setEditedEvent({
                          ...editedEvent,
                          date: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className='flex items-cente justify-between w-full'>
                <div className='flex w-full flex-row '>
                  <Button
                    variant='secondary'
                    label='Save'
                    onClick={updateEvent}
                  />
                  <Button
                    variant='primary'
                    label='Cancel'
                    onClick={() => setEditEventModal(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default EventCardAdmin;
