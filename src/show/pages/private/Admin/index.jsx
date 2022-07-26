import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';

import {
  Button,
  ConstructorCardAdmin,
  DriverCardAdmin,
  EventCardAdmin,
  Modal,
  TextField
} from '../../../components';

const Admin = () => {
  const [createConstructorModal, setCreateConstructorModal] = useState(false);
  const [createDriverModal, setCreateDriverModal] = useState(false);
  const [createEventModal, setCreateEventModal] = useState(false);
  const [constructors, setConstructors] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState('');
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v1/constructors?search=${search}`)
      .then(res => setConstructors(res.data))
      .catch(err => err);

    axios
      .get(`http://localhost:3000/v1/events?search=${search}`)
      .then(res => setEvents(res.data))
      .catch(err => err);

    axios
      .get(`http://localhost:3000/v1/drivers?search=${search}`)
      .then(res => setDrivers(res.data))
      .catch(err => err);
  }, [search]);

  return (
    <Fragment>
      <div className='flex w-full h-full bg-primary'>
        <div className='flex flex-col w-full h-full'>
          <div className='flex w-full h-20 my-5 items-center flex-row'>
            <TextField
              required
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
                    logo_url={constructor.logo_url}
                    constructors={constructors}
                    setConstructors={setConstructors}
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
                    setDrivers={setDrivers}
                  />
                ))
              ) : (
                <div className='flex w-full h-full justify-center text-secondary'>
                  No Drivers yet
                </div>
              )}
              {events.length > 0 ? (
                events?.map(event => (
                  <EventCardAdmin
                    key={event.id}
                    event={event}
                    events={events}
                    setEvents={setEvents}
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
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>First Name:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='First Name'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.first_name}
                        onChange={e =>
                          setDriver({ ...driver, first_name: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Last Name:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Last Name'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.last_name}
                        onChange={e =>
                          setDriver({ ...driver, last_name: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Nickname:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Nickname'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.nickname}
                        onChange={e =>
                          setDriver({
                            ...driver,
                            nickname: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Race Number:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='number'
                        placeholder='Race Number'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.race_number}
                        onChange={e =>
                          setDriver({ ...driver, race_number: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Avatar URL:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='url'
                        placeholder='Avatar'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.avatar_url}
                        onChange={e =>
                          setDriver({ ...driver, avatar_url: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Birth Day:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='date'
                        placeholder='Birth Date'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.birth_date}
                        onChange={e =>
                          setDriver({ ...driver, birth_date: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Height:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='number'
                        placeholder='Height'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.height}
                        onChange={e =>
                          setDriver({ ...driver, height: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Nationality:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Nationality'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.nationality}
                        onChange={e =>
                          setDriver({ ...driver, nationality: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Description:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Description'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.description}
                        onChange={e =>
                          setDriver({ ...driver, description: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Points:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='number'
                        placeholder='Points'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={driver.points}
                        onChange={e =>
                          setDriver({ ...driver, points: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label>
                    <div className='flex w-full items-start'>
                      <div className='flex w-1/5'>Constructor:</div>
                      <div className='w-4/5'>
                        <select
                          onChange={e =>
                            setDriver({
                              ...driver,
                              constructor_id: e.target.value
                            })
                          }
                          className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                          name='filter'>
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
                      onClick={() => {
                        axios
                          .post('http://localhost:3000/v1/drivers', driver)
                          .then(res => {
                            setDrivers([...drivers, res.data]);
                            setCreateDriverModal(false);
                          });
                      }}
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
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Name:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Name'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.name}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            name: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Logo:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='url'
                        placeholder='Logo'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.logo_url}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            logo_url: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Cover:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='url'
                        placeholder='Cover'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.cover_url}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            cover_url: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Description:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Description'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.description}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            description: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>First Apparence:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='number'
                        placeholder='First Apparence'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.first_apparence}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            first_apparence: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Origins:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Origins'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.origins}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            origins: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Titles:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='number'
                        placeholder='Titles'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.titles}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            titles: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Car Picture:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='url'
                        placeholder='Car Picture'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.car_url}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            car_url: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Points:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='number'
                        placeholder='Points'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={constructor.points}
                        onChange={e =>
                          setConstructor({
                            ...constructor,
                            points: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                </div>
                <div className='flex w-full'>
                  <div className='flex flex-col items-center w-full'>
                    <Button
                      label='Create'
                      variant='primary'
                      onClick={() => {
                        axios
                          .post(
                            'http://localhost:3000/v1/constructors',
                            constructor
                          )
                          .then(res => {
                            setConstructors([...constructors, res.data]);
                            setCreateConstructorModal(false);
                          })
                          .catch(err => err);
                      }}
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
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Name:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Name'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={event.name}
                        onChange={e =>
                          setEvent({
                            ...event,
                            name: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>City:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='City'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={event.city}
                        onChange={e =>
                          setEvent({
                            ...event,
                            city: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Cover:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='url'
                        placeholder='Cover'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={event.cover_url}
                        onChange={e =>
                          setEvent({
                            ...event,
                            cover_url: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Description:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Descritpion'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={event.description}
                        onChange={e =>
                          setEvent({
                            ...event,
                            description: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Country:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='text'
                        placeholder='Country'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={event.country}
                        onChange={e =>
                          setEvent({
                            ...event,
                            country: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                  <label className='flex w-full items-start'>
                    <div className='flex w-1/5'>Date:</div>
                    <div className='w-4/5'>
                      <TextField
                        required
                        type='date'
                        placeholder='Date'
                        className='rounded-md w-full h-8 bg-white-600 text-center outline-secondary outline-offset-4'
                        value={event.date}
                        onChange={e =>
                          setEvent({
                            ...event,
                            date: e.target.value
                          })
                        }
                      />
                    </div>
                  </label>
                </div>
                <div className='flex w-full'>
                  <div className='flex flex-col items-center w-full'>
                    <Button
                      label='Create'
                      variant='primary'
                      onClick={() => {
                        setEvent(event);
                        axios
                          .post('http://localhost:3000/v1/events', event)
                          .then(res => {
                            setEvents([...events, res.data]);
                            setCreateEventModal(false);
                          })
                          .catch(err => err);
                      }}
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
