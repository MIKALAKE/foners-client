import Moment from 'react-moment';

const UpcomingEvent = ({ event }) => {
  return (
    <div className='flex bg-charade h-44'>
      <div className='flex ml-5 mt-3 flex-col text-white text-3xl font-bold antialiased'>
        Upcoming Event
        <div className='flex ml-5 mt-2 w-full h-full '>
          <img
            className='flex w-44 h-28'
            src={event?.cover_url}
            alt='circuit'></img>
          <div className='flex flex-row'>
            <div className='flex ml-5 text-white text-3xl items-center font-bold antialiased'>
              {event?.name} -
              <div className='flex ml-2 text-white text-3xl font-bold antialiased'>
                <Moment format='DD MMM'>{event?.date}</Moment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
