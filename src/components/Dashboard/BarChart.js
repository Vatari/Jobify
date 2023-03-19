import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{ top: 50 }} />
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis allowDecimals={false} />
    <Tooltip />
    <Bar dataKey="count" fill="#3b82f6" barSize={75} />
  </ResponsiveContainer>;
};

export default BarChart;