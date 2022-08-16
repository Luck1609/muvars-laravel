import {
  Chart,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
Chart.register(
  Title,
  Tooltip,
  ArcElement,
  Legend
)


const options = {
  plugins: {
    legend: {
      display: false,

    }
  },

  maintainAspectRatio: false
};

export default function RevenueStatsDoughnut() {


  let data = {
    labels: ['Acc - Ksi', 'Acc - Takoradi', 'Acc - Syi', 'Acc - Tamale', 'Acc - Wa'],
    datasets: [
      {
        label: '',
        data: [5124, 1500, 3240, 1740, 1295],
        fill: false,
        backgroundColor: [
          '#007bff',
          '#ef4444',
          '#14b8a6',
          '#a855f7',
          '#f59e0b',
        ],
        // borderColor: '#1976D2',
        borderWidth: 0
      }
    ],
  };

  return (
    <div className="w-full bg-white shadow-sm relative mt-5 rounded-2xl p-1">
      <label className="text-xl font-semibold block p-5 pb-0">Revenue Per Route</label>

      <div className="h-60 lg:h-96 md:p-7 relative">
        <Doughnut
          data={data}
          options={options}
          height={400}
        />
      </div>
    </div>
  )
};

