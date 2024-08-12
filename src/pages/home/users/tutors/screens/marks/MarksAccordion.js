import PropTypes from "prop-types";

export default function MarksAccordion({
  index,
  activeIndex,
  handleToggle,
  title,
}) {
  const isActive = index === activeIndex;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isActive ? "" : "collapsed"}`}
          type="button"
          onClick={() => handleToggle(index)}
          aria-expanded={isActive}
        >
          {title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isActive ? "show" : ""}`}>
        <div className="accordion-body">
          <div className=" row mt-3">
            <div className="col-lg-6 text-center">Lesson</div>
            <div className="col-lg-6 text-center">80%</div>
          </div>
          <div className=" row mt-3">
            <div className="col-lg-6 text-center">Lesson</div>
            <div className="col-lg-6 text-center">80%</div>
          </div>
          <div className=" row mt-3">
            <div className="col-lg-6 text-center">Lesson</div>
            <div className="col-lg-6 text-center">80%</div>
          </div>
          <div className=" row mt-3">
            <div className="col-lg-6 text-center">Lesson</div>
            <div className="col-lg-6 text-center">80%</div>
          </div>
          <div className=" row mt-3">
            <div className="col-lg-6 text-center">Lesson</div>
            <div className="col-lg-6 text-center">80%</div>
          </div>
          <div className=" row mt-3">
            <div className="col-lg-6 text-center">Lesson</div>
            <div className="col-lg-6 text-center">80%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

MarksAccordion.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  handleToggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
