import "./InstructorTableCard.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import axios from "axios";

export default function InstructorTableCard({ paddedId, tutor }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this tutor?")) {
      setIsDeleting(true);
      try {
        await axios.delete(`http://localhost:5000/api/tutors/${tutor._id}`);
        alert("Tutor successfully deleted.");
        // Refresh the list or handle deletion state
      } catch (error) {
        console.error("Error deleting tutor:", error);
        alert("There was an error deleting the tutor. Please try again.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="instructor-table-card row">
      <div className="col-lg-1">{paddedId}</div>
      <div className="col-lg-3">{tutor.fullName}</div>
      <div className="col-lg-3">{tutor.address}</div>
      <div className="col-lg-2">
        {tutor.createdAt ? new Date(tutor.createdAt).toLocaleDateString() : ""}
      </div>
      <div className="col-lg-2">{tutor.status || "Active"}</div>
      <div className="col-lg-1">
        <DriveFileRenameOutlineIcon
          onClick={() => {
            // Handle edit action (show form with tutor details)
          }}
        />
        <DeleteIcon onClick={handleDelete} disabled={isDeleting} />
      </div>
    </div>
  );
}
