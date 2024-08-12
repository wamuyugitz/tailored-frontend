import Header from "../../../common/components/header/Header";
import "./Screen.css";
import Dashboard from "./dashboard/Dashboard";
import Settings from "./settings/Settings";
import Pupils from "./pupils/Pupils";
import Courses from "../../../common/screens/courses/Courses";
import Assignments from "../../../common/screens/assignments/Assignments";
import Marks from "./marks/Marks";
import { useLocation, useParams } from "react-router-dom";
import Instructors from "./instructors/Instructors";
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
    marks: Marks,
    pupils: Pupils,
    instructors: Instructors,
    courses: Courses,
    settings: Settings,
    dashboard: Dashboard,
    "course-read": CourseRead,
    "lesson-detail": LessonDetail,
    assignments: Assignments,
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
