import { ConstructorStandingCard } from '../../../components';
import DriverStandingCard from '../../../components/DriverStandingCard';

const Standings = () => {
  return (
    <div className='flex w-full h-full flex-col bg-primary'>
      <div className='flex w-full bg-white h-52 overflow-x-auto'>
        <div className='flex ml-5 mt-3 flex-col text-black text-2xl font-bold antialiased'>
          Constructors Standing
          <div className='flex flex-row justify-between'>
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='1'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='2'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='3'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='4'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='5'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='6'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='7'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='8'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='9'
              points='176'
            />
            <ConstructorStandingCard
              logo='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png'
              place='10'
              points='176'
            />
          </div>
        </div>
      </div>
      <div className='flex ml-5 mt-3 flex-col text-white text-2xl font-bold antialiased'>
        Drivers Standing
        <div className='flex flex-col'>
          <DriverStandingCard />
        </div>
      </div>
    </div>
  );
};

export default Standings;
