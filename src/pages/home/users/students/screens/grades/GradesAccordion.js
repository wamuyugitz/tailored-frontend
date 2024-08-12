import PropTypes from "prop-types";

export default function GradesAccordion({
  index,
  activeIndex,
  handleToggle,
  courseTitle,
  assignments,
}) {
  const isActive = index === activeIndex;

  console.log("Active Index:", activeIndex); // Debugging
  console.log("Is Active:", isActive); // Debugging

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isActive ? "" : "collapsed"}`}
          type="button"
          onClick={() => handleToggle(index)}
          aria-expanded={isActive}
        >
          {courseTitle}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isActive ? "show" : ""}`}>
        <div className="accordion-body">
          {assignments.length > 0 ? (
            assignments.map((assignment, idx) => (
              <div key={idx} className="row mt-3">
                <div className="col-lg-6 text-center">
                  {assignment.lessonTitle}
                </div>
                <div className="col-lg-6 text-center">{assignment.marks}</div>
              </div>
            ))
          ) : (
            <p className="text-center">No assignments found</p>
          )}
        </div>
      </div>
    </div>
  );
}

GradesAccordion.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  handleToggle: PropTypes.func.isRequired,
  courseTitle: PropTypes.string.isRequired,
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      lessonTitle: PropTypes.string.isRequired,
      marks: PropTypes.number.isRequired,
    })
  ).isRequired,
};
