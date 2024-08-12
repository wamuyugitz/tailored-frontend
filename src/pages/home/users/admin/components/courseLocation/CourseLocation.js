import CourseDestribution from "./CourseDestribution";
import "./CourseLocation.css";
import PupilsDestribution from "./PupilsDestribution";

export default function CourseLocation() {
  return (
    <div className="course-location">
      <CourseDestribution />
      <PupilsDestribution />
    </div>
  );
}
