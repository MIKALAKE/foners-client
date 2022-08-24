import PropTypes from 'prop-types';

const ConstructorCard = ({ constructor }) => {
  return (
    <div className='flex w-36 h-36 mt-3 ml-10 bg-white-600 cursor-pointer items-center justify-center rounded-md shadow-xl hover:scale-110 delay-100 easy-in-out transition-all'>
      <div className='flex flex-row items-center justify-center'>
        <img
          src={constructor.logo_url}
          alt={constructor.name}
          className='w-11/12 h-11/12'
        />
      </div>
    </div>
  );
};

ConstructorCard.defaultProps = {
  constructor: {}
};

ConstructorCard.propTypes = {
  constructor: PropTypes.object
};

export default ConstructorCard;
