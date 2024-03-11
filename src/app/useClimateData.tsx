import { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const useClimateData = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC-cIp-ZqcHxnDqyk8pWPx4zbtjETFGGcc",
    authDomain: "xweather-579a3.firebaseapp.com",
    databaseURL: "https://xweather-579a3-default-rtdb.firebaseio.com/",
    projectId: "xweather-579a3",
    storageBucket: "xweather-579a3.appspot.com",
    messagingSenderId: "849330736437",
    appId: "1:849330736437:web:05337e94b5f182d955d07c",
    measurementId: "G-DLFR0SNQLL"
  };

  type ClimateCardIcon = "Sunny" | "Rainy" | "Cloudy" | "Thunderstorm" | "Snowy" | "Windy" | "Foggy";

  interface ClimateData {
    actual_temperature: number;
    high_temperature: number;
    low_temperature: number;
    humidity: number;
    place: string;
    icon: ClimateCardIcon;
  }

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [climateData, setClimateData] = useState<ClimateData[]>([]);

  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      const rootRef = ref(database);
      const snapshot = await get(rootRef);

      if (snapshot.exists()) {
        const weatherStationsData = snapshot.val();
        const allStationsData: ClimateData[] = [];

        await Promise.all(Object.keys(weatherStationsData).map(async (stationKey) => {
          const stationRef = ref(database, stationKey);
          const stationSnapshot = await get(stationRef);

          if (stationSnapshot.exists()) {
            const stationData = stationSnapshot.val();
            allStationsData.push({
              actual_temperature: stationData.actual_temperature,
              high_temperature: stationData.high_temperature,
              low_temperature: stationData.low_temperature,
              humidity: stationData.humidity,
              place: stationData.place,
              icon: stationData.icon
            });
          }
        })); 

        setClimateData(allStationsData);
      }
    };

    fetchDataFromDatabase();
  }, [database]);

  return climateData;
};

export default useClimateData;
