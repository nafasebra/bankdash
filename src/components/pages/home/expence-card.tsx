import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Entertainment', value: 30, color: '#FA00FF' },
  { name: 'Bill Expense', value: 15, color: '#1814F3' },
  { name: 'Investment', value: 35, color: '#FC7900' },
  { name: 'Others', value: 20, color: '#343C6A' },
];

const COLORS = ['#FA00FF', '#1814F3', '#FC7900', '#343C6A'];

function ExpenseChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props: any) => `${props.name} ${(props.percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ExpenseChart;
