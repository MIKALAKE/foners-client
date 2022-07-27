import axios from 'axios';
import { Fragment, useState } from 'react';

import { Button, Modal } from '../';

const DriverCardAdmin = ({ driver, drivers, setDrivers }) => {
  const [driverAdminModal, setDriverAdminModal] = useState(false);

  const deleteDriver = () =>
    axios.delete(`http://localhost:3000/v1/drivers/${driver.id}`).then(res => {
      setDriverAdminModal(false);
      setDrivers(drivers.filter(item => driver.id !== item.id));
    });

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
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Driver Name
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
                    onClick={deleteDriver}
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
