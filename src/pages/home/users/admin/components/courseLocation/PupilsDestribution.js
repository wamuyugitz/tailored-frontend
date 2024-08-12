import DestributionGraph from "./DestributionGraph";
import "./PupilsDestribution.css";

export default function PupilsDestribution() {
  return (
    <div className="pupils-destribution">
      <h2>Pupils Location</h2>
      <DestributionGraph />
    </div>
  );
}
