import React, { useState, useEffect } from "react";
import GradesAccordion from "./GradesAccordion";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../../redux/features/userSlice";

const Grades = () => {
  const [completedAssignments, setCompletedAssignments] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [studentId, setStudentId] = useState(null);
  const user = useSelector(selectUser);

  // Fetch student ID based on user's email
  useEffect(() => {
    const fetchStudentId = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/students/by-email/${user.email}`
        );
        const data = await response.json();
        if (data.id) {
          setStudentId(data.id);
        } else {
          console.error("Student ID not found in response:", data);
        }
      } catch (error) {
        console.error("Error fetching student ID:", error);
      }
    };

    if (user.email) {
      fetchStudentId();
    }
  }, [user.email]);

  // Fetch completed assignments once student ID is available
  useEffect(() => {
    const fetchCompletedAssignments = async () => {
      if (!studentId) return;

      try {
        const response = await fetch(
          `http://localhost:5000/api/students/${studentId}/completed-assignments`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setCompletedAssignments(data);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching completed assignments:", error);
      }
    };

    fetchCompletedAssignments();
  }, [studentId]);

  // Handle accordion toggle
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Group assignments by courseTitle
  const groupedAssignments = completedAssignments.reduce((acc, assignment) => {
    const { courseTitle, lessonTitle, marks } = assignment;
    if (!acc[courseTitle]) {
      acc[courseTitle] = [];
    }
    acc[courseTitle].push({ lessonTitle, marks });
    return acc;
  }, {});

  return (
    <div className="grades">
      {Object.keys(groupedAssignments).map((courseTitle, index) => (
        <GradesAccordion
          key={index}
          index={index}
          activeIndex={activeIndex}
          handleToggle={handleToggle}
          courseTitle={courseTitle}
          assignments={groupedAssignments[courseTitle]}
        />
      ))}
    </div>
  );
};

export default Grades;
