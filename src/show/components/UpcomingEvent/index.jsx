const UpcomingEvent = () => {
  return (
    <div className='flex bg-charade h-52'>
      <div className='flex ml-5 mt-3 flex-col text-white text-3xl font-bold antialiased'>
        Upcoming Event
        <div className='flex ml-5 mt-2 w-full h-full '>
          <img
            className='flex w-44 h-28'
            src='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria.png'
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
  );
};

export default UpcomingEvent;
