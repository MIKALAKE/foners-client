import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Paths from 'process/routes/paths';
import { register } from 'process/slices/userSlice';

import { Button, TextField } from 'show/components';

const CreateAccount = () => {
  const [client, setClient] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = e => {
    e.preventDefault();
    dispatch(
      register({
        email: client.email,
        password: client.password,
        first_name: client.first_name,
        last_name: client.last_name
      }),
      navigate(Paths.public.LOGIN_PATH)
    );
  };

  return (
    <div className='flex w-full h-full items-center bg-primary justify-center'>
      <div className='flex flex-col w-2/5 h-3/4 bg-white rounded-lg items-center justify-center'>
        <div className='flex mt-10 mb-20 text-charade text-3xl font-extrabold'>
          Create Account
        </div>
        <div className='flex flex-col w-3/4 h-full justify-center space-y-5'>
          <div>
            <TextField
              label='First Name:'
              type='text'
              placeholder='First Name'
              value={client.first_name}
              onChange={e =>
                setClient({ ...client, first_name: e.target.value })
              }
            />
          </div>
          <div>
            <TextField
              label='Last Name:'
              type='text'
              placeholder='Last Name'
              value={client.last_name}
              onChange={e =>
                setClient({ ...client, last_name: e.target.value })
              }
            />
          </div>
          <div>
            <TextField
              label='Email:'
              type='text'
              placeholder='Email'
              value={client.email}
              onChange={e => setClient({ ...client, email: e.target.value })}
            />
          </div>
          <div>
            <TextField
              label='Password:'
              type='password'
              placeholder='Password'
              value={client.password}
              onChange={e => setClient({ ...client, password: e.target.value })}
            />
          </div>
        </div>
        <div className='flex h-full mt-5 flex-row items-center w-96'>
          <Button label='Register' variant='primary' onClick={registerUser} />
          <Button
            label='Cancel'
            variant='secondary'
            onClick={() => navigate(Paths.public.LOGIN_PATH)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
