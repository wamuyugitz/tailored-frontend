import "./PupilStatus.css";

export default function PupilStatus() {
  return (
    <div className="pupil-status">
      <h3>Pupils</h3>
      <div className="pupil-status-group">
        <p>Active</p>
        <p>-----</p>
      </div>
      <div className="pupil-status-group">
        <p>Not Active</p>
        <p>-----</p>
      </div>
      <div className="pupil-status-group">
        <p>New Pupils</p>
        <p>-----</p>
      </div>
      <div className="pupil-status-group">
        <p>Pinterest</p>
        <p>-----</p>
      </div>
    </div>
  );
}
