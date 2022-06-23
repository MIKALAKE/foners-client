import { BsSpeedometer2 } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className="flex drop-shadow-xl bg-secondary w-full h-14 items-center flex-row">
      <div className="flex select-none items-center text-white flex-row text-2xl ml-5">
        <BsSpeedometer2 className="mx-2 select-none text-4xl" />
        FOners
      </div>
      <div className="flex select-none items-center flex-row text-white text-md mt-1 ml-10 cursor-pointer hover:text-charade">
        Calendar
      </div>
      <div className="flex items-center select-none flex-row text-white text-md mt-1 ml-10 cursor-pointer hover:text-charade">
        Standings
      </div>
    </div>
  )
}

export default Navbar
