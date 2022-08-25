import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdOutlineAccountBox } from 'react-icons/md';

import { mock } from 'process/helpers';
import Paths from 'process/routes/paths';
import { onFieldChange } from 'process/helpers';
import { Button, TextField } from 'show/components';

const LogIn = ({ logIn, transient, updateProps }) => {
  const navigate = useNavigate();
  const dispatchUpdateProps = updateProps();

  const submit = e => {
    e.preventDefault();
    logIn(transient);
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
                value={transient.email}
                onChange={e =>
                  onFieldChange('email', e.target.value, dispatchUpdateProps)
                }
              />
            </div>
            <div>
              <TextField
                type='password'
                placeholder='Password'
                value={transient.password}
                onChange={e =>
                  onFieldChange('password', e.target.value, dispatchUpdateProps)
                }
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

LogIn.defaultProps = {
  logIn: mock,
  transient: mock,
  updateProps: mock
};
LogIn.propTypes = {
  logIn: PropTypes.func,
  transient: PropTypes.object,
  updateProps: PropTypes.func
};

export default LogIn;
