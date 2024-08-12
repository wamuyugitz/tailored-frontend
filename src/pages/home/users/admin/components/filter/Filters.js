import "./Filters.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function Filters() {
  return (
    <div className="filters row">
      <div className="col-lg-1">
        <FilterAltIcon />
      </div>
      <div className="col-lg-2">
        <p>Filter By</p>
      </div>
      <div className="col-lg-3">
        <p>Date Added</p>
      </div>
      <div className="col-lg-2">
        <p>Id</p>
      </div>
      <div className="col-lg-2">
        <p>Status</p>
      </div>
      <div className="col-lg-2">
        <p>Reset Filter</p>
      </div>
    </div>
  );
}
