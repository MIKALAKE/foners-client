import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ConstructorStandingCard,
  DriverStandingCard
} from '../../../components';
import { getDrivers } from '../../../../process/slices/driversSlice';
import { getConstructors } from '../../../../process/slices/constructorsSlice';

const Standings = () => {
  const drivers = useSelector(state => state.drivers.drivers);
  const constructors = useSelector(state => state.constructors.constructors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getConstructors());
  }, [dispatch]);

  return (
    <div className='flex w-full h-full flex-col'>
      <div className='flex w-full h-full flex-col bg-primary'>
        <div className='flex w-full bg-white h-fit over pb-10 overflow-x-auto'>
          <div className='flex ml-5 mt-3 pb-3 flex-col justify-between text-charade text-2xl font-bold antialiased'>
            Constructors Standing
            <div className='flex flex-row justify-between'>
              {constructors?.map(constructor => (
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
              {drivers?.map(driver => (
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
