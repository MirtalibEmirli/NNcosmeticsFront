import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dateSalesData = Array.from({ length: 30 }, (_, i) => {
  const day = String(i + 1).padStart(2, '0');
  return {
    date: `${day} Apr`,
    sales: Math.floor(250 + Math.random() * 250) // Random satış: 250–500 arası
  };
});


export function DateSalesChart() {
  return (
    <ResponsiveContainer width={1200} height="100%">
      <LineChart data={dateSalesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
