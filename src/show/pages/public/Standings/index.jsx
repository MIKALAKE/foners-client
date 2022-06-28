import {
  ConstructorStandingCard,
  DriverStandingCard
} from '../../../components';

const Standings = () => {
  const driver = {
    name: 'Charles Leclerc',
    points: '267',
    place: '1',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  };

  const constructor = {
    constructor_name: 'Ferrari',
    points: '267',
    place: '1',
    logo_url: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png'
  };

  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full  overflow-y-auto flex-col bg-primary'>
        <div className='flex w-full  bg-white h-52 overflow-x-auto'>
          <div className='flex ml-5 mt-3 flex-col text-charade text-2xl font-bold antialiased'>
            Constructors Standing
            <div className='flex flex-row'>
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
              <ConstructorStandingCard constructor={constructor} />
            </div>
          </div>
        </div>
        <div className='flex ml-5 mt-3 flex-col text-white text-2xl font-bold antialiased'>
          Drivers Standing
          <div className='flex flex-col'>
            <div className='flex mt-3 flex-col'>
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
              <DriverStandingCard driver={driver} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
