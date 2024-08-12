import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { selectUser } from "../../../../../redux/features/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header({
  setShowNotification,
  userType,
  handleModalType,
}) {
  const user = useSelector(selectUser);
  return (
    <div className={`header`}>
      <div className="container">
        <div className="input-div">
          <SearchIcon className="search-icon" />
          <input placeholder="Search..." type={"search"} />
        </div>
        <div className="header-right">
          <div
            className="icon-div"
            onClick={() => handleModalType("form", "help-support")}
          >
            <LiveHelpIcon className="icon" />
          </div>
          <div
            className="icon-div"
            onClick={() => {
              setShowNotification((current) => (current = !current));
            }}
          >
            <NotificationsIcon className="icon" />
          </div>
          <Link className="profile-div" to={`/${userType}/settings`}>
            <div className={"person-icon"}>
              <PersonIcon className="p-icon" />
            </div>
            <div>
              <h4>
                {user?.firstName} {user?.lastName}
              </h4>
              <h5>{user?.role}</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
