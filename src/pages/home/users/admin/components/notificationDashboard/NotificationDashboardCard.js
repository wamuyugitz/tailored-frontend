import "./NotificationDashboardCard.css";

export default function NotificationDashboardCard({ title, Icon, timestamp }) {
  return (
    <div className="notification-dashboard-card">
      <div className="icon-div">{Icon && <Icon className="icon" />}</div>
      <div className="notice">
        <h3>{title}</h3>
        <p>{timestamp}</p>
      </div>
    </div>
  );
}
