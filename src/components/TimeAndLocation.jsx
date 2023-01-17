import { formatToLocalTime } from "../services/weatherServices";

const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
    return ( 
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-1xs sm:text-xl font-extralight">
                   {formatToLocalTime(dt, timezone,)}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className="text-white text-2xl sm:text-3xl font-medium">
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
     );
}
 
export default TimeAndLocation;