import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';

import { Button, ConstructorInfoCard, Modal } from '../';

const ConstructorCardAdmin = ({
  constructor,
  constructors,
  setConstructors
}) => {
  const [editConstructorModal, setEditConstructorModal] = useState(false);
  const [constructorAdminModal, setConstructorAdminModal] = useState(false);

  const deleteConstructor = () =>
    axios
      .delete(`http://localhost:3000/v1/constructors/${constructor.id}`)
      .then(() => {
        const filterConstructors = object => constructor.id !== object.id;
        const filteredConstructors = constructors.filter(filterConstructors);
        setConstructorAdminModal(false);
        setConstructors(filteredConstructors);
      });

  useEffect(() => {
    axios
      .get('http://localhost:3000/v1/constructors/')
      .then(res => setConstructors(res.data))
      .catch(err => err);
  }, [setConstructors]);

  return (
    <Fragment>
      <div className='flex flex-col w-72 h-64 my-5 ml-5 cursor-pointer bg-charade rounded-md'>
        <div className='flex flex-col items-center'>
          <img
            src={constructor.logo_url}
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
              <h2 className='text-center text-3xl font-extrabold text-charade'>
                {constructor.name}
              </h2>
            </div>
            <div className='flex flex-col mt-8 space-y-6'>
              <div className='rounded-md space-y-px'>
                <ConstructorInfoCard
                  key={constructor.id}
                  constructor={constructor}
                />
              </div>
              <div className='flex items-cente justify-between w-full'>
                <div className='flex w-full flex-row '>
                  <Button
                    variant='secondary'
                    label='Edit'
                    onClick={() => setEditConstructorModal(true)}
                  />
                  <Button
                    variant='primary'
                    label='Delete'
                    onClick={deleteConstructor}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        setVisible={setEditConstructorModal}
        visible={editConstructorModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='mt-2 text-center text-3xl font-extrabold text-charade'>
                Edit Constructor
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
                    onClick={() => setEditConstructorModal(false)}
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
