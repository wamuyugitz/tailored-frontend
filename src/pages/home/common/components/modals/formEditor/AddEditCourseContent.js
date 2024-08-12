import React from "react";

export default function AddEditCourseContent({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Select course:</label>
          <br />
          <input
            placeholder="Enter Select Course"
            type="text"
            name="selectedCourse"
            value={formData.selectedCourse || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Select lesson:</label>
          <br />
          <input
            placeholder="Select Lesson"
            type="number"
            name="selectedLesson"
            value={formData.selectedLesson || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Lesson Content:</label>
        <br />
        <textarea
          placeholder="Lesson content"
          name="lessonContent"
          value={formData.lessonContent || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Attach Multimedia</h3>
        <p>You can attach videos for the lesson content</p>
        <br />
        <input
          placeholder="Attach multimedia"
          type="file"
          name="multimedia"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
