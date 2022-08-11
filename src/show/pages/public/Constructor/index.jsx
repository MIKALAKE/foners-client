import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getConstructorAsync } from '../../../../process/redux/constructorsSlice';

const Constructor = () => {
  const { id } = useParams();
  const constructor = useSelector(state => state.constructors.constructor);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConstructorAsync({ id }));
  }, [dispatch, id]);

  return (
    <div className='bg-white-600 w-full h-full'>
      {constructor && (
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <img
              className='w-44 h-44 mx-5 my-5'
              src={constructor.logo_url}
              alt={constructor.name}
            />
            <div className='flex mt-10 justify-center w-full'>
              <div className='text-5xl font-extrabold mr-44 text-charade'>
                {constructor.name}
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-col w-full'>
            <div className='text-3xl font-extrabold ml-3 text-charade'>
              Description:
            </div>
            <div className='text-1xl font-extrabold ml-10 text-charade'>
              {constructor.description}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Origins:
            </div>
            <div className='text-2xl font-bold ml-5 text-charade'>
              {constructor.origins}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              First Apparence:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {constructor.first_apparence}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Titles:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-charade'>
              {constructor.titles}
            </div>
          </div>
          <div className='flex mt-10 justify-start items-center w-full'>
            <div className='text-2xl font-extrabold ml-3 text-charade'>
              Points this season:
            </div>
            <div className='text-2xl font-extrabold ml-5 text-secondary'>
              {constructor.points}
            </div>
          </div>
          <div className='flex mt-10 justify-center w-full'>
            <img
              className='w-96 h-25 justify-center'
              src={constructor.car_url}
              alt={constructor.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Constructor;
