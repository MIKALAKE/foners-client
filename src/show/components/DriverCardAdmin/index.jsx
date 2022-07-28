import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';

import { Button, DriverInfoCard, Modal } from '../';

const DriverCardAdmin = ({ driver, drivers, setDrivers }) => {
  const [driverAdminModal, setDriverAdminModal] = useState(false);
  const [editDriverModal, setEditDriverModal] = useState(false);

  const deleteDriver = () =>
    axios.delete(`http://localhost:3000/v1/drivers/${driver.id}`).then(res => {
      setDriverAdminModal(false);
      setDrivers(drivers.filter(item => driver.id !== item.id));
    });

  useEffect(() => {
    axios
      .get('http://localhost:3000/v1/drivers/')
      .then(res => setDrivers(res.data))
      .catch(err => err);
  }, [setDrivers]);

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
            <div className='flex mt-8 space-y-6'>
              <div className='rounded-md space-y-px'></div>
              <div className='flex items-cente justify-between w-full'>
                <div className='flex w-full flex-row '>
                  <Button variant='secondary' label='Save' />
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
