import "./Alert.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
export default function Alert({ alertType, setShowModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertMessages = {
    "delete-course": {
      title: "Delete Course",
      message: "Are you sure you want to delete the course ?",
    },
    "delete-assignment": {
      title: "Delete assignment",
      message: "Are you sure you want to delete this assignment?",
    },
    "remove-student": {
      title: "Remove Student",
      message: "Are you sure you want to remove this student?",
    },
    logout: {
      title: "Logout",
      message: "Are you sure you want to logout?",
      confirm: () => {
        dispatch(logout());
        navigate("/");
      },
    },
  };

  const handleConfirm = () => {
    alertMessages[alertType]?.confirm?.();
    setShowModal(false); // Hide the modal after confirming
  };

  return (
    <div className="alert w-50 ">
      <div className="alert-header d-flex justify-content-between align-items-center">
        <h2 className="">{alertMessages[alertType]?.title}</h2>
        <div className="close-btn" onClick={() => setShowModal(false)}>
          <CloseIcon />
        </div>
      </div>
      <hr />
      <p>{alertMessages[alertType]?.message}</p>
      <div className="alert-action-btns">
        <button className="cancel-btn" onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}
