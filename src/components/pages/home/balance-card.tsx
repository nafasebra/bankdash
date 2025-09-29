import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { faker } from '@faker-js/faker';

const data = [
  { month: 'January', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'February', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'March', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'April', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'May', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'June', value: faker.number.int({ min: 200, max: 500 }) },
  { month: 'July', value: faker.number.int({ min: 200, max: 500 }) },
];

function BalanceChart() {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(52, 60, 106, 0.2)" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="rgb(45, 96, 255)"
          fill="rgba(45, 96, 255, 0.1)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default BalanceChart;
