import React from "react";

export default function AddEditTutor({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Full Name:</label>
          <br />
          <input
            placeholder="Enter full name"
            type="text"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Email Address:</label>
          <br />
          <input
            placeholder="Enter email address"
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Address:</label>
          <br />
          <input
            placeholder="Enter address"
            type="text"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>City:</label>
          <br />
          <input
            placeholder="Enter city"
            type="text"
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Courses to Tutor:</label>
          <br />
          <input
            placeholder="Enter courses"
            type="text"
            name="courses"
            value={formData.courses || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Grade/Year/Class to Tutor:</label>
          <br />
          <input
            placeholder="Enter grade/year/class"
            type="text"
            name="grade"
            value={formData.grade || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Date Of Birth:</label>
          <br />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Gender:</label>
          <br />
          <input
            placeholder="Enter gender"
            type="text"
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Parent/Guardian Name:</label>
          <br />
          <input
            placeholder="Enter parent/guardian name"
            type="text"
            name="parentName"
            value={formData.parentName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Parent/Guardian Contact Number:</label>
          <br />
          <input
            placeholder="Enter parent/guardian contact number"
            type="tel"
            name="parentContactNumber"
            value={formData.parentContactNumber || ""}
            onChange={handleChange}
          />
        </div>
      </div> */}
    </div>
  );
}
