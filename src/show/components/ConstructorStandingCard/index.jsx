import PropTypes from 'prop-types';

const ConstructorStandingCard = ({ constructor }) => {
  return (
    <div className='flex w-64 h-34  ml-1 mr-1 justify-between bg-white-600 rounded-md shadow-xl select-none'>
      <div className='flex flex-col'>
        <div className='flex flex-row  mt-4'>
          <div className='flex flex-col items-center'>
            <div className='flex object-cover w-30 h-20'>
              <img src={constructor.logo_url} alt={constructor.name} />
            </div>
            <div className='flex font-bold text-charade text-lg'>
              {constructor.name}
            </div>
          </div>
          <div className='flex text-charade ml-10 mt-5'>
            # {constructor.place}
          </div>
        </div>
        <div className='flex text-charade ml-2 text-xl'>
          Points: {constructor.points}
        </div>
      </div>
    </div>
  );
};

ConstructorStandingCard.defaultProps = {
  constructor: undefined
};

ConstructorStandingCard.propTypes = {
  constructor: PropTypes.object
};

export default ConstructorStandingCard;
