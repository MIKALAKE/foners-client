const ConstructorCard = ({ src }) => {
  return (
    <div className='flex w-36 h-36 mt-3 ml-10 bg-white-600 cursor-pointer items-center justify-center rounded-md shadow-xl hover:scale-110 delay-100 easy-in-out transition-all'>
      <div className='flex flex-row items-center justify-center'>
        <img src={src} alt='Constructor' className='w-11/12 h-11/12' />
      </div>
    </div>
  );
};

export default ConstructorCard;
