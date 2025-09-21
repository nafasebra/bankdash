import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import 'chart.piecelabel.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
  datasets: [
    {
      label: "% of Expenses",
      data: [30, 15, 35, 20],
      backgroundColor: ["#FA00FF", "#1814F3", "#FC7900", "#343C6A"],
      borderColor: "white",
      borderWidth: 12,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
    },
    legend: {
      display: true,
    },
    tooltip: {
      enabled: false,
    },
    pieceLabel: {
      // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
      render: 'label',
 
      // precision for percentage, default is 0
      precision: 0,
 
      // identifies whether or not labels of value 0 are displayed, default is false
      showZero: true,
 
      // font size, default is defaultFontSize
      fontSize: 12,
 
      // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
      fontColor: '#fff',
 
      // font style, default is defaultFontStyle
      fontStyle: 'normal',
 
      // font family, default is defaultFontFamily
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
 
      // draw text shadows under labels, default is false
      textShadow: true,
 
      // text shadow intensity, default is 6
      shadowBlur: 10,
 
      // text shadow X offset, default is 3
      shadowOffsetX: -5,
 
      // text shadow Y offset, default is 3
      shadowOffsetY: 5,
 
      // text shadow color, default is 'rgba(0,0,0,0.3)'
      shadowColor: 'rgba(255,0,0,0.75)',
 
      // draw label in arc, default is false
      arc: true,
 
      // position to draw label, available value is 'default', 'border' and 'outside'
      // default is 'default'
      position: 'default',
 
      // draw label even it's overlap, default is false
      overlap: true,
 
      // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
      showActualPercentages: true,
 
      // add padding when position is `outside`
      // default is 2
      outsidePadding: 4,
 
      // add margin of text when position is `outside` or `border`
      // default is 2
      textMargin: 4
    }
    // labels: [
    //   {
    //     render: "label",
    //     fontColor: "#fff",
    //     position: "outside",
    //   },
    //   {
    //     render: "percentage",
    //     precision: 2,
    //   },
    // ],
  },
};

function ExpenseChart() {
  return <Pie data={data} options={options} />;
}

export default ExpenseChart;
