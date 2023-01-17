import {iconUrlFromCode } from '../services/weatherServices';

const Forcaste = ({title, items}) => {
    return ( 
        <div>
            <div className="flex items-center justify-start mt-6 mb-2">

                <p className="text-white font-medium uppercase text-sm sm:text-base">{title}</p>
            </div>

            <hr className="mb-2"/>

            <div className="flex flex-row items-center justify-between text-white">
                {items.map((item, index) => (

                    <div key={index} className="flex flex-col items-center justify-center ">
                        <p className="font-light text-2xs sm:text-sm ">
                        {item.title}
                        </p>
                        <img src={iconUrlFromCode(item.icon)} alt="" className="w-12 my-1"/>
                        <p className="font-medium ">{`${item.temp.toFixed()}°`}</p>
                    </div>
                ))}

            </div>
        </div>
     );
}
 
export default Forcaste;