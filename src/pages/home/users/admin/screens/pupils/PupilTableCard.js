import React from "react";
import "./PupilTableCard.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PupilTableCard({ paddedId, student }) {
  return (
    <div className="pupil-table-card row">
      <div className="col-lg-1">{paddedId}</div>
      <div className="col-lg-2">{student.fullName}</div>
      <div className="col-lg-2">{student.address}</div>
      <div className="col-lg-2">
        {new Date(student.createdAt).toLocaleDateString()}
      </div>
      <div className="col-lg-2">{student.status || "Active"}</div>
      <div className="col-lg-2">
        <div>Total Time Spent: {student.totalLoginTime || 0}min</div>
        <div>Assignments: {student.completedAssignments || 0}</div>
        <div>Courses: {student.completedAssignments || 0}</div>
        {/* <div>Courses Taken: {student.coursesTaken || 0}</div> */}
      </div>
      <div className="col-lg-1">
        <button>
          <DriveFileRenameOutlineIcon />
        </button>
        <DeleteIcon />
      </div>
    </div>
  );
}
