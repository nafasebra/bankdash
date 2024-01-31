import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
      backgroundColor: 'rgba(45, 96, 255, 1)',
      borderWidth: 2,
      borderRadius: 30,
      barPercentage: 0.45,
      categoryPercentage: 1
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
      backgroundColor: 'rgba(254, 170, 9, 1)',
      borderWidth: 2,
      borderRadius: 30,
      barPercentage: 0.45,
      categoryPercentage: 1
    },
  ],
};

function CreditChart() {
  return <Bar height={150} options={options} data={data} />;
}

export default CreditChart;