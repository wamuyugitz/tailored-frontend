import React, { useEffect, useState } from "react";
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
  { name: "Eng", uv: Math.random() * 30000 },
  { name: "Math", uv: Math.random() * 30000 },
  { name: "Kiswahili", uv: Math.random() * 30000 },
  { name: "Chem", uv: Math.random() * 30000 },
  { name: "Other", uv: Math.random() * 30000 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#413ea0"];

const Example = () => {
  const [containerWidth, setContainerWidth] = useState("30vw");

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setContainerWidth("100%");
    } else {
      setContainerWidth("30vw");
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
      }}
    >
      <ResponsiveContainer width="100%" height={160}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 30000]} ticks={[0, 10000, 20000, 30000]} />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8">
            {data.map((entry, index) => (
              <cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
