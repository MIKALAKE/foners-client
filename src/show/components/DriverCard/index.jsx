import { useNavigate } from 'react-router-dom';

import { DRIVER_PATH } from 'process/routes/paths';

const DriverCard = ({ carUrl, firstDriver, secondDriver }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-72 h-64 my-5 ml-5 cursor-pointer bg-charade rounded-md hover:bg-white-700 shadow-xl transition-all delay-200 ease-in-out'>
      <div className='flex flex-col items-center'>
        <div className='flex w-full flex-row'>
          <div className='flex flex-col ml-3 '>
            <div className='flex flex-col text-white hover:text-secondary hover:scale-110 delay-100 easy-in-out transition-all'>
              <div className='flex flex-col'>
                <img
                  onClick={() =>
                    navigate(DRIVER_PATH.replace(':id', firstDriver?.id))
                  }
                  src={firstDriver?.avatar_url}
                  alt={firstDriver?.first_name}
                  className='w-24 ml-2'
                />
                <div className='flex flex-row'>
                  <div className='flex text-sm font-bold'>
                    {firstDriver?.first_name}
                  </div>
                  <div className='flex text-sm ml-2 font-bold'>
                    {firstDriver?.last_name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-10 text-white hover:text-secondary hover:scale-110 delay-100 easy-in-out transition-all'>
            <div className='flex flex-col'>
              <img
                onClick={() =>
                  navigate(DRIVER_PATH.replace(':id', secondDriver?.id))
                }
                src={secondDriver?.avatar_url}
                alt={secondDriver?.first_name}
                className='w-24 ml-2'
              />
              <div className='flex flex-row justify-center'>
                <div className='flex text-sm  font-bold'>
                  {secondDriver?.first_name}
                </div>
                <div className='flex text-sm ml-2 font-bold'>
                  {secondDriver?.last_name}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={carUrl}
          alt='Car'
          className='justify-center w-full h-full ml-3 mt-5 hover:scale-110 delay-100 easy-in-out transition-all'
        />
      </div>
    </div>
  );
};

export default DriverCard;
