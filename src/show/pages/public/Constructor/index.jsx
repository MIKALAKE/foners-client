import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Constructor = () => {
  const { id } = useParams();
  const [getConstructorData, setGetConstructorData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v1/constructors/${id}`)
      .then(res => setGetConstructorData(res.data))
      .catch(err => err);
  }, [id]);

  return (
    <div className='bg-white-600 w-full h-full'>
      {getConstructorData && (
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <img
              className='w-44 h-44 mx-5 my-5'
              src={getConstructorData.logo_url}
              alt={getConstructorData.name}
            />
            <div className='flex mt-10 justify-center w-full'>
              <div className='text-5xl font-extrabold mr-44 text-charade'>
                {getConstructorData.name}
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-col w-full'>
            <div className='text-3xl font-extrabold ml-3 text-charade'>
              Description:
            </div>
            <div className='text-1xl font-extrabold ml-10 text-charade'>
              {getConstructorData.description}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Origins:
            </div>
            <div className='text-2xl font-bold ml-5 text-charade'>
              {getConstructorData.origins}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              First Apparence:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {getConstructorData.first_apparence}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Titles:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {getConstructorData.titles}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Points this season:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-secondary'>
              {getConstructorData.points}
            </div>
          </div>
          <div className='flex mt-10 justify-center w-full'>
            <img
              className='w-96 h-25 justify-center'
              src={getConstructorData.car_url}
              alt={getConstructorData.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Constructor;
