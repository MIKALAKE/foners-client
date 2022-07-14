import axios from 'axios';
import { useEffect, useState } from 'react';

import {
  ConstructorCard,
  DriverCard,
  UpcomingEvent
} from '../../../components';

const Home = () => {
  const [constructors, setConstructors] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/v1/events/1')
      .then(res => setEvent(res.data))
      .catch(err => err);

    axios
      .get('http://localhost:3000/v1/constructors/')
      .then(res => setConstructors(res.data))
      .catch(err => err);
  }, []);

  return (
    <div className='flex flex-col w-full h-full '>
      <UpcomingEvent key={event.id} event={event} />
      <div className='flex flex-col bg-white h-60 overflow-x-auto'>
        <div className='flex ml-5 mt-3 text-black text-2xl font-bold antialiased'>
          Constructors
        </div>
        <div className='flex ml-5 mt-3 flex-row'>
          {constructors?.map(constructor => (
            <ConstructorCard key={constructor.id} constructor={constructor} />
          ))}
        </div>
      </div>
      <div className='flex flex-col bg-primary overflow-x-auto'>
        <div className='flex ml-5 mt-3 text-white text-3xl font-bold antialiased'>
          Drivers
        </div>
        <div className='flex mt-3 mb-10 flex-row'>
          {constructors?.map(constructor => (
            <DriverCard
              key={constructor.id}
              firstDriver={constructor.drivers[0]}
              secondDriver={constructor.drivers[1]}
              carUrl={constructor.car_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
