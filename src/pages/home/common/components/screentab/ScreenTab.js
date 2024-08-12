import "./ScreenTab.css";

export default function ScreenTab({ tabs }) {
  return (
    <div className="screen-tabs">
      {tabs.map((item, index) => (
        <button className="screen-tab" key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}
