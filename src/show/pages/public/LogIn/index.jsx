import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdOutlineAccountBox } from 'react-icons/md';

import Paths from 'process/routes/paths';
import { logIn } from 'process/slices/userSlice';
import { Button, TextField } from 'show/components';

const LogIn = () => {
  const [payload, setPayload] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFieldChange = (key, value) =>
    setPayload({ ...payload, [key]: value });

  const submit = e => {
    e.preventDefault();
    dispatch(logIn(payload));
    navigate(Paths.public.HOME_PATH);
  };

  return (
    <div className='flex w-full h-full items-center bg-primary justify-center'>
      <div className='flex flex-col w-2/5 h-3/4 bg-white rounded-lg items-center justify-center'>
        <div className='flex items-center flex-col w-full h-full justify-center'>
          <div className='text-6xl mt-10'>
            <MdOutlineAccountBox />
          </div>
          <div className='flex mb-10 text-charade text-4xl font-extrabold'>
            Log In
          </div>
          <div className='flex flex-col w-full h-full justify-center ml-36 space-y-5'>
            <div className='flex'>
              <TextField
                className='flex'
                type='text'
                placeholder='Email'
                value={payload.email}
                onChange={e => onFieldChange('email', e.target.value)}
              />
            </div>
            <div>
              <TextField
                type='password'
                placeholder='Password'
                value={payload.password}
                onChange={e => onFieldChange('password', e.target.value)}
              />
            </div>
          </div>
          <div className='flex h-full mt-5 flex-col justify-center items-center w-96'>
            <Button label='Log In' variant='secondary' onClick={submit} />
            <Button
              label='Don`t have an account? Sign up.'
              variant='underline'
              onClick={() => navigate(Paths.public.REGISTER_PATH)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
