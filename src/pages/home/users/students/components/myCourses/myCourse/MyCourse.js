import "./MyCourse.css";
import SchoolIcon from "@mui/icons-material/School";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import ProgressRadar from "./components/ProgressRadar";

export default function MyCourse({ progress }) {
  return (
    <div className="my-course ">
      <div className="my-course-icons">
        <SchoolIcon className="my-course-icon" />
        <MoreVertIcon className="my-course-icon" />
      </div>
      <div className="my-course-content">
        <h2>Introduction to lorem .......</h2>
        <div className="my-course-owner">
          <PersonIcon />
          <p>Shams Tabrez</p>
        </div>
        <ProgressRadar value={progress} />
      </div>
    </div>
  );
}
