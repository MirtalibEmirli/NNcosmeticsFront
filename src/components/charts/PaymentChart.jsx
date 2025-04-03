import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Kart', value: 65 },
  { name: 'Nəğd', value: 35 }
];

const COLORS = ['#8b5cf6', '#a78bfa'];

export function PaymentChart() {
  return (
    <ResponsiveContainer width={300} height="100%" > 
      <PieChart >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
}
