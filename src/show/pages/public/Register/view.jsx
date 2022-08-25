import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Paths from 'process/routes/paths';
import { mock, onFieldChange } from 'process/helpers';
import { Button, TextField } from 'show/components';

const Register = ({ register, transient, updateProps }) => {
  const navigate = useNavigate();
  const dispatchUpdateProps = payload => updateProps(payload);

  const registerUser = e => {
    e.preventDefault();
    register(transient);
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
              value={transient.first_name}
              onChange={e =>
                onFieldChange('first_name', e.target.value, dispatchUpdateProps)
              }
            />
          </div>
          <div>
            <TextField
              label='Last Name:'
              type='text'
              placeholder='Last Name'
              value={transient.last_name}
              onChange={e =>
                onFieldChange('last_name', e.target.value, dispatchUpdateProps)
              }
            />
          </div>
          <div>
            <TextField
              label='Email:'
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
              label='Password:'
              type='password'
              placeholder='Password'
              value={transient.password}
              onChange={e =>
                onFieldChange('password', e.target.value, dispatchUpdateProps)
              }
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

Register.defaultProps = {
  register: mock,
  transient: {},
  updateProps: mock
};

Register.propTypes = {
  register: PropTypes.func,
  transient: PropTypes.object,
  updateProps: PropTypes.func
};

export default Register;
