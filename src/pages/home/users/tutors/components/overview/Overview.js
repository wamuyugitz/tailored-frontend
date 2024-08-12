import React, { useEffect, useState } from "react";
import "./Overview.css";
import OverviewCard from "./OverviewCard";
import axios from "axios";

export default function Overview() {
  const [overviewData, setOverviewData] = useState([]);

  useEffect(() => {
    // Fetch the overview data from the backend
    const fetchOverviewData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/overview");
        const { totalPupils, newPupils } = response.data;

        // Calculate percentages for the card (these are placeholders)
        const percentageTotalPupils = 100; // Example percentage
        const percentageNewPupils = ((newPupils / totalPupils) * 100).toFixed(
          2
        );

        setOverviewData([
          {
            title: "Total Pupils",
            number: totalPupils,
            percentage: percentageTotalPupils,
          },
          {
            title: "New Pupils",
            number: newPupils,
            percentage: percentageNewPupils,
          },
        ]);
      } catch (error) {
        console.error("Error fetching overview data", error);
      }
    };

    fetchOverviewData();
  }, []);

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="overview-container row">
        {overviewData.map((item, index) => (
          <OverviewCard
            key={index}
            title={item.title}
            number={item.number}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
}
