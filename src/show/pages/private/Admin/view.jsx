import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';

import {
  Button,
  ConstructorCardAdmin,
  DriverCardAdmin,
  EventCardAdmin,
  Modal,
  TextField
} from 'show/components';
import { mock } from 'process/helpers';
import { onFieldChange } from 'process/helpers';

const Admin = ({
  addConstructor,
  addDriver,
  addEvent,
  constructors,
  drivers,
  events,
  getConstructors,
  getDrivers,
  getEvents,
  transient,
  updateProps
}) => {
  const [createEventModal, setCreateEventModal] = useState(false);
  const [createDriverModal, setCreateDriverModal] = useState(false);
  const [createConstructorModal, setCreateConstructorModal] = useState(false);

  const dispatchUpdateProps = updateProps();

  const searchQuery = transient.searchQuery;

  const postDriver = e => {
    e.preventDefault();
    addDriver(transient);
    setCreateDriverModal(false);
  };

  const postEvent = e => {
    e.preventDefault();
    addEvent(transient);
    setCreateEventModal(false);
  };

  const postConstructor = e => {
    e.preventDefault();
    addConstructor(transient);
    setCreateConstructorModal(false);
  };

  useEffect(() => {
    getEvents(searchQuery);
    getDrivers(searchQuery);
    getConstructors(searchQuery);
  }, [getEvents, getDrivers, getConstructors, searchQuery]);

  return (
    <Fragment>
      <div className='flex w-full h-full bg-primary'>
        <div className='flex flex-col w-full h-full'>
          <div className='flex w-full h-20 my-5 items-center flex-row'>
            <TextField
              type='search'
              value={transient.searchQuery}
              placeholder='Search'
              className='flex bg-white w-96 ml-5 rounded-lg h-8 text-secondary font-bold hover:outline outline-secondary outline-2'
              onChange={e =>
                onFieldChange(
                  'searchQuery',
                  e.target.value,
                  dispatchUpdateProps
                )
              }
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
              {constructors?.length > 0 ? (
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

              {drivers?.length > 0 ? (
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
                      value={transient.first_name}
                      onChange={e =>
                        onFieldChange(
                          'first_name',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Last Name:'
                      type='text'
                      placeholder='Last Name'
                      value={transient.last_name}
                      onChange={e =>
                        onFieldChange(
                          'last_name',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Nickname:'
                      type='text'
                      placeholder='Nickname'
                      value={transient.nickname}
                      onChange={e =>
                        onFieldChange(
                          'nickname',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Race Number:'
                      type='number'
                      placeholder='Race Number'
                      value={transient.race_number}
                      onChange={e =>
                        onFieldChange(
                          'race_number',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Avatar:'
                      type='url'
                      placeholder='Avatar URL'
                      value={transient.avatar_url}
                      onChange={e =>
                        onFieldChange(
                          'avatar_url',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Birth Date:'
                      type='date'
                      placeholder='Birth Date'
                      value={transient.birth_date}
                      onChange={e =>
                        onFieldChange(
                          'birth_date',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Height:'
                      type='number'
                      placeholder='Height'
                      value={transient.height}
                      onChange={e =>
                        onFieldChange(
                          'height',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Nationality:'
                      type='text'
                      placeholder='Nationality'
                      value={transient.nationality}
                      onChange={e =>
                        onFieldChange(
                          'nationality',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Description:'
                      type='text'
                      placeholder='Description'
                      value={transient.description}
                      onChange={e =>
                        onFieldChange(
                          'description',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Points:'
                      type='number'
                      placeholder='Points'
                      value={transient.points}
                      onChange={e =>
                        onFieldChange(
                          'points',
                          e.target.value,
                          dispatchUpdateProps
                        )
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
                            onFieldChange(
                              'constructor.id',
                              e.target.value,
                              dispatchUpdateProps
                            )
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
                      value={transient.name}
                      onChange={e =>
                        onFieldChange(
                          'name',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Logo:'
                      type='url'
                      placeholder='Logo URL'
                      value={transient.logo_url}
                      onChange={e =>
                        onFieldChange(
                          'logo_url',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Cover:'
                      type='url'
                      placeholder='Cover URL'
                      value={transient.cover_url}
                      onChange={e =>
                        onFieldChange(
                          'cover_url',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Description:'
                      type='text'
                      placeholder='Description'
                      value={transient.description}
                      onChange={e =>
                        onFieldChange(
                          'description',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='First Apparence:'
                      type='number'
                      placeholder='First Apparence'
                      value={transient.first_apparence}
                      onChange={e =>
                        onFieldChange(
                          'first_apparence',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Origins:'
                      type='text'
                      placeholder='Origins'
                      value={transient.origins}
                      onChange={e =>
                        onFieldChange(
                          'origins',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Titles:'
                      type='number'
                      placeholder='Titles'
                      value={transient.titles}
                      onChange={e =>
                        onFieldChange(
                          'titles',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Car Pictures:'
                      type='url'
                      placeholder='Car Picture URL'
                      value={transient.car_url}
                      onChange={e =>
                        onFieldChange(
                          'car_url',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Points:'
                      type='number'
                      placeholder='Points'
                      value={transient.points}
                      onChange={e =>
                        onFieldChange(
                          'points',
                          e.target.value,
                          dispatchUpdateProps
                        )
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
                      value={transient.name}
                      onChange={e =>
                        onFieldChange(
                          'name',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='City:'
                      type='text'
                      placeholder='City'
                      value={transient.city}
                      onChange={e =>
                        onFieldChange(
                          'city',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Cover:'
                      type='url'
                      placeholder='Cover URL'
                      value={transient.cover_url}
                      onChange={e =>
                        onFieldChange(
                          'cover_url',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Descritpion:'
                      type='text'
                      placeholder='Descritpion'
                      value={transient.description}
                      onChange={e =>
                        onFieldChange(
                          'description',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Country:'
                      type='text'
                      placeholder='Country'
                      value={transient.country}
                      onChange={e =>
                        onFieldChange(
                          'country',
                          e.target.value,
                          dispatchUpdateProps
                        )
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      label='Date:'
                      type='date'
                      placeholder='Date'
                      value={transient.date}
                      onChange={e =>
                        onFieldChange(
                          'date',
                          e.target.value,
                          dispatchUpdateProps
                        )
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

Admin.defautProps = {
  addConstructor: mock,
  addDriver: mock,
  addEvent: mock,
  constructors: [],
  drivers: [],
  events: [],
  getConstructors: mock,
  getDrivers: mock,
  getEvents: mock,
  transient: {},
  updateProps: mock
};

Admin.propTypes = {
  addConstructor: PropTypes.func,
  addDriver: PropTypes.func,
  addEvent: PropTypes.func,
  constructors: PropTypes.array,
  drivers: PropTypes.array,
  events: PropTypes.array,
  getConstructors: PropTypes.func,
  getDrivers: PropTypes.func,
  getEvents: PropTypes.func,
  transient: PropTypes.object,
  updateProps: PropTypes.func
};

export default Admin;
