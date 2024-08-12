import "./FormEditor.css";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import AddEditStudent from "./AddEditStudent";
import AddEditCourse from "./AddEditCourse";
import AddEditCourseContent from "./AddEditCourseContent";
import HelpSupport from "./HelpSupport";
import AddEditTutor from "./AddEditTutor";
import axios from "axios";
import AddEditAssignment from "./AddEditAssignment";

export default function FormEditor({ formType, setShowModal }) {
  const [formData, setFormData] = useState({});

  const renderInputs = () => {
    switch (formType) {
      case "add-tutor":
      case "edit-tutor":
        return <AddEditTutor formData={formData} setFormData={setFormData} />;
      case "add-student":
      case "edit-student":
        return <AddEditStudent formData={formData} setFormData={setFormData} />;
      case "add-course":
      case "edit-course":
        return <AddEditCourse formData={formData} setFormData={setFormData} />;
      case "add-assignment":
      case "edit-assignment":
        return (
          <AddEditAssignment formData={formData} setFormData={setFormData} />
        );
      case "add-course-content":
      case "edit-course-content":
        return (
          <AddEditCourseContent formData={formData} setFormData={setFormData} />
        );
      case "help-support":
        return <HelpSupport />;
      default:
        return null;
    }
  };

  const handleConfirm = async (event) => {
    event.preventDefault();

    try {
      if (formType === "add-tutor") {
        await axios.post("http://localhost:5000/api/tutors", formData);
        alert("Tutor successfully added.");
      } else if (formType === "edit-tutor") {
        await axios.put(
          `http://localhost:5000/api/tutors/${formData.id}`,
          formData
        );
        alert("Tutor information successfully updated.");
      } else if (formType === "add-student") {
        await axios.post("http://localhost:5000/api/students", formData);
        alert("Student successfully added.");
      } else if (formType === "edit-student") {
        await axios.put(
          `http://localhost:5000/api/students/${formData.id}`,
          formData
        );
        alert("Student information successfully updated.");
      } else if (formType === "add-course") {
        await axios.post("http://localhost:5000/api/courses", formData);
        alert("Course successfully added.");
      } else if (formType === "edit-course") {
        await axios.put(
          `http://localhost:5000/api/courses/${formData.id}`,
          formData
        );
        alert("Course information successfully updated.");
      } else if (formType === "add-course-content") {
        await axios.post("http://localhost:5000/api/course-contents", formData);
        alert("Course content successfully added.");
      } else if (formType === "edit-course-content") {
        await axios.put(
          `http://localhost:5000/api/course-contents/${formData.id}`,
          formData
        );
        alert("Course content information successfully updated.");
      } else if (formType === "add-assignment") {
        // Validate that each question has at least one choice
        const invalidQuestions = formData.questions.filter(
          (question) => !question.choices || question.choices.length === 0
        );

        if (invalidQuestions.length > 0) {
          alert("Each question must have at least one choice.");
          return;
        }
        await axios.post("http://localhost:5000/api/assignments", formData);
        alert("Assignment successfully added.");
      } else if (formType === "edit-assignment") {
        await axios.put(
          `http://localhost:5000/api/assignments/${formData.id}`,
          formData
        );
        alert("Assignment information successfully updated.");
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const [formTypeTitle, setFormTypeTitle] = useState("");

  useEffect(() => {
    switch (formType) {
      case "add-student":
        setFormTypeTitle("Add Student");
        break;
      case "edit-student":
        setFormTypeTitle("Edit Student");
        break;
      case "add-course":
        setFormTypeTitle("Add Course");
        break;
      case "edit-course":
        setFormTypeTitle("Edit Course");
        break;
      case "add-course-content":
        setFormTypeTitle("Add Course Content");
        break;
      case "edit-course-content":
        setFormTypeTitle("Edit Course Content");
        break;
      case "add-assignment":
        setFormTypeTitle("Add Assignment");
        break;
      case "edit-assignment":
        setFormTypeTitle("Edit Assignment");
        break;
      case "help-support":
        setFormTypeTitle("Help & Support");
        break;
      case "add-tutor":
        setFormTypeTitle("Add Tutor");
        break;
      case "edit-tutor":
        setFormTypeTitle("Edit Tutor");
        break;
      default:
        setFormTypeTitle("");
        break;
    }
  }, [formType]);

  return (
    <div className="form-editor w-50">
      <div className="form-editor-header d-flex justify-content-between align-items-center">
        <h2>{formTypeTitle}</h2>
        <div className="close-btn" onClick={() => setShowModal(false)}>
          <CloseIcon />
        </div>
      </div>
      <hr />
      <form>
        {renderInputs()}
        <div className="form-editor-action-btns">
          <button className="cancel-btn" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button className="confirm-btn" type="button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
