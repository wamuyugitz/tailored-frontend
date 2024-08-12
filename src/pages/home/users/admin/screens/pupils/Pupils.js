import React, { useEffect, useState } from "react";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import Filters from "../../components/filter/Filters";
import "./Pupils.css";
import PupilTableCard from "./PupilTableCard";
import axios from "axios";
import { padId } from "../../../../common/utilities/idPad";

export default function Pupils({ handleModalType }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data);
      } catch (err) {
        setError("Error fetching students data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="pupils">
      <ScreenHeader
        title={"Students List"}
        btnText={"Add Student"}
        handleModalType={() => handleModalType("form", "add-student")}
      />
      <Filters />
      <div className="pupil-content">
        <div className="pupil-table-header row">
          <div className="col-lg-1">ID</div>
          <div className="col-lg-2">Full Name</div>
          <div className="col-lg-2">Address</div>
          <div className="col-lg-2">Date Added</div>
          <div className="col-lg-2">Status</div>
          <div className="col-lg-2">Metrics</div>
          <div className="col-lg-1">Action</div>
        </div>
        {students.length === 0 ? (
          <p>No students added</p>
        ) : (
          students.map((student, index) => (
            <PupilTableCard
              key={student._id}
              student={student}
              paddedId={padId(index + 1)}
            />
          ))
        )}
      </div>
    </div>
  );
}
