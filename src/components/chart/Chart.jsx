import "./chart.css";
import { ResponsiveContainer } from "recharts";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#2A2F4F" />
          <Line type="monotone" dataKey={dataKey} stroke="#2A2F4F" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#917FB3" strokeDasharray="2 2" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
