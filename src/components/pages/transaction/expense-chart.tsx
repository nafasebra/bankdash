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
  scales: {
    x: {
      grid: {
        drawBorder: false,
        display: false
      }
    },
    y: {
      ticks: {
        drawBorder: false,
        display: false
      },
      grid: {
        display: false
      }
    }
  }
};

const labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
      backgroundColor: (color: any) => {
        const colors = color?.index === 4 ? "#16DBCC" : "#EDF0F7"
        return colors;
      },
      borderRadius: 10,
      barPercentage: 0.75,
      categoryPercentage: 1
    }
  ],
};

function ExpenseChart() {
  return <Bar height={200} options={options} data={data} />;
}

export default ExpenseChart;