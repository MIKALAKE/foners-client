import { ConstructorCard, DriverCard } from '../../../components';

const Home = () => {
  const firstDriver = {
    first_name: 'Charles',
    last_name: 'Leclerc',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  };

  const secondDriver = {
    first_name: 'Lewis',
    last_name: 'Hamiltion',
    avatar_url:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
  };

  return (
    <div className='flex flex-col w-full h-full '>
      <div className='flex bg-charade h-52'>
        <div className='flex ml-5 mt-3 flex-col text-white text-3xl font-bold antialiased'>
          Upcoming Events
          <div className='flex ml-5 mt-2 w-full h-full '>
            <img
              className='flex w-44 h-28'
              src='https://www.clipartmax.com/png/middle/326-3263821_19-track-vector-race-course-huge-freebie-download-for-formula-1-circuits.png'
              alt='circuit'></img>
            <div className='flex flex-col'>
              <div className='flex ml-5 text-white text-3xl items-center font-bold antialiased'>
                Barcelona Grand Prix
                <div className='flex ml-5 text-white text-2xl font-bold antialiased'>
                  28JUL - 31JUL
                </div>
              </div>
              <div className='flex ml-10 text-white text-lg font-bold antialiased'>
                Spain Weekend Biggest Grand Prix
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex bg-white h-60 overflow-x-auto'>
        <div className='flex ml-5 mt-3 fixed  text-black text-2xl font-bold antialiased'>
          Constructors
        </div>
        <div className='flex ml-5 mt-10 flex-row justify-between'>
          <ConstructorCard src='http://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png' />
          <ConstructorCard src='https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png' />
          <ConstructorCard src='https://brandlogos.net/wp-content/uploads/2022/05/red_bull_racing-logo-brandlogos.net_.png' />
          <ConstructorCard src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Alpine_F1_Team_Logo.svg/2233px-Alpine_F1_Team_Logo.svg.png' />
          <ConstructorCard src='https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/2560px-McLaren_Racing_logo.svg.png' />
          <ConstructorCard src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_Alfa_Romeo_Racing_Orlen.svg/2560px-Logo_Alfa_Romeo_Racing_Orlen.svg.png' />
          <ConstructorCard src='https://cdn.worldvectorlogo.com/logos/scuderia-alpha-tauri-1.svg ' />
          <ConstructorCard src='https://www.gran-turismo.com/gtsport/decal/8574862557608674816_1.png' />
          <ConstructorCard src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo_Haas_F1.png' />
          <ConstructorCard src='https://i.imgur.com/ckOGBzR.png' />
        </div>
      </div>
      <div className='flex bg-primary overflow-x-auto'>
        <div className='flex ml-5 fixed  text-white text-3xl font-bold antialiased'>
          Drivers
        </div>
        <div className='flex mt-7 mb-10 flex-row justify-between'>
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
          <DriverCard
            firstDriver={firstDriver}
            secondDriver={secondDriver}
            car='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/6col-retina/image.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
