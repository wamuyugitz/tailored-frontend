import PupilLinearGraph from "./PupilLinearGraph";
import PupilStatus from "./PupilStatus";
import "./TotalPupils.css";

export default function TotalPupils() {
  return (
    <div className="total-pupils ">
      <PupilLinearGraph />
      <PupilStatus />
    </div>
  );
}
