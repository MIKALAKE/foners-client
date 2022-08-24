import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Paths from 'process/routes/paths';
import { register } from 'process/slices/userSlice';
import { Button, TextField } from 'show/components';

const Register = () => {
  const [payload, setPayload] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFieldChange = (key, value) =>
    setPayload({ ...payload, [key]: value });

  const registerUser = e => {
    e.preventDefault();
    dispatch(register(payload));
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
              value={payload.first_name}
              onChange={e => onFieldChange('first_name', e.target.value)}
            />
          </div>
          <div>
            <TextField
              label='Last Name:'
              type='text'
              placeholder='Last Name'
              value={payload.last_name}
              onChange={e => onFieldChange('last_name', e.target.value)}
            />
          </div>
          <div>
            <TextField
              label='Email:'
              type='text'
              placeholder='Email'
              value={payload.email}
              onChange={e => onFieldChange('email', e.target.value)}
            />
          </div>
          <div>
            <TextField
              label='Password:'
              type='password'
              placeholder='Password'
              value={payload.password}
              onChange={e => onFieldChange('password', e.target.value)}
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

export default Register;
