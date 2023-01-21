import { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

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


  
  const handleSelect = city => {
    geocodeByAddress(city)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  const handleSearchInput =(city) =>{
    
    setCity(city);
  
  }
  return (
    // <div className="flex flex-col justify-center mb-6">
    //   <div className="flex justify-between items-center mb-6">

    //     <div>
    //       <UilLocationPoint
    //         size={25}
    //         className="text-white cursor-pointer transition ease-out hover:scale-125"
    //         onClick={handleLocationClick}
    //       />
    //     </div>

    //     <div className="flex flex-row items-center justify-around">

    //       <button
    //         name="metric"
    //         className="text-xl text-white font-light transition ease-out hover:scale-125"
    //         onClick={handleUnitsChange}
    //       >
    //         °C
    //       </button>

    //       <p className="text-xl text-white mx-1">|</p>

    //       <button
    //         name="imperial"
    //         className="text-xl text-white font-light transition ease-out hover:scale-125"
    //         onClick={handleUnitsChange}
    //       >
    //         °F
    //       </button>
    //     </div>
    //   </div>
    //   <div className="flex flex-row items-center justify-center">

    //     <input
    //       value={city}
    //       onChange={handleSearchInput}
    //       type="text"
    //       // onKeyPress={handleSearchClick}
    //       placeholder="Search for city...."
    //       className="bg-sky-900/75 border-white rounded-md sm:text-xl font-light p-3 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase placeholder:text-gray-300 placeholder:text-sm sm:placeholder:text-base mr-2 text-white"
    //     />
    //      <UilSearch
    //       size={25}
    //       className="text-white cursor-pointer transition ease-out hover:scale-125"
    //       onClick={handleSearchClick}
    //     />
    //   </div>
    // </div>
    <PlacesAutocomplete
        value={city}
        onChange={handleSearchInput}
        onSelect={handleSelect}
      >
        
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

          
          <div>
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
              
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className:"bg-sky-900/75 border-white rounded-md sm:text-xl font-light p-3 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase placeholder:text-gray-300 placeholder:text-sm sm:placeholder:text-base mr-2 text-white",
                })}
              />
              <UilSearch
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleSearchClick}
              />
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        
      </PlacesAutocomplete>
  );
}

export default Inputs;