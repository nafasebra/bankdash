import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { faker } from '@faker-js/faker';

const data = [
  { month: 'Aug', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'Sep', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'Oct', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'Nov', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'Dec', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'Jan', value: faker.number.int({ min: 200, max: 500 }) },
];

const colors = [
  '#EDF0F7',
  '#EDF0F7',
  '#EDF0F7',
  '#EDF0F7',
  '#16DBCC',
  '#EDF0F7',
];

function ExpenseChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(52, 60, 106, 0.2)" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" radius={10}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ExpenseChart;
