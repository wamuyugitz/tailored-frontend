import React from "react";
import "./OverviewCard.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function OverviewCard({ title, number, percentage }) {
  return (
    <div className="overview-card ">
      <div className="overview-card-detail">
        <p>{title}</p>
        <h3>{number}</h3>
      </div>
      <div className="trajectory">
        <p>{percentage}</p>
        <TrendingUpIcon className={"trend-icon"} />
      </div>
    </div>
  );
}
