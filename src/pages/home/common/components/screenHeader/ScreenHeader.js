import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/features/userSlice";
import "./ScreenHeader.css";

export default function ScreenHeader({ title, btnText, handleModalType }) {
  const user = useSelector(selectUser);

  const [showAddBtn, setShowAddBtn] = useState(false);
  useEffect(() => {
    if (user.role == "tutor" || user.role == "admin") {
      setShowAddBtn(true);
    }
  }, []);
  return (
    <div className="screen-header">
      <h2>{title}</h2>
      {showAddBtn && (
        <button className="add-user-btn" onClick={handleModalType}>
          {btnText}
        </button>
      )}
    </div>
  );
}
