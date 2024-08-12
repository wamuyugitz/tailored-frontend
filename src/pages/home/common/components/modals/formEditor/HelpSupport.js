import React from "react";

export default function HelpSupport() {
  return (
    <div>
      {" "}
      <h2 className="mb-4">How may we help you today?</h2>
      <div className="form-group ">
        <label>Subject:</label>
        <br />
        <input placeholder="Enter Select Course" type={"text"} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <br />
        <textarea placeholder="lesson content" />
      </div>
      <div className="form-group">
        <h3>Attach an multimedia</h3>
        <p>You can attach videos for the lesson content</p>
        <br />
        <input placeholder="lesson content" type={"file"} />
      </div>
    </div>
  );
}
