import "./Details.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";

export default function Details() {
  return (
    <div className="details">
      <div className="details-header">
        <h2>New Course</h2>
        <p>Business Marketing</p>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam
        non neque aliquet placerat. Vivamus imperdiet dui a nunc malesuada, sed
        porta mauris lacinia. Cras sodales facilisis turpis, eget luctus lorem
        tempor a. Integer ut rutrum purus. Proin at sapien consectetur, mollis
        ipsum eget, euismod nulla.
      </p>

      <div className="details-outlays">
        <div className="details-outlay">
          <AccessTimeFilledIcon />
          <div>
            <h3>Duration</h3>
            <p>100 mins</p>
          </div>
        </div>
        <div className="details-outlay">
          <PlayLessonIcon />
          <div>
            <h3>Lessons</h3>
            <p>6 Outline</p>
          </div>
        </div>
      </div>
    </div>
  );
}
