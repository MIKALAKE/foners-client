import { FiLogIn } from 'react-icons/fi';
import { GiPodium } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsCalendarFill, BsSpeedometer2 } from 'react-icons/bs';

import Paths from 'process/routes/paths';
import { logOut } from 'process/slices/userSlice';

const Navbar = () => {
  const currentUser = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = e => {
    e.preventDefault();
    dispatch(logOut({}));
    navigate(Paths.public.HOME_PATH);
  };

  return (
    <div className='flex drop-shadow-xl sticky top-0  bg-secondary w-full h-16 '>
      <div className='flex items-center flex-coll w-full'>
        <div
          onClick={() => navigate(Paths.public.HOME_PATH)}
          className='flex select-none items-center antialiased text-white font-bold flex-row text-2xl ml-5'>
          <BsSpeedometer2 className='mx-2 select-none text-4xl' />
          FOners
        </div>
        <div className='flex select-none items-center flex-row font-semibold text-white text-lg mt-1 ml-10 cursor-pointer hover:text-charade hover:scale-125 delay-100 easy-in-out transition-all'>
          <BsCalendarFill className='mx-2 select-none' /> Calendar
        </div>
        <div
          onClick={() => navigate(Paths.public.STANDINGS_PATH)}
          className='flex items-center select-none flex-row font-semibold text-white text-lg mt-1 ml-10 cursor-pointer hover:text-charade hover:scale-125 delay-100 easy-in-out transition-all'>
          <GiPodium className='mx-2 select-none text-1xl' />
          Standings
        </div>
      </div>
      <div className='flex items-center flex-coll w-40 flex-end'>
        {currentUser.isLoggedIn ? (
          <div
            onClick={handleLogOutClick}
            className='flex items-center w-full select-none flex-row font-semibold text-white text-lg mt-1 cursor-pointer hover:text-charade hover:scale-125 delay-100 easy-in-out transition-all'>
            <FiLogIn className='mx-2 select-none text-1xl' />
            Log Out
          </div>
        ) : (
          <div
            onClick={() => navigate(Paths.public.LOGIN_PATH)}
            className='flex items-center w-full select-none flex-row font-semibold text-white text-lg mt-1 cursor-pointer hover:text-charade hover:scale-125 delay-100 easy-in-out transition-all'>
            <FiLogIn className='mx-2 select-none text-1xl' />
            Log In
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
