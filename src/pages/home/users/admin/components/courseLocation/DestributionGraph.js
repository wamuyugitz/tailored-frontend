import React, { useEffect, useState } from "react";
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

  const [containerWidth, setContainerWidth] = useState("30vw");

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setContainerWidth("100%");
    } else {
      setContainerWidth("25vw");
    }
  };

  useEffect(() => {
    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: containerWidth,
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
