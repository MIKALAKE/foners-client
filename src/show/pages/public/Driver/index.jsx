import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Moment from 'react-moment';

const Driver = () => {
  const { id } = useParams();
  const [getDriverData, setGetDriverData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v1/drivers/${id}`)
      .then(res => setGetDriverData(res.data))
      .catch(err => err);
  }, [id]);

  return (
    <div className='bg-white-600 w-full h-full'>
      {getDriverData && (
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <img
              className='w-44 h-44 mx-5 my-5'
              src={getDriverData.avatar_url}
              alt={getDriverData.first_name}
            />
            <div className='flex mt-10 justify-center w-full'>
              <div className='text-5xl font-extrabold mr-44 text-charade'>
                {getDriverData.first_name} {getDriverData.last_name}
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-col w-full'>
            <div className='text-3xl font-extrabold ml-3 text-charade'>
              Description:
            </div>
            <div className='text-1xl font-extrabold ml-10 text-charade'>
              {getDriverData.description}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Nickname:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {getDriverData.nickname}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Race Number:
            </div>
            <div className='text-2xl font-bold ml-5 text-charade'>
              #{getDriverData.race_number}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Day of Birth:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              <Moment format='DD-MM-Y'>{getDriverData.birth_date}</Moment>
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Nationality:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {getDriverData.nationality}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Height:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {getDriverData.height}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Points this season:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-secondary'>
              {getDriverData.points}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Driver;
