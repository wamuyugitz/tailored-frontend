import "./QuickStart.css";
import QuickStartTab from "./quickStartTab/QuickStartTab";
import bgimage1 from "../../images/quicktab_bg_1.png";
import bgimage2 from "../../images/quicktab_bg_2.png";
import bgimage3 from "../../images/quicktab_bg_3.png";

export default function QuickStart() {
  return (
    <div className="quick-start">
      <h2>Quick Start</h2>
      <div className="quick-start-tabs">
        <QuickStartTab title={"Grades"} value={"78%"} bgImage={bgimage1} />
        <QuickStartTab
          title={"Assignment"}
          value={"15min"}
          bgImage={bgimage2}
        />
        <QuickStartTab title={"Courses"} value={"17min"} bgImage={bgimage3} />
      </div>
    </div>
  );
}
