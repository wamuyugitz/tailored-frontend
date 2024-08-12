import "./ActivitiesDashboard.css";
import ActivitiesDashboardCard from "./ActivitiesDashboardCard";

export default function ActivitiesDashboard() {
  return (
    <div className="activities-dashboard">
      <p className="title">Activities</p>
      <ActivitiesDashboardCard
        img={
          "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        title={"Changed the style."}
        timestamp={"Just Now"}
      />
      <ActivitiesDashboardCard
        img={
          "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        title={"Completed Course 1"}
        timestamp={"59 minutes ago"}
      />

      <ActivitiesDashboardCard
        img={
          "https://images.pexels.com/photos/6109559/pexels-photo-6109559.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load "
        }
        title={"Completed Course 1"}
        timestamp={"12 hours ago"}
      />
      <ActivitiesDashboardCard
        img={
          "https://images.pexels.com/photos/11269013/pexels-photo-11269013.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        }
        title={"Completed Course 1"}
        timestamp={"Today, 11:59 AM"}
      />
      <ActivitiesDashboardCard
        img={
          "https://images.pexels.com/photos/3625608/pexels-photo-3625608.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        }
        title={"Completed Course 1"}
        timestamp={"Feb 2, 2024"}
      />
    </div>
  );
}
