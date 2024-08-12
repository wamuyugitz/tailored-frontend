import Calendar from "./calendar/Calendar";
import "./CalendarProfileDetails.css";
import Details from "./details/Details";

export default function CalendarProfileDetails() {
  return (
    <div className="calendarProfileDetails">
      <Calendar />
      <Details />
    </div>
  );
}
