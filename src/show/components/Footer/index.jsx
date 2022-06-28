import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsSpeedometer2
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='flex drop-shadow-md flex-col items-center justify-center w-full bg-white h-32'>
      <div className='flex select-none items-center antialiased font-bold text-secondary flex-row pb-5'>
        <BsSpeedometer2 className=' mx-2 text-2xl' />
        FOners
      </div>
      <div className='flex items-center bg-charade w-full h-px flex-row'></div>
      <div className='flex w-full justify-center'>
        <div className='cursor-pointer flex mx-20 mt-5 flex-row items-center antialiased  hover:text-secondary hover:scale-150 delay-100 easy-in-out transition-all'>
          <BsInstagram className='cursor-pointer mx-2 text-2xl' />
        </div>
        <div className='cursor-pointer flex mx-5 mt-5 flex-row items-center antialiased hover:text-secondary hover:scale-150 delay-100 easy-in-out transition-all'>
          <BsGithub className='cursor-pointer mx-2 text-2xl' />
        </div>
        <div className='cursor-pointer flex mx-20 mt-5 flex-row items-center antialiased hover:text-secondary hover:scale-150 delay-100 easy-in-out transition-all'>
          <BsFacebook className='cursor-pointer mx-2  text-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
