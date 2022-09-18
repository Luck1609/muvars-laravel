import { useState } from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
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

export default function TicketStats() {

  let data = {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: '',
        data: [521, 1500, 500, 740, 125, 480, 250],
        fill: false,
        backgroundColor: 'blue',
        borderColor: '#1976D2',
        borderWidth: 1,
        tension: 0.25
      }
    ],
  };

  return (
    <div className="w-full bg-white shadow-sm relative mt-10 rounded-md">
      <label className="text-xl font-semibold block p-5 pb-0">Tickets Sold</label>
      <div className="h-60 lg:h-96 md:p-7 relative">
        <Line
          data={data}
          options={options}
          height={400}
        />
      </div>
    </div>
  )
};

