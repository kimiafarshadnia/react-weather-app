import './App.css';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcaste from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [query, setQuery] = useState({ q: "paris" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    
    const fetchWeather = async () => {
      // const message = query.q ? query.q : "current location.";
      // toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      }).catch(error => console.error("Error", error));
    };

    fetchWeather();
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    if (weather.details === 'Clouds') return "bg-cloud";
    if (weather.details === 'Haze') return "bg-haze";
    if (weather.details === 'Rain') return "bg-rain";
    if (weather.details === 'Snow') return "bg-snow";
    if (weather.details === 'Clear') return "bg-suny";

  };
  return (
    <div  className={`mx-auto max-w-screen-sm sm:my-4 bg-cover bg-no-repeat bg-center relative  shadow-xl shadow-gray-400 ${formatBackground()}`}>
      
      <div className='bg-gray-800/50 p-3 sm:px-12 z-40 '>

        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      
        {weather && (
            <>
              <TimeAndLocation weather={weather}/>
              <TemperatureAndDetails weather={weather}/>

              <Forcaste title="hourly forecaste" items={weather.hourly}/>
              <Forcaste title="daily forecaste" items={weather.daily}/>
            </>

        )}

        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
    
  );
}

export default App;
