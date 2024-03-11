'use client';

import { Line } from "react-chartjs-2";
import { ChartOptions, Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


interface TemperatureChartProps {
  data: number[];
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: "Temperatura",
        data: data,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  // Actualizado para chart.js versión 3 o posterior
  const chartOptions: ChartOptions<'line'> = {
    scales: {
      y: { // Cambiado de 'yAxes' a 'y'
        beginAtZero: true,
      },
      x: { // Definido explícitamente para evitar advertencias/errores
        // Configuraciones adicionales para el eje X pueden ir aquí
      },
    },
    // Puedes agregar más opciones aquí según sea necesario
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Cambio de Temperatura</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default TemperatureChart;
