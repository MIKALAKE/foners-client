import Moment from 'react-moment';
import PropTypes from 'prop-types';

const DriverInfoCard = ({ driver }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex w-full h-full items-center flex-col'>
        <div className='flex w-44 h-44 items-center'>
          <div className='flex'>
            <img src={driver?.avatar_url} alt={driver?.name} />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex text-lg font-bold'>Description:</div>
          <div className='flex h-full'>{driver?.description}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Nickname:</div>
          <div className='flex'>{driver?.nickname}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Race Number:</div>
          <div className='flex'>{driver?.race_number}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Date of Birth:</div>
          <Moment format='DD-MM-Y'>{driver?.birth_date}</Moment>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Nationality:</div>
          <div className='flex'>{driver?.nationality}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Height:</div>
          <div className='flex'>{driver?.height}</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex text-lg font-bold mr-2'>Points:</div>
          <div className='flex text-xl font-semibold text-secondary'>
            {driver?.points}
          </div>
        </div>
      </div>
    </div>
  );
};

DriverInfoCard.defaultProps = {
  driver: {}
};

DriverInfoCard.propTypes = {
  driver: PropTypes.object
};

export default DriverInfoCard;
