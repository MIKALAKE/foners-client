import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  ConstructorCardAdmin,
  DriverCardAdmin,
  EventCardAdmin,
  Modal,
  TextField
} from 'show/components';
import { addEvent, getEvents } from 'process/slices/eventsSlice';
import { addDriver, getDrivers } from 'process/slices/driversSlice';
import {
  addConstructor,
  getConstructors
} from 'process/slices/constructorsSlice';

const Admin = () => {
  const [createConstructorModal, setCreateConstructorModal] = useState(false);
  const [createDriverModal, setCreateDriverModal] = useState(false);
  const [createEventModal, setCreateEventModal] = useState(false);
  const [search, setSearch] = useState('');
  const [driver, setDriver] = useState({
    constructor_id: null,
    first_name: '',
    last_name: '',
    description: '',
    avatar_url: '',
    race_number: '',
    nickname: '',
    birth_date: '',
    nationality: '',
    height: '',
    points: ''
  });
  const [constructor, setConstructor] = useState({
    name: '',
    description: '',
    logo_url: '',
    cover_url: '',
    first_apparence: '',
    origins: '',
    titles: '',
    points: '',
    car_url: ''
  });
  const [event, setEvent] = useState({
    name: '',
    city: '',
    cover_url: '',
    description: '',
    country: '',
    date: ''
  });

  const dispatch = useDispatch();

  const events = useSelector(state => state.events.events);
  const drivers = useSelector(state => state.drivers.drivers);
  const constructors = useSelector(state => state.constructors.constructors);

  const postDriver = e => {
    e.preventDefault();
    dispatch(addDriver(driver));
    setCreateDriverModal(false);
  };

  const postEvent = e => {
    e.preventDefault();
    dispatch(addEvent(event));
    setCreateEventModal(false);
  };

  const postConstructor = e => {
    e.preventDefault();
    dispatch(addConstructor(constructor));
    setCreateConstructorModal(false);
  };

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getDrivers());
    dispatch(getConstructors());
  }, [dispatch]);

  return (
    <Fragment>
      <div className='flex w-full h-full bg-primary'>
        <div className='flex flex-col w-full h-full'>
          <div className='flex w-full h-20 my-5 items-center flex-row'>
            <TextField
              type='search'
              value={search}
              placeholder='Search'
              className='flex bg-white w-96 ml-5 rounded-lg h-8 text-secondary font-bold hover:outline outline-secondary outline-2'
              onChange={e => setSearch(e.target.value)}
            />

            <Button
              label='+ Constructor'
              variant='primary'
              onClick={() => setCreateConstructorModal(true)}
            />

            <Button
              label='+ Driver'
              variant='primary'
              onClick={() => setCreateDriverModal(true)}
            />

            <Button
              label='+ Event'
              variant='primary'
              onClick={() => setCreateEventModal(true)}
            />
          </div>
          <div className='h-full w-full'>
            <div className='w-full h-full grid grid-cols-5 gap-1 overflow-y-auto'>
              {constructors.length > 0 ? (
                constructors?.map(constructor => (
                  <ConstructorCardAdmin
                    key={constructor.id}
                    constructor={constructor}
                    constructors={constructors}
                  />
                ))
              ) : (
                <div className='flex w-full h-full t justify-center text-secondary'>
                  No Constructors yet
                </div>
              )}

              {drivers.length > 0 ? (
                drivers?.map(driver => (
                  <DriverCardAdmin
                    key={driver.id}
                    driver={driver}
                    drivers={drivers}
                  />
                ))
              ) : (
                <div className='flex w-full h-full justify-center text-secondary'>
                  No Drivers yet
                </div>
              )}

              {events?.length > 0 ? (
                events?.map(event => (
                  <EventCardAdmin
                    key={event.id}
                    event={event}
                    events={events}
                  />
                ))
              ) : (
                <div className='flex w-full h-full justify-center text-secondary'>
                  No Events yet
                </div>
              )}
            </div>
          </div>
        </div>

        <Modal setVisible={setCreateDriverModal} visible={createDriverModal}>
          <div className='min-h-full w-full flex items-center justify-center py-3'>
            <div className='max-w-md w-full'>
              <div className='flex flex-col w-full justify-center items-center'>
                <h2 className='mb-10 text-center text-3xl font-extrabold text-charade'>
                  Create a new Driver
                </h2>
              </div>
              <div className='flex flex-col space-y-6'>
                <div className='flex flex-col w-full space-y-5'>
                  <div>
                    <TextField
                      label='First Name:'
                      type='text'
                      placeholder='First Name'
                      value={driver.first_name}
                      onChange={e =>
                        setDriver({ ...driver, first_name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Last Name:'
                      type='text'
                      placeholder='Last Name'
                      value={driver.last_name}
                      onChange={e =>
                        setDriver({ ...driver, last_name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Nickname:'
                      type='text'
                      placeholder='Nickname'
                      value={driver.nickname}
                      onChange={e =>
                        setDriver({
                          ...driver,
                          nickname: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Race Number:'
                      type='number'
                      placeholder='Race Number'
                      value={driver.race_number}
                      onChange={e =>
                        setDriver({ ...driver, race_number: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Avatar:'
                      type='url'
                      placeholder='Avatar URL'
                      value={driver.avatar_url}
                      onChange={e =>
                        setDriver({ ...driver, avatar_url: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Birth Date:'
                      type='date'
                      placeholder='Birth Date'
                      value={driver.birth_date}
                      onChange={e =>
                        setDriver({ ...driver, birth_date: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Height:'
                      type='number'
                      placeholder='Height'
                      value={driver.height}
                      onChange={e =>
                        setDriver({ ...driver, height: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Nationality:'
                      type='text'
                      placeholder='Nationality'
                      value={driver.nationality}
                      onChange={e =>
                        setDriver({ ...driver, nationality: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Description:'
                      type='text'
                      placeholder='Description'
                      value={driver.description}
                      onChange={e =>
                        setDriver({ ...driver, description: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Points:'
                      type='number'
                      placeholder='Points'
                      value={driver.points}
                      onChange={e =>
                        setDriver({ ...driver, points: e.target.value })
                      }
                    />
                  </div>
                  <label>
                    <div className='flex w-full items-start'>
                      <div className='flex w-1/3'>Constructor:</div>
                      <div className='w-4/5'>
                        <select
                          className={
                            'rounded-md h-8 w-full bg-white-600 text-center outline-secondary outline-offset-4'
                          }
                          onChange={e =>
                            setDriver({
                              ...driver,
                              constructor_id: e.target.value
                            })
                          }>
                          <option value='null'></option>
                          {constructors?.map(constructor => (
                            <option key={constructor.id} value={constructor.id}>
                              {constructor.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </label>
                </div>
                <div className='flex w-full'>
                  <div className='flex flex-col items-center w-full'>
                    <Button
                      label='Create'
                      variant='primary'
                      onClick={postDriver}
                    />
                    <Button
                      onClick={() => setCreateDriverModal(false)}
                      label='Close'
                      variant='secondary'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          setVisible={setCreateConstructorModal}
          visible={createConstructorModal}>
          <div className='min-h-full w-full flex items-center justify-center py-3'>
            <div className='max-w-md w-full'>
              <div className='flex flex-col w-full justify-center items-center'>
                <h2 className='mb-10 text-center text-3xl font-extrabold text-charade'>
                  Create a new Constructor
                </h2>
              </div>
              <div className='flex flex-col space-y-6'>
                <div className='flex flex-col w-full space-y-5 justify-between'>
                  <div>
                    <TextField
                      label='Name:'
                      type='text'
                      placeholder='Name'
                      value={constructor.name}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          name: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Logo:'
                      type='url'
                      placeholder='Logo URL'
                      value={constructor.logo_url}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          logo_url: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Cover:'
                      type='url'
                      placeholder='Cover URL'
                      value={constructor.cover_url}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          cover_url: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Description:'
                      type='text'
                      placeholder='Description'
                      value={constructor.description}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          description: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='First Apparence:'
                      type='number'
                      placeholder='First Apparence'
                      value={constructor.first_apparence}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          first_apparence: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Origins:'
                      type='text'
                      placeholder='Origins'
                      value={constructor.origins}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          origins: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Titles:'
                      type='number'
                      placeholder='Titles'
                      value={constructor.titles}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          titles: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Car Pictures:'
                      type='url'
                      placeholder='Car Picture URL'
                      value={constructor.car_url}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          car_url: e.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Points:'
                      type='number'
                      placeholder='Points'
                      value={constructor.points}
                      onChange={e =>
                        setConstructor({
                          ...constructor,
                          points: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className='flex w-full'>
                  <div className='flex flex-col items-center w-full'>
                    <Button
                      label='Create'
                      variant='primary'
                      onClick={postConstructor}
                    />
                    <Button
                      onClick={() => setCreateConstructorModal(false)}
                      label='Close'
                      variant='secondary'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal setVisible={setCreateEventModal} visible={createEventModal}>
          <div className='min-h-full w-full flex items-center justify-center py-3'>
            <div className='max-w-md w-full'>
              <div className='flex flex-col w-full justify-center items-center'>
                <h2 className='mb-10 text-center text-3xl font-extrabold text-charade'>
                  Create a new Event
                </h2>
              </div>
              <div className='flex flex-col space-y-6'>
                <div className='flex flex-col w-full space-y-5 justify-between'>
                  <div>
                    <TextField
                      label='Name:'
                      type='text'
                      placeholder='Name'
                      value={event.name}
                      onChange={e =>
                        setEvent({
                          ...event,
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
                      value={event.city}
                      onChange={e =>
                        setEvent({
                          ...event,
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
                      value={event.cover_url}
                      onChange={e =>
                        setEvent({
                          ...event,
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
                      value={event.description}
                      onChange={e =>
                        setEvent({
                          ...event,
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
                      value={event.country}
                      onChange={e =>
                        setEvent({
                          ...event,
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
                      value={event.date}
                      onChange={e =>
                        setEvent({
                          ...event,
                          date: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className='flex w-full'>
                  <div className='flex flex-col items-center w-full'>
                    <Button
                      label='Create'
                      variant='primary'
                      onClick={postEvent}
                    />
                    <Button
                      onClick={() => setCreateEventModal(false)}
                      label='Close'
                      variant='secondary'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Admin;
