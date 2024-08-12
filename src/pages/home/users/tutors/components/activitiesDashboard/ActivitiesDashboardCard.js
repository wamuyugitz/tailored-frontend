import "./ActivitiesDashboardCard.css";

export default function ActivitiesDashboardCard({ img, title, timestamp }) {
  return (
    <div className="activity-dashboard-card">
      <img src={img} alt="profile" />
      <div className="activity-content">
        <h3>{title}</h3>
        <p>{timestamp}</p>
      </div>
    </div>
  );
}
