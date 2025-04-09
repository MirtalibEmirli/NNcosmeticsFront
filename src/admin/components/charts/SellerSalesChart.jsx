import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const sellerData = [
  { name: 'Nigar', sales: 520 },
  { name: 'Eldar', sales: 430 },
  { name: 'Aysel', sales: 690 },
  { name: 'Murad', sales: 310 }
];

export function SellerSalesChart() {
  return (
    <ResponsiveContainer width={300} height="100%">
      <BarChart data={sellerData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#a78bfa" />
      </BarChart>
    </ResponsiveContainer>
  );
}
