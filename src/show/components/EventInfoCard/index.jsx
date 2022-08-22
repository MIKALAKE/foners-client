import Moment from 'react-moment';
import PropTypes from 'prop-types';

const EventInfoCard = ({ event }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex w-full h-full items-center flex-col'>
        <div className='flex w-44 h-44 items-center'>
          <div className='flex'>
            <img src={event?.cover_url} alt={event?.name} />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex text-lg font-bold'>Description:</div>
          <div className='flex h-full'>{event?.description}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>City:</div>
          <div className='flex'>{event?.city}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Country:</div>
          <div className='flex'>{event?.country}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Date:</div>
          <Moment format='DD-MM-Y'>{event?.date}</Moment>
        </div>
      </div>
    </div>
  );
};

EventInfoCard.defaultProps = {
  event: undefined
};

EventInfoCard.propTypes = {
  event: PropTypes.object
};

export default EventInfoCard;
