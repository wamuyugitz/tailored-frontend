import { useEffect, useState } from "react";
import axios from "axios";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import Filters from "../../components/filter/Filters";
import "./Instructors.css";
import InstructorTableCard from "./InstructorTableCard";
import { padId } from "../../../../common/utilities/idPad";

export default function Instructors({ handleModalType }) {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    // Fetch tutors from the backend
    const fetchTutors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tutors");
        setTutors(response.data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };

    fetchTutors();
  }, []);

  return (
    <div className="instructors">
      <ScreenHeader
        title={"Instructors List"}
        btnText={"Add Instructor"}
        handleModalType={() => handleModalType("form", "add-tutor")}
      />
      <Filters />
      <div className="instructor-table-header row">
        <div className="col-lg-1">ID</div>
        <div className="col-lg-3">Full Name</div>
        <div className="col-lg-3">Address</div>
        <div className="col-lg-2">Date Added</div>
        <div className="col-lg-2">Status</div>
        <div className="col-lg-1">Action</div>
      </div>
      {tutors.length > 0 ? (
        tutors.map((tutor, index) => (
          <InstructorTableCard
            key={tutor._id}
            tutor={tutor}
            paddedId={padId(index + 1)}
          />
        ))
      ) : (
        <div className="no-data">No tutors available</div>
      )}
    </div>
  );
}
