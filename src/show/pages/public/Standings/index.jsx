import {
  ConstructorStandingCard,
  DriverStandingCard
} from '../../../components';

const constructors = [
  {
    id: '1',
    name: 'Ferrari',
    points: '267',
    place: '1',
    logo_url: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png'
  },

  {
    id: '2',
    name: 'Mercedes',
    points: '150',
    place: '2',
    logo_url: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png'
  },

  {
    id: '3',
    name: 'Red Bull',
    points: '280',
    place: '3',
    logo_url: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png'
  },

  {
    id: '4',
    name: 'McLaren',
    points: '88',
    place: '4',
    logo_url: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png'
  }
];

const drivers = [
  {
    id: '1',
    name: 'Charles Leclerc',
    points: '267',
    place: '1',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '2',
    name: 'Charles Leclerc',
    points: '267',
    place: '2',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '3',
    name: 'Charles Leclerc',
    points: '267',
    place: '3',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '4',
    name: 'Charles Leclerc',
    points: '267',
    place: '4',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '',
    name: 'Charles Leclerc',
    points: '267',
    place: '5',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '5',
    name: 'Charles Leclerc',
    points: '267',
    place: '6',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '6',
    name: 'Charles Leclerc',
    points: '267',
    place: '6',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '7',
    name: 'Charles Leclerc',
    points: '267',
    place: '8',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '8',
    name: 'Charles Leclerc',
    points: '267',
    place: '9',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '9',
    name: 'Charles Leclerc',
    points: '267',
    place: '10',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '10',
    name: 'Charles Leclerc',
    points: '267',
    place: '11',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  },

  {
    id: '11',
    name: 'Charles Leclerc',
    points: '267',
    place: '12',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  }
];

const Standings = () => {
  return (
    <div className='flex w-full h-full flex-col'>
      <div className='flex w-full h-full flex-col bg-primary'>
        <div className='flex w-full bg-white h-52'>
          <div className='flex ml-5 mt-3 pb-3 flex-col text-charade text-2xl font-bold antialiased'>
            Constructors Standing
            <div className='flex flex-row'>
              {constructors.map(constructor => (
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
              {drivers.map(driver => (
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
