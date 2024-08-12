import Header from "../../../common/components/header/Header";
import "./Screen.css";
import Dashboard from "./dashboard/Dashboard";
import Settings from "./settings/Settings";
import Pupils from "./pupils/Pupils";
import Courses from "../../../common/screens/courses/Courses";
import Assignments from "../../../common/screens/assignments/Assignments";
import Marks from "./marks/Marks";

import { useLocation } from "react-router-dom";

export default function Screen({
  setShowNotification,
  userType,
  handleModalType,
}) {
  const { pathname } = useLocation();

  const screens = {
    marks: Marks,
    pupils: Pupils,
    courses: Courses,
    settings: Settings,
    dashboard: Dashboard,
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
      {ScreenToRender && <ScreenToRender handleModalType={handleModalType} />}
    </div>
  );
}
