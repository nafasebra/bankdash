import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { faker } from '@faker-js/faker';

const data = [
  { year: '2016', value: faker.number.int({ min: 200, max: 500 }) },
  { year: '2017', value: faker.number.int({ min: 200, max: 500 }) },
  { year: '2018', value: faker.number.int({ min: 200, max: 500 }) },
  { year: '2019', value: faker.number.int({ min: 200, max: 500 }) },
  { year: '2020', value: faker.number.int({ min: 200, max: 500 }) },
  { year: '2021', value: faker.number.int({ min: 200, max: 500 }) },
];

function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(52, 60, 106, 0.2)" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="rgb(22, 219, 204)" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
