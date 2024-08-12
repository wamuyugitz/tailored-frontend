import "./MyCourses.css";
import MyCourse from "./myCourse/MyCourse";

export default function MyCourses() {
  return (
    <div className="my-courses">
      <h2>My Courses</h2>
      <div className="my-courses-div row">
        <MyCourse progress={40} />
        <MyCourse progress={100} />
        <MyCourse progress={20} />
      </div>
    </div>
  );
}
