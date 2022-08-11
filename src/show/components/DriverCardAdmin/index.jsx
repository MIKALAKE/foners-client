import { useDispatch } from 'react-redux';
import { Fragment, useState } from 'react';

import {
  deleteDriverAsync,
  editDriverAsync
} from '../../../process/redux/driversSlice';
import { Button, DriverInfoCard, Modal, TextField } from '../';

const DriverCardAdmin = ({ driver }) => {
  const [driverAdminModal, setDriverAdminModal] = useState(false);
  const [editDriverModal, setEditDriverModal] = useState(false);
  const [editedDriver, setEditedDriver] = useState(driver);

  const dispatch = useDispatch();

  const deleteDriver = () => {
    dispatch(deleteDriverAsync({ id: driver.id }));
  };

  const updateDriver = () => {
    dispatch(editDriverAsync(editedDriver));
    setEditDriverModal(false);
  };

  return (
    <Fragment>
      <div className='flex flex-col w-72 h-64 my-5 ml-5 cursor-pointer bg-charade rounded-md'>
        <div className='flex flex-col items-center'>
          <img
            src={driver.avatar_url}
            alt={driver.name}
            className='justify-center w-28 h-28 mt-5'
          />
          <div className='flex w-full h-full ml-28 mt-16'>
            <Button
              label='Info'
              variant='primary'
              onClick={() => setDriverAdminModal(true)}
            />
          </div>
        </div>
      </div>

      <Modal setVisible={setDriverAdminModal} visible={driverAdminModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-3xl font-extrabold text-charade'>
                {driver.first_name} {driver.last_name}
              </h2>
            </div>
            <div className='mt-8 space-y-6'>
              <div className='rounded-md space-y-px'>
                <DriverInfoCard key={driver.id} driver={driver} />
              </div>
              <div className='flex items-center justify-between w-full'>
                <div className='flex w-full flex-row'>
                  <Button
                    variant='secondary'
                    label='Edit'
                    onClick={() => setEditDriverModal(true)}
                  />
                  <Button
                    variant='primary'
                    label='Delete'
                    onClick={deleteDriver}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal setVisible={setEditDriverModal} visible={editDriverModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='mt-2 text-center text-3xl font-extrabold text-charade'>
                Edit Driver
              </h2>
            </div>
            <div className='flex mt-8 flex-col justify-center space-y-6'>
              <div className='flex flex-col w-full space-y-5'>
                <div>
                  <TextField
                    label='First Name:'
                    type='text'
                    placeholder='First Name'
                    value={editedDriver?.first_name}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        first_name: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Last Name:'
                    type='text'
                    placeholder='Last Name'
                    value={editedDriver?.last_name}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        last_name: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Nickname:'
                    type='text'
                    placeholder='Nickname'
                    value={editedDriver?.nickname}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
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
                    value={editedDriver?.race_number}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        race_number: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Avatar:'
                    type='url'
                    placeholder='Avatar URL'
                    value={editedDriver?.avatar_url}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        avatar_url: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Birth Date:'
                    type='date'
                    placeholder='Birth Date'
                    value={editedDriver?.birth_date}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        birth_date: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Height:'
                    type='number'
                    placeholder='Height'
                    value={editedDriver?.height}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        height: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Nationality:'
                    type='text'
                    placeholder='Nationality'
                    value={editedDriver?.nationality}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        nationality: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Description:'
                    type='text'
                    placeholder='Description'
                    value={editedDriver?.description}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        description: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <TextField
                    label='Points:'
                    type='number'
                    placeholder='Points'
                    value={editedDriver?.points}
                    onChange={e =>
                      setEditedDriver({
                        ...editedDriver,
                        points: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='flex items-cente justify-between w-full'>
                <div className='flex w-full flex-row '>
                  <Button
                    variant='secondary'
                    label='Save'
                    onClick={updateDriver}
                  />
                  <Button
                    variant='primary'
                    label='Cancel'
                    onClick={() => setEditDriverModal(false)}
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

export default DriverCardAdmin;
