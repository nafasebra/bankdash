import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        border: {
          dash: [2,4],
        },  
        color: 'rgba(52, 60, 106, 0.2)'
      }
    },
    y: {
      grid: {
        border: {
          dash: [2,4],
        },  
        color: 'rgba(52, 60, 106, 0.2)'
      }
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
      borderColor: 'rgb(45, 96, 255)',
      backgroundColor: 'rgba(45, 96, 255, 0.1)',
      lineTension: 0.4,
      fill: true,
    },
  ],
};

function BalanceChart() {
  return <Line height={120} options={options} data={data} />;
}

export default BalanceChart
