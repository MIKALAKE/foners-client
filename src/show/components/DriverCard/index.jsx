const DriverCard = ({
  car,
  lastName,
  firstName,
  firstDriver,
  secondDriver,
}) => {
  return (
    <div className="flex flex-col w-72 h-64 my-5 ml-5 cursor-pointer bg-charade rounded-md hover:bg-white-700 shadow-xl transition-all delay-200 ease-in-out">
      <div className="flex flex-col items-center">
        <div className="flex flex-row ">
          <div className="flex flex-col hover:text-secondary hover:scale-110 delay-100 easy-in-out transition-all">
            <img
              src={firstDriver}
              alt="Driver"
              className="w-24 h-24 ml-2 mr-8 mt-3"
            />
            <div className="flex flex-row">
              <div className="flex flex-start text-sm ml-1">{firstName}</div>
              <div className="flex flex-start text-sm ml-1">{lastName}</div>
            </div>
          </div>
          <div className="flex flex-col  hover:text-secondary hover:scale-110 delay-100 easy-in-out transition-all">
            <img
              src={secondDriver}
              alt="Driver"
              className="w-24 h-24 ml-10 mt-3"
            />
            <div className="flex flex-row">
              <div className="flex flex-start text-sm ml-9">{firstName}</div>
              <div className="flex flex-start text-sm ml-1 mr-1">
                {lastName}
              </div>
            </div>
          </div>
        </div>
        <img
          src={car}
          alt="Car"
          className="justify-center w-full h-full mt-5 hover:scale-110 delay-100 easy-in-out transition-all"
        />
      </div>
    </div>
  )
}

export default DriverCard
