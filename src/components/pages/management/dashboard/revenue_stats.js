import {
  Chart,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
Chart.register(
  BarElement,
  Title,
  Tooltip,
  Legend
)


const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },

  maintainAspectRatio: false
};

export default function RevenueStats() {

  const setView = (name) => {
    setDataView(name)
  }


  let data = {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: '',
        data: [5124, 1500, 3240, 1740, 1295, 4802, 2500],
        fill: false,
        backgroundColor: '#007bff',
        //  [
        //   '#007bff',
        //   '#ef4444',
        //   '#64748b',
        //   '#14b8a6',
        //   '#a855f7',
        //   '#f59e0b',
        //   '#10b981',
        // ],
        // borderColor: '#1976D2',
        borderWidth: 0,
        borderSkipped: 'right'
      }
    ],
  };

  return (
    <div className="w-full bg-white shadow-sm relative mt-10 rounded-2xl p-1">
      <label className="text-xl font-semibold block p-5 pb-0">Revenue Generated</label>

      <div className="h-60 lg:h-96 md:p-7 relative">
        <Bar
          data={data}
          options={options}
          height={400}
        />
      </div>
    </div>
  )
};

