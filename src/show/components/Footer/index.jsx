import {
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsSpeedometer2,
} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="flex drop-shadow-md flex-col items-center justify-center w-full bg-white h-32">
      <div className="flex select-none items-center text-secondary flex-row pb-5">
        <BsSpeedometer2 className=" mx-2 text-2xl" />
        FOners
      </div>
      <div className="flex items-center bg-charade w-full h-px flex-row "></div>
      <div className="flex w-full justify-center">
        <div className="cursor-pointer flex mx-20 mt-5 flex-row items-center  hover:text-secondary transition delay-150">
          <BsInstagram className="cursor-pointer mx-2 text-2xl" />
        </div>
        <div className="cursor-pointer flex mx-5 mt-5 flex-row items-center hover:text-secondary transition delay-150">
          <BsGithub className="cursor-pointer mx-2 text-2xl" />
        </div>
        <div className="cursor-pointer flex mx-20 mt-5 flex-row items-center hover:text-secondary transition delay-150 ">
          <BsFacebook className="cursor-pointer mx-2  text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Footer
