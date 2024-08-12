import { useLocation } from "react-router-dom";
import "./Home.css";
import Admin from "./users/admin/Admin";
import Students from "./users/students/Students";
import Tutors from "./users/tutors/Tutors";

export default function Home() {
  const { pathname } = useLocation();

  // Defining a map of URL paths to their corresponding users
  const users = {
    admin: Admin,
    tutor: Tutors,
    student: Students,
  };

  // Determine which user component to render based on the pathname
  let UserToRender = null;
  let userType = "";
  Object.keys(users).forEach((ut) => {
    if (pathname.includes(ut)) {
      userType = ut;
      UserToRender = users[ut];
    }
  });

  return (
    <div className="home">
      {UserToRender && <UserToRender userType={userType} />}
    </div>
  );
}
