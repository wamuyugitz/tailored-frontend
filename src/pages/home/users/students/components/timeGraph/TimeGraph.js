import "./TimeGraph.css";
import BarGraphProgress from "./components/BarGraphProgress";

export default function TimeGraph() {
  return (
    <div className="time-graph">
      <h2>Time Spent</h2>
      <BarGraphProgress />
    </div>
  );
}
