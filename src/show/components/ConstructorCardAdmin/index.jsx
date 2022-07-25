import { Fragment, useState } from 'react';
import axios from 'axios';

import Button from '../Button';
import Modal from '../Modal';

const ConstructorCardAdmin = ({
  logo_url,
  constructor,
  constructors,
  setConstructors
}) => {
  const [constructorAdminModal, setConstructorAdminModal] = useState(false);
  return (
    <Fragment>
      <div className='flex flex-col w-72 h-64 my-5 ml-5 cursor-pointer bg-charade rounded-md'>
        <div className='flex flex-col items-center'>
          <img
            src={logo_url}
            alt='Logo'
            className='justify-center w-28 h-28 mt-5'
          />
          <div className='flex w-full h-full ml-28 mt-16'>
            <Button
              label='Info'
              variant='primary'
              onClick={() => setConstructorAdminModal(true)}
            />
          </div>
        </div>
      </div>
      <Modal
        setVisible={setConstructorAdminModal}
        visible={constructorAdminModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Constructor Name
              </h2>
            </div>
            <div className='flex mt-8 space-y-6'>
              <div className='rounded-md shadow-sm -space-y-px'></div>

              <div className='flex items-cente justify-between w-full'>
                <div className='flex w-full flex-row '>
                  <Button variant='secondary' label='Edit' />
                  <Button
                    variant='primary'
                    label='Delete'
                    onClick={() =>
                      axios
                        .delete(
                          `http://localhost:3000/v1/constructors/${constructor.id}`
                        )
                        .then(res => {
                          setConstructorAdminModal(false);
                          setConstructors(
                            constructors.filter(
                              object => constructor.id !== object.id
                            )
                          );
                        })
                    }
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

export default ConstructorCardAdmin;
