import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
  datasets: [
    {
      label: '% of Expenses',
      data: [30, 15, 20, 35],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
      ],
      borderColor: 'white',
      borderWidth: 12,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  }
};

function ExpenseChart() {
  return (
    <Pie data={data} options={options} />
  );
}

export default ExpenseChart;