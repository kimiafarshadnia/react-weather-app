import { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = (e) => {
  // && e.key === 'Enter'
    if (city !== ""){
      setQuery({ q: city });
      setCity("")
    }
    
  };

  const handleLocationClick = () => {

    if (navigator.geolocation) {
      // toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleSearchInput =(e) =>{
    
    setCity(e.currentTarget.value);
  
  }
  return (
    <div className="flex flex-col justify-center mb-6">
      <div className="flex justify-between items-center mb-6">

        <div>
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>

        <div className="flex flex-row items-center justify-around">

          <button
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °C
          </button>

          <p className="text-xl text-white mx-1">|</p>

          <button
            name="imperial"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">

        <input
          value={city}
          onChange={handleSearchInput}
          type="text"
          // onKeyPress={handleSearchClick}
          placeholder="Search for city...."
          className="bg-sky-900/75 border-white rounded-md sm:text-xl font-light px-2 py-1 sm:p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase placeholder:text-gray-300 placeholder:text-sm sm:placeholder:text-base mr-2 text-white"
        />
         <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
}

export default Inputs;