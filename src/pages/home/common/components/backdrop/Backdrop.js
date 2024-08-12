import React from "react";
import "./Backdrop.css";

export default function Backdrop({ Component }) {
  return <div className="backdrop">{Component}</div>;
}
