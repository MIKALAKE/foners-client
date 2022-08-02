import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ConstructorCard,
  DriverCard,
  UpcomingEvent
} from '../../../components';
import { CONSTRUCTOR_PATH } from '../../../../process/routes/paths';

const Home = () => {
  const [constructors, setConstructors] = useState([]);
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/v1/events/does-not-matter')
      .then(res => setEvent(res.data))
      .catch(err => err);

    axios
      .get(`http://localhost:3000/v1/constructors/`)
      .then(res => setConstructors(res.data))
      .catch(err => err);
  }, []);

  return (
    <div className='flex flex-col w-full h-full'>
      {event ? (
        <UpcomingEvent event={event} />
      ) : (
        <div className='flex h-44 bg-charade justify-center text-secondary text-2xl items-center'>
          No Event yet
        </div>
      )}
      <div className='flex flex-col bg-white h-60 overflow-x-auto'>
        <div className='flex ml-5 mt-3 text-black text-2xl font-bold antialiased'>
          Constructors
        </div>
        <div className='flex ml-5 mt-3 flex-row'>
          {constructors.length > 0 ? (
            constructors?.map(constructor => (
              <div
                onClick={() =>
                  navigate(CONSTRUCTOR_PATH.replace(':id', constructor.id))
                }
                key={constructor.id}>
                <ConstructorCard
                  key={constructor.id}
                  constructor={constructor}
                />
              </div>
            ))
          ) : (
            <div className='flex h-44 w-full justify-center text-secondary text-2xl items-center'>
              No Constructor yet
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col bg-primary overflow-x-auto'>
        <div className='flex ml-5 mt-3 text-white text-3xl font-bold antialiased'>
          Drivers
        </div>
        <div className='flex mt-3 mb-10 flex-row'>
          {constructors.length > 0 ? (
            constructors?.map(constructor => (
              <DriverCard
                key={constructor.id}
                firstDriver={constructor.drivers[0]}
                secondDriver={constructor.drivers[1]}
                carUrl={constructor.car_url}
              />
            ))
          ) : (
            <div className='flex h-44 w-full justify-center text-secondary text-2xl items-center'>
              No Driver yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
