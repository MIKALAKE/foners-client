import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Fragment, useState } from 'react';

import {
  deleteConstructor,
  editConstructor
} from 'process/slices/constructorsSlice';

import { Button, ConstructorInfoCard, Modal, TextField } from '../';

const ConstructorCardAdmin = ({ constructor }) => {
  const [constructorAdminModal, setConstructorAdminModal] = useState(false);
  const [editConstructorModal, setEditConstructorModal] = useState(false);
  const [editedConstructor, setEditedConstructor] = useState(constructor);

  const dispatch = useDispatch();

  const updateConstructor = () => {
    dispatch(editConstructor(editedConstructor));
    setEditConstructorModal(false);
  };

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
                    onClick={() =>
                      dispatch(deleteConstructor({ id: constructor.id }))
                    }
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
            <div className='flex mt-8 flex-col justify-center space-y-6'>
              <div className='rounded-md space-y-px'>
                <div className='flex flex-col w-full space-y-5 justify-between'>
                  <div>
                    <TextField
                      label='Name:'
                      type='text'
                      placeholder='Name'
                      value={editedConstructor.name}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.logo_url}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.cover_url}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.description}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.first_apparence}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.origins}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.titles}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.car_url}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
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
                      value={editedConstructor.points}
                      onChange={e =>
                        setEditedConstructor({
                          ...editedConstructor,
                          points: e.target.value
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
                    onClick={updateConstructor}
                  />
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

ConstructorCardAdmin.defaultProps = {
  constructor: {}
};

ConstructorCardAdmin.propTypes = {
  constructor: PropTypes.object
};

export default ConstructorCardAdmin;
