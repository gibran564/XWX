import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

interface HumidityWidgetProps {
  humidity: number;
}

export default function HumidityWidget({ humidity }: HumidityWidgetProps) {
  return (
    <div className="flex items-center bg-gray-200 rounded-lg p-4">
      <FontAwesomeIcon icon={faTint} className="text-blue-500 text-4xl mr-4" />
      <div>
        <p className="text-gray-700 text-xl mb-1">Humedad</p>
        <p className="text-gray-800 text-3xl font-semibold">{humidity}%</p>
      </div>
    </div>
  );
}
