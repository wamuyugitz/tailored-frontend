import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Eng", value: Math.random() * 100 },
  { name: "Math", value: Math.random() * 100 },
  { name: "Kiswahili", value: Math.random() * 100 },
  { name: "Chem", value: Math.random() * 100 },
  { name: "Other", value: Math.random() * 100 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#413ea0"];

const DestributionGraph = () => {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);
  const dataWithPercentage = data.map((entry) => ({
    ...entry,
    percentage: ((entry.value / totalValue) * 100).toFixed(2),
  }));

  return (
    <div
      style={{
        width: "23vw",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width="50%" height={100}>
        <PieChart>
          <Pie
            data={dataWithPercentage}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          >
            {dataWithPercentage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ width: "50%" }}>
        {dataWithPercentage.map((entry, index) => (
          <div
            key={`label-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span style={{ marginRight: "10px" }}>{entry.percentage}%</span>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: colors[index],
                marginRight: "10px",
              }}
            ></div>
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestributionGraph;
