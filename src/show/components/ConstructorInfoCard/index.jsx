const ConstructorInfoCard = ({ constructor }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex w-full h-full items-start flex-col'>
        <div className='flex w-full h-full justify-center'>
          <div className='flex h-20 w-20 align-center'>
            <img src={constructor?.logo_url} alt={constructor?.name} />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex text-lg font-bold'>Description:</div>
          <div className='flex h-full'>{constructor?.description}</div>
        </div>
        <div className='flex flex-row'>
          <div className='flex text-lg font-bold mr-2'>First Apparence:</div>
          <div className='flex'>{constructor?.first_apparence}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Origins:</div>
          <div className='flex'>{constructor?.origins}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Titles:</div>
          <div className='flex'>{constructor?.titles}</div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex text-lg font-bold mr-2'>Points:</div>
          <div className='flex text-xl font-semibold text-secondary'>
            {constructor?.points}
          </div>
        </div>
        <img src={constructor?.car_url} alt={constructor?.name} />
      </div>
    </div>
  );
};

export default ConstructorInfoCard;
