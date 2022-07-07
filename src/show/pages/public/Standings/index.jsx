import {
  ConstructorStandingCard,
  DriverStandingCard
} from '../../../components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Standings = () => {
  const [constructor, setConstructor] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3000/v1/constructors/')
      .then(res => setConstructor(res.data))
      .catch(err => err);
  }, []);

  const [driver, setDriver] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3000/v1/drivers/')
      .then(res => setDriver(res.data))
      .catch(err => err);
  }, []);

  return (
    <div className='flex w-full h-full flex-col'>
      <div className='flex w-full h-full flex-col bg-primary'>
        <div className='flex w-full bg-white h-fit over pb-10 overflow-x-auto'>
          <div className='flex ml-5 mt-3 pb-3 flex-col justify-between text-charade text-2xl font-bold antialiased'>
            Constructors Standing
            <div className='flex flex-row justify-between'>
              {constructor?.map(constructor => (
                <ConstructorStandingCard
                  key={constructor.id}
                  constructor={constructor}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex ml-5 mt-3 flex-col overflow-y-auto text-white text-2xl font-bold antialiased'>
          Drivers Standing
          <div className='flex flex-col'>
            <div className='flex mt-3 flex-col'>
              {driver?.map(driver => (
                <DriverStandingCard key={driver.id} driver={driver} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
