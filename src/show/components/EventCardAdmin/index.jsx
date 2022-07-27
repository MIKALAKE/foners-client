import axios from 'axios';
import { Fragment, useState } from 'react';

import { Button, Modal } from '../';

const EventCardAdmin = ({ event, events, setEvents }) => {
  const [eventAdminModal, setEventAdminModal] = useState(false);

  const deleteEvent = () =>
    axios.delete(`http://localhost:3000/v1/events/${event.id}`).then(res => {
      setEventAdminModal(false);
      setEvents(events.filter(item => event.id !== item.id));
    });

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
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Event Name
              </h2>
            </div>
            <div className='mt-8 space-y-6'>
              <div className='rounded-md shadow-sm -space-y-px'></div>

              <div className='flex items-center justify-between w-full'>
                <div className='flex w-full flex-row'>
                  <Button variant='secondary' label='Edit' />
                  <Button
                    variant='primary'
                    label='Delete'
                    onClick={deleteEvent}
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
