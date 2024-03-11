import React, { useState } from 'react';

const TemperatureToggle = () => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const toggleTemperature = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  const gradientBg = isFahrenheit
    ? 'bg-gradient-to-r from-yellow-400 to-red-600'
    : 'bg-gradient-to-r from-blue-600 to-purple-500';

  return (
    <div className="flex items-center justify-center w-full my-4">
      <div
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${gradientBg}`}
        onClick={toggleTemperature}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isFahrenheit ? 'translate-x-8' : 'translate-x-0'
          }`}
        ></div>
        <span
          className={`absolute text-white text-xs font-semibold ${
            isFahrenheit ? 'opacity-50' : 'opacity-100'
          }`}
          style={{ left: '0.75rem' }}
        >
          °C
        </span>
        <span
          className={`absolute text-white text-xs font-semibold ${
            isFahrenheit ? 'opacity-100' : 'opacity-50'
          }`}
          style={{ right: '0.75rem' }} 
        >
          °F
        </span>
      </div>
    </div>
  );
};

export default TemperatureToggle;
