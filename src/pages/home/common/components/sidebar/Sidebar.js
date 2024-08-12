import "./Sidebar.css";
import logo from "../../../../../assets/img/tailored_logo_white.png";
import { Link, useLocation } from "react-router-dom";

import icon from "../../../../../assets/img/white-icon.png";

import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarIcon from "@mui/icons-material/Star";
import CalculateIcon from "@mui/icons-material/Calculate";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Sidebar({
  userType,
  handleModalType,
  isCollapsed,
  setIsCollapsed,
}) {
  const { pathname } = useLocation();

  const navs = {
    dashboard: "dashboard",
    pupils: "pupils",
    courses: "courses",
    assignments: "assignments",
    offline: "offline",
    grades: "grades",
    settings: "settings",
  };

  const roleNavMap = {
    student: [
      "dashboard",
      "courses",
      "assignments",
      "grades",
      "offline",
      "settings",
      "logout",
    ],
    tutor: [
      "dashboard",
      "courses",
      "assignments",
      "marks",
      "pupils",
      "settings",
      "logout",
    ],
    admin: [
      "dashboard",
      "courses",
      "assignments",
      // "marks",
      "pupils",
      "instructors",
      "settings",
      "logout",
    ],
  };

  // Function to check if the path contains the nav key
  const isActive = (navKey) => pathname.includes(navs[navKey]);

  // Determine the user's role
  const role = userType; // Assuming `userType` is the role, e.g., "student" or "tutor"

  // Get the list of nav options based on the user's role
  const navOptions = roleNavMap[role];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <img
        src={isCollapsed ? icon : logo}
        alt={"tailored"}
        className={`logo ${isCollapsed ? "icon" : ""}`}
      />

      <div className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
        {!isCollapsed ? (
          <ArrowBackIosIcon className="toggle-btn-icon" />
        ) : (
          <ArrowForwardIosIcon className="toggle-btn-icon" />
        )}
      </div>
      <nav>
        {navOptions.includes("dashboard") && (
          <Link
            className={`nav-option ${isActive("dashboard") ? "active" : ""}`}
            to={`/${userType}/dashboard`}
          >
            <HomeIcon className="icon" />
            <h2>Dashboard</h2>
          </Link>
        )}
        {navOptions.includes("pupils") && (
          <Link
            className={`nav-option ${isActive("pupils") ? "active" : ""}`}
            to={`/${userType}/pupils`}
          >
            <GroupIcon className="icon" />
            <h2>Pupils</h2>
          </Link>
        )}
        {navOptions.includes("instructors") && (
          <Link
            className={`nav-option ${isActive("instructors") ? "active" : ""}`}
            to={`/${userType}/instructors`}
          >
            <GroupIcon className="icon" />
            <h2>Instructors</h2>
          </Link>
        )}
        {navOptions.includes("courses") && (
          <Link
            className={`nav-option ${isActive("courses") ? "active" : ""}`}
            to={`/${userType}/courses`}
          >
            <LibraryBooksIcon className="icon" />
            <h2>Courses</h2>
          </Link>
        )}
        {navOptions.includes("assignments") && (
          <Link
            className={`nav-option ${isActive("assignments") ? "active" : ""}`}
            to={`/${userType}/assignments`}
          >
            <StarIcon className="icon" />
            <h2>Assignments</h2>
          </Link>
        )}
        {navOptions.includes("offline") && (
          <Link
            className={`nav-option ${isActive("offline") ? "active" : ""}`}
            to={`/${userType}/offline`}
          >
            <WifiOffIcon className="icon" />
            <h2>Offline</h2>
          </Link>
        )}
        {navOptions.includes("grades") && (
          <Link
            className={`nav-option ${isActive("grades") ? "active" : ""}`}
            to={`/${userType}/grades`}
          >
            <CalculateIcon className="icon" />
            <h2>Grades</h2>
          </Link>
        )}
        {navOptions.includes("marks") && (
          <Link
            className={`nav-option ${isActive("marks") ? "active" : ""}`}
            to={`/${userType}/marks`}
          >
            <CalculateIcon className="icon" />
            <h2>Marks</h2>
          </Link>
        )}
      </nav>
      <div className="bottom-nav">
        {navOptions.includes("settings") && (
          <Link
            className={`nav-option ${isActive("settings") ? "active" : ""}`}
            to={`/${userType}/settings`}
          >
            <SettingsIcon className="icon" />
            <h2>Settings</h2>
          </Link>
        )}

        {navOptions.includes("logout") && (
          <div
            className="nav-option"
            onClick={() => handleModalType("alert", "logout")}
          >
            <LogoutIcon className="icon" />
            <h2>Logout</h2>
          </div>
        )}
      </div>
    </div>
  );
}
