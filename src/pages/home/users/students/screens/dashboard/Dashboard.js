import CalendarProfileDetails from "../../components/calendarProfileDetails/CalendarProfileDetails";
import MyCourses from "../../components/myCourses/MyCourses";
import QuickStart from "../../components/quickStart/QuickStart";
import Salutation from "../../components/salutation/Salutation";
import TimeGraph from "../../components/timeGraph/TimeGraph";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="students-dashboard">
      <div className="students-dashboard-container row">
        <div className="students-dashboard-main col-lg-9">
          <div className="icon-div">
            <Salutation />
          </div>
          <QuickStart />
          <TimeGraph />
          <MyCourses />
        </div>
        <div className="students-dashboard-side col-lg-3">
          <CalendarProfileDetails />
        </div>
      </div>
    </div>
  );
}
