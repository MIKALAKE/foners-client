import { ConstructorCard, DriverCard } from '../../../components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [constructor, setConstructor] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/v1/constructors/')
      .then(res => setConstructor(res.data))
      .catch(err => err);
  }, []);

  return (
    <div className='flex flex-col w-full h-full '>
      <div className='flex bg-charade h-52'>
        <div className='flex ml-5 mt-3 flex-col text-white text-3xl font-bold antialiased'>
          Upcoming Events
          <div className='flex ml-5 mt-2 w-full h-full '>
            <img
              className='flex w-44 h-28'
              src='https://www.clipartmax.com/png/middle/326-3263821_19-track-vector-race-course-huge-freebie-download-for-formula-1-circuits.png'
              alt='circuit'></img>
            <div className='flex flex-col'>
              <div className='flex ml-5 text-white text-3xl items-center font-bold antialiased'>
                Barcelona Grand Prix
                <div className='flex ml-5 text-white text-2xl font-bold antialiased'>
                  28JUL - 31JUL
                </div>
              </div>
              <div className='flex ml-10 text-white text-lg font-bold antialiased'>
                Spain Weekend Biggest Grand Prix
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-white h-60 overflow-x-auto'>
        <div className='flex ml-5 mt-3 text-black text-2xl font-bold antialiased'>
          Constructors
        </div>
        <div className='flex ml-5 mt-3 flex-row'>
          {constructor?.map(constructor => (
            <ConstructorCard key={constructor.id} constructor={constructor} />
          ))}
        </div>
      </div>
      <div className='flex flex-col bg-primary overflow-x-auto'>
        <div className='flex ml-5 mt-3 text-white text-3xl font-bold antialiased'>
          Drivers
        </div>
        <div className='flex mt-3 mb-10 flex-row'>
          {constructor?.map(constructor => (
            <DriverCard
              key={constructor.id}
              firstDriver={constructor.drivers[0]}
              secondDriver={constructor.drivers[1]}
              car_url={constructor.car_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
