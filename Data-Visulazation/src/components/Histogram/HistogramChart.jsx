import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const HistogramChart = ({ data }) => (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" label={{ value: "Number", position: "insideBottom", dy: 10 }} />
    <YAxis label={{ value: "Frequency", angle: -90, position: "insideLeft" }} />
    <Tooltip />
    <Bar dataKey="frequency" fill="#8884d8" />
  </BarChart>
);

export default HistogramChart;
