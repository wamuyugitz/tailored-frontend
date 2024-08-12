import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Feb",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Mar",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Apr",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "May",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Jun",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Jul",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Aug",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Sep",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Oct",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Nov",
    hours: Math.floor(Math.random() * 100),
  },
  {
    name: "Dec",
    hours: Math.floor(Math.random() * 100),
  },
];

const BarGraphProgress = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={40}
      >
        <XAxis dataKey="name" />
        <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        {/* <Legend /> */}
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="hours" fill="#78d4da" background={{ fill: "#eceefc" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraphProgress;
