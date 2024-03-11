import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";

interface TemperatureWidgetProps {
  temperature: number;
}

export default function TemperatureWidget({ temperature }: TemperatureWidgetProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
          <FontAwesomeIcon icon={faThermometerHalf} className="text-3xl" />
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Temperatura Actual</p>
          <p className="text-gray-800 text-2xl font-semibold">{temperature}°C</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-gray-200 rounded-full p-4 mr-4">
          <FontAwesomeIcon icon={faThermometerHalf} className="text-gray-600 text-3xl" />
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Temperatura Máxima</p>
          <p className="text-gray-800 text-2xl font-semibold">28°C</p>
        </div>
      </div>
    </div>
  );
}
