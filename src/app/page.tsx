'use client';

import ClimateCard from "./components/climatecard";
import CardSlider from "./components/cardSlider";
import useClimateData  from './useClimateData'; 
export default function Home() {
  
  const climateData = useClimateData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-center">
          <CardSlider>
            {climateData.map((data, index) => (
              <ClimateCard 
                key={index} 
                actual_temperature={data.actual_temperature}
                high_temperature={data.high_temperature}
                low_temperature={data.low_temperature}
                humidity={data.humidity}
                place={data.place}
                icon={data.icon}
              />
            ))}
          </CardSlider>
        </div>
      {/* </div> */}
    </main>
  );
}
