'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from "@fortawesome/free-solid-svg-icons";

interface ClimateCardProperties {
    key: number;
    actual_temperature: number;
    high_temperature: number;
    low_temperature: number;
    humidity: number;
    place: string;
    icon: 'Sunny' | 'Rainy' | 'Cloudy' | 'Thunderstorm' | 'Snowy' | 'Windy' | 'Foggy'; 
}

const iconPaths = {
    Sunny: "sol.png",
    Rainy: "lluvia.png",
    Cloudy: "dia-nublado.png",
    Thunderstorm: "tormenta.png",
    Snowy: "nieve.png",
    Windy: "viento.png",
    Foggy: "neblina-densa.png",
};

const backgroundColors = {
    Sunny: "bg-cyan-500",
    Rainy: "bg-blue-500",
    Cloudy: "bg-gray-400",
    Thunderstorm: "bg-purple-500",
    Snowy: "bg-light-blue-500",
    Windy: "bg-teal-500",
    Foggy: "bg-gray-500",
};

const descriptions = {
  Sunny: "Ideal para crecimiento. Vigilar la necesidad de agua.",
  Rainy: "Bueno para riego. Cuidado con erosión y excesos.",
  Cloudy: "Crecimiento lento. Beneficia conservación de agua.",
  Thunderstorm: "Riesgo de daño. Precaución con estructuras y cultivos.",
  Snowy: "Protege del frío. Dificulta labores agrícolas.",
  Windy: "Buena polinización. Riesgo de deshidratación y daños.",
  Foggy: "Mantiene humedad. Puede complicar labores visuales.",
};

const ClimateCard: React.FC<ClimateCardProperties> = ({actual_temperature, high_temperature, low_temperature, humidity, place, icon,}) => {
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    const convertTemperature = (temperature: number, toFahrenheit: boolean): number => {
      return toFahrenheit ? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;
    }
    const handleCheckboxChange = () => {
        setIsFahrenheit(!isFahrenheit);
      };
    const handleEditClick = () => {
        console.log('Edit button clicked');
    };  
  return (
    <div className={`relative flex flex-col items-center ${backgroundColors[icon]} rounded-lg py-4 space-y-2 px-4 gap-4`} >
    <div className="absolute top-0 right-0 m-2">
      <button className="p-1 bg-yellow-500 rounded-full hover:rounded-lg hover:bg-yellow-600 transition-all duration-300 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
      </button>
    </div>

    <div className='flex items-center justify-center'>
        <h2 className="text-xl font-semibold text-white">{place}</h2>
      </div>
      
      <div className="flex items-center space-x-2 px-4">
        <Image src={`/img/${iconPaths[icon]}`} alt={icon} width={50} height={50} />
        <p className="text-white font-bold text-2xl">
          {isFahrenheit ? `${convertTemperature(actual_temperature, true).toFixed(1)}°F` : `${actual_temperature}°C`}
        </p>
      </div>
      <p className="text-white px-4 text-center" style={{maxWidth: "300px",
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
    }}>{descriptions[icon]}</p>
      <div className="text-white flex justify-between w-full gap-5">
        <div className="bg-blue-500 rounded-full flex items-center">
          <p className="font-medium" style={{
            borderTopLeftRadius: 999,
            borderBottomLeftRadius: 999,
            backgroundColor:  "rgba(255, 255, 255, 0.2)",
            padding: '5px 10px',
            boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
          }}>Min</p>
          <p className="font-medium" style={{
            borderTopRightRadius: 999,
            borderBottomRightRadius: 999,
            backgroundColor:  "rgba(0, 0, 0, 0.2)",
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
          }}>{isFahrenheit ? `${convertTemperature(low_temperature, true).toFixed(1)}°F` : `${low_temperature}°C`}
          </p>
        </div>
        <div className="bg-red-500 rounded-full flex">
          <p className="font-medium" style={{
            borderTopLeftRadius: 999,
            borderBottomLeftRadius: 999,
            backgroundColor:  "rgba(255, 255, 255, 0.2)",
            padding: '5px 10px',
            boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
          }}>Max</p>
          <p className="font-medium" style={{
            borderTopRightRadius: 999,
            borderBottomRightRadius: 999,
            backgroundColor:  "rgba(0, 0, 0, 0.2)",
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
          }}>{isFahrenheit ? `${convertTemperature(high_temperature, true).toFixed(1)}°F` : `${high_temperature}°C`}
          </p>
        </div>
      </div>
      <div className="flex items-center text-white font-medium py-1" style={{
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        justifyContent: 'center',
        boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
        }}>
        <FontAwesomeIcon icon={faSmog} style={{ color: "white", width: "20px", marginRight: "10px" }} />
        {humidity}%
      </div>
      
    </div>
  );
};

export default ClimateCard;
