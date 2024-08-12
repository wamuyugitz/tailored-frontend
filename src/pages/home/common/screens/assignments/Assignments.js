import React, { useState, useEffect } from "react";
import "./Assignments.css";
import ScreenTab from "../../components/screentab/ScreenTab";
import ScreenHeader from "../../components/screenHeader/ScreenHeader";
import AssignmentCard from "../../components/assignments/AssignmentCard";

export default function Assignments({ handleModalType }) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch all assignments
    const fetchAssignments = async () => {
      const response = await fetch("http://localhost:5000/api/assignments");
      const data = await response.json();
      setAssignments(data);
    };

    fetchAssignments();
  }, []);

  return (
    <div className="assignments">
      <ScreenHeader
        title={"Assignments"}
        btnText={"Add Assignments"}
        handleModalType={() => handleModalType("form", "add-assignment")}
      />
      {/* <ScreenTab
        tabs={["All", "English", "Kiswahili", "Chemistry", "Biology"]}
      /> */}

      <div className="assignment-cards">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              handleModalType={handleModalType}
            />
          ))
        ) : (
          <p>No Assignments</p>
        )}
      </div>
    </div>
  );
}
