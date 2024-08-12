import Overview from "../../components/overview/Overview";
import "./Dashboard.css";
import TotalPupils from "../../components/totalPupils/TotalPupils";
import CourseLocation from "../../components/courseLocation/CourseLocation";
import NotificationDashboard from "../../components/notificationDashboard/NotificationDashboard";
import ActivitiesDashboard from "../../components/activitiesDashboard/ActivitiesDashboard";

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-container row">
        <div className="admin-dashboard-main col-lg-10">
          <Overview />
          <TotalPupils />
          <CourseLocation />
        </div>
        <div className="admin-dashboard-side col-lg-2">
          <NotificationDashboard />
          <ActivitiesDashboard />
        </div>
      </div>
    </div>
  );
}
