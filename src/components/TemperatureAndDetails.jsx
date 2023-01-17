import {UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherServices';

const TemperatureAndDetails = ({weather:{details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone}}) => {
    return (  
        <div>

            <div className="flex items-center justify-center sm:py-2 text-xl text-cyan-300">
                <p>{details}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={iconUrlFromCode(icon)} alt="" className="w-16 sm:w-20"/>

                <p className="text-4xl sm:text-5xl">{`${temp.toFixed()}°`}</p>

                <div className="flex flex-col space-y-2">


                    <div className="flex font-light text-2xs sm:text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Real fell :
                        <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                    </div>

                    <div className="flex font-light text-2xs sm:text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity :
                        <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                    </div>

                    <div className="flex font-light text-2xs sm:text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind :
                        <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-around text-white text-2xs sm:text-sm ">
                <div className='flex flex-col sm:flex-row items-center'>
                    <UilSun/>
                    <p className='font-light '>Sunrise </p>
                    <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm')}</span>
                </div>

                <div className='flex flex-col sm:flex-row items-center'>
                    <UilSunset/>
                    <p className='font-light '>Sunset </p>
                    <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, 'hh:mm')}</span>
                </div>
                
                <div className='flex flex-col sm:flex-row items-center'>
                    <UilSun/>
                    <p className='font-light '>H : <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span></p>
                </div>

                <div className='flex flex-col sm:flex-row items-center'>
                    <UilSun/>
                    <p className='font-light '>L : <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span></p>
                </div>
                
    
            </div>

        </div>
    );
}
 
export default TemperatureAndDetails;