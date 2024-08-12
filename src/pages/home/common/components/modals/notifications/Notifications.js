import "./Notifications.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Notifications({ setShowNotification }) {
  return (
    <div className="notification w-50">
      <div className="notification-header d-flex justify-content-between align-items-center">
        <h2>Notifications</h2>
        <div
          className="close-btn"
          onClick={() => {
            setShowNotification(false);
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <hr />
      <p>No Notifications yet</p>
    </div>
  );
}
