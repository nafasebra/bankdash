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

const labels = ['2016', '2017', '2018', '2019', '2020', '2021'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
      borderColor: 'rgb(254, 170, 9)',
    },
  ],
};

function InvestmentChart() {
  return <Line height={120} options={options} data={data} />;
}

export default InvestmentChart
