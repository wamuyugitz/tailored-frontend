import Header from "../../../common/components/header/Header";
import "./Screen.css";
import Dashboard from "./dashboard/Dashboard";
import Assignments from "../../../common/screens/assignments/Assignments";
import Grades from "./grades/Grades";
import Courses from "../../../common/screens/courses/Courses";
import OfflineContents from "./offlineContents/OfflineContents";
import Settings from "./settings/Settings";
import { useLocation, useParams } from "react-router-dom";
import CourseRead from "../../../common/screens/courseRead/CourseRead";
import LessonDetail from "../../../common/screens/lessonDetail/LessonDetail";

export default function Screen({
  setShowNotification,
  userType,
  handleModalType,
}) {
  const { pathname } = useLocation();
  const params = useParams();
  const id = params["*"];

  const screens = {
    grades: Grades,
    courses: Courses,
    settings: Settings,
    dashboard: Dashboard,
    assignments: Assignments,
    offline: OfflineContents,
    "course-read": CourseRead,
    "lesson-detail": LessonDetail,
  };

  let ScreenToRender = null;
  Object.keys(screens).forEach((path) => {
    if (pathname.includes(path)) {
      ScreenToRender = screens[path];
    }
  });

  return (
    <div className="screen">
      <Header
        setShowNotification={setShowNotification}
        userType={userType}
        handleModalType={handleModalType}
      />
      {ScreenToRender && (
        <ScreenToRender id={id} handleModalType={handleModalType} />
      )}
    </div>
  );
}
