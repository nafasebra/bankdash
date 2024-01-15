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
  title: {
    display: false,
  },
  legend: {
    display: false,
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
    <Pie data={data} options={options} />
  );
}

export default PieChart;