import { GiPodium } from 'react-icons/gi';
import { BsCalendarFill, BsSpeedometer2 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='flex drop-shadow-xl bg-secondary w-full h-14 items-center flex-row'>
      <div className='flex select-none items-center antialiased text-white font-bold flex-row text-2xl ml-5'>
        <BsSpeedometer2 className='mx-2 select-none text-4xl' />
        FOners
      </div>
      <div className='flex select-none items-center flex-row font-semibold text-white text-lg mt-1 ml-10 cursor-pointer hover:text-charade hover:scale-125 delay-100 easy-in-out transition-all'>
        <BsCalendarFill className='mx-2 select-none' /> Calendar
      </div>
      <div className='flex items-center select-none flex-row font-semibold text-white text-lg mt-1 ml-10 cursor-pointer hover:text-charade hover:scale-125 delay-100 easy-in-out transition-all'>
        <GiPodium className='mx-2 select-none text-1xl' />
        Standings
      </div>
    </div>
  );
};

export default Navbar;
