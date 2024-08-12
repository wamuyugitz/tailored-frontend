import "./NotificationDashboard.css";
import NotificationDashboardCard from "./NotificationDashboardCard";
import PestControlIcon from "@mui/icons-material/PestControl";
import PersonIcon from "@mui/icons-material/Person";

export default function NotificationDashboard() {
  return (
    <div className="notification-dashboard">
      <p className="title">Notifications</p>
      <NotificationDashboardCard
        Icon={PestControlIcon}
        title={"You solved an issue."}
        timestamp={"Just now"}
      />
      <NotificationDashboardCard
        Icon={PersonIcon}
        title="New user registered."
        timestamp={"59 minutes ago"}
      />
      <NotificationDashboardCard
        Icon={PestControlIcon}
        title={"You solved an issue."}
        timestamp={"12 hours ago"}
      />
    </div>
  );
}
