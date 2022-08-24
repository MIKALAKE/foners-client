import PropTypes from 'prop-types';

const DriverStandingCard = ({ driver }) => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex items-center bg-charade mb-2 mr-10 rounded-xl'>
          <div className='flex ml-3 mr-5'>#{driver.place}</div>
          <div className='flex ml-3 mr-5'>
            <img
              src={driver.avatar_url}
              alt={driver.last_name}
              className='w-32 h-18'
            />
          </div>
          <div className='flex w-full'>
            {driver.first_name} {driver.last_name}
          </div>
          <div className='flex justify-end w-full'>
            <div className='flex mr-10'>Points: {driver.points}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

DriverStandingCard.defaultProps = {
  driver: {}
};

DriverStandingCard.propTypes = {
  driver: PropTypes.object
};
export default DriverStandingCard;
