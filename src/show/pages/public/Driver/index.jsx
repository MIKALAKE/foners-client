import Moment from 'react-moment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getDriver } from 'process/slices/driversSlice';

const Driver = () => {
  const { id } = useParams();
  const driver = useSelector(state => state.drivers.driver);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDriver({ id }));
  }, [dispatch, id]);

  return (
    <div className='bg-white-600 w-full h-full'>
      {driver && (
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <img
              className='w-44 h-44 mx-5 my-5'
              src={driver.avatar_url}
              alt={driver.first_name}
            />
            <div className='flex mt-10 justify-center w-full'>
              <div className='text-5xl font-extrabold mr-44 text-charade'>
                {driver.first_name} {driver.last_name}
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-col w-full'>
            <div className='text-3xl font-extrabold ml-3 text-charade'>
              Description:
            </div>
            <div className='text-1xl font-extrabold ml-10 text-charade'>
              {driver.description}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Nickname:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {driver.nickname}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Race Number:
            </div>
            <div className='text-2xl font-bold ml-5 text-charade'>
              #{driver.race_number}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Day of Birth:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              <Moment format='DD-MM-Y'>{driver.birth_date}</Moment>
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Nationality:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {driver.nationality}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Height:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {driver.height}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Points this season:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-secondary'>
              {driver.points}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Driver;
