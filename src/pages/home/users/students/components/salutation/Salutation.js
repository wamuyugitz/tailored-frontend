import "./Salutation.css";
import { selectUser } from "../../../../../../redux/features/userSlice";
import { useSelector } from "react-redux";

export default function Salutation() {
  const user = useSelector(selectUser);
  return (
    <div className="salutation">
      <h2>👋 Hey, {user?.firstName}</h2>
    </div>
  );
}
