import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { faker } from '@faker-js/faker';

const data = [
  { month: 'January', value1: faker.number.int({ min: 200, max: 500 }), value2: faker.number.int({ min: 200, max: 500 }) },
  { month: 'February', value1: faker.number.int({ min: 200, max: 500 }), value2: faker.number.int({ min: 200, max: 500 }) },
  { month: 'March', value1: faker.number.int({ min: 200, max: 500 }), value2: faker.number.int({ min: 200, max: 500 }) },
  { month: 'April', value1: faker.number.int({ min: 200, max: 500 }), value2: faker.number.int({ min: 200, max: 500 }) },
  { month: 'May', value1: faker.number.int({ min: 200, max: 500 }), value2: faker.number.int({ min: 200, max: 500 }) },
  { month: 'June', value1: faker.number.int({ min: 200, max: 500 }), value2: faker.number.int({ min: 200, max: 500 }) },
  { month: 'July', value1: faker.number.int({ min: 200, max: 500 }), value2: faker.number.int({ min: 200, max: 500 }) },
];

function WeeklyChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(52, 60, 106, 0.2)" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value1" fill="rgba(45, 96, 255, 1)" radius={30} />
        <Bar dataKey="value2" fill="rgba(22, 219, 204, 1)" radius={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WeeklyChart;