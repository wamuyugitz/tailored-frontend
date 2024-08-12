import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Feb", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Mar", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Apr", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "May", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Jun", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Jul", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Aug", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Sep", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Oct", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Nov", uv: Math.random() * 30000, pv: Math.random() * 30000 },
  { name: "Dec", uv: Math.random() * 30000, pv: Math.random() * 30000 },
];

const PupilLinearGraph = () => {
  const [containerWidth, setContainerWidth] = useState("46vw");

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setContainerWidth("100%");
    } else {
      setContainerWidth("46vw");
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

  const opacity = {
    uv: 1,
    pv: 1,
  };

  return (
    <div
      style={{
        width: containerWidth,
        background: "white",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
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

          <Line
            type="monotone"
            dataKey="pv"
            strokeOpacity={opacity.pv}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            strokeOpacity={opacity.uv}
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

PupilLinearGraph.demoUrl =
  "https://codesandbox.io/p/sandbox/customized-legend-event-gwscjg";

export default PupilLinearGraph;
