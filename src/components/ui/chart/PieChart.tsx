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
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  title: {
    display: true,
    text: 'Distribution of Expenses',
    fontSize: 20,
  },
  legend: {
    display: true,
    position: 'top',
  },
  tooltips: {
    enabled: true,
    callbacks: {
      title: function(tooltipItems, data) {
        return data.labels[tooltipItems[0].index];
      },
      body: function(tooltipItem, data) {
        return data.datasets[0].data[tooltipItem.index] + '%';
      },
    },
  },
};

function PieChart() {
  return (
    <Pie data={data} options={{ ...options }} />
  );
}

export default PieChart;