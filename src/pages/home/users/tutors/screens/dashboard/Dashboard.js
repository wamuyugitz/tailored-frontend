import Overview from "../../components/overview/Overview";
import "./Dashboard.css";
import TotalPupils from "../../components/totalPupils/TotalPupils";
import CourseLocation from "../../components/courseLocation/CourseLocation";
import NotificationDashboard from "../../components/notificationDashboard/NotificationDashboard";
import ActivitiesDashboard from "../../components/activitiesDashboard/ActivitiesDashboard";

export default function Dashboard() {
  return (
    <div className="tutor-dashboard">
      <div className="tutor-dashboard-container row">
        <div className="tutor-dashboard-main col-lg-9">
          <Overview />
          <TotalPupils />
          <CourseLocation />
        </div>
        <div className="tutor-dashboard-side col-lg-3">
          <NotificationDashboard />
          <ActivitiesDashboard />
        </div>
      </div>
    </div>
  );
}
