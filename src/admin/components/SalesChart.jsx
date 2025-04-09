 
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 520 },
  { name: 'Mar', sales: 450 },
  { name: 'Apr', sales: 620 }
];

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        {/* 💜 Gradient Fon */}
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#c084fc" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        {/* 🔲 Grid xəttləri */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* 📅 Aylıq oxlar */}
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />

        {/* 🟢 Hover məlumatı */}
        <Tooltip />

        {/* 📈 Satış Xətti */}
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#8b5cf6"
          fillOpacity={1}
          fill="url(#colorSales)"
          activeDot={{ r: 6 }}
          label={{ position: 'top', fill: '#9333ea', fontSize: 12 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
