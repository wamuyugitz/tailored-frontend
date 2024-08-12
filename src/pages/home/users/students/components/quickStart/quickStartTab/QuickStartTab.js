import "./QuickStartTab.css";

import SchoolIcon from "@mui/icons-material/School";

export default function QuickStartTab({ title, value, bgImage }) {
  return (
    <div className="quick-start-tab">
      <div className="icon-div" style={{ backgroundImage: `url(${bgImage})` }}>
        <SchoolIcon className="icon" />
      </div>
      <div className="quick-start-tab-values">
        <h3 className="">{title}</h3>
        <p className="">{value}</p>
      </div>
    </div>
  );
}
