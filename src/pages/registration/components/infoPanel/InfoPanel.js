import "./InfoPanel.css";
import logo from "../../../../assets/img/tailored_logo.png";

export default function InfoPanel({ screen }) {
  return (
    <div className={`info-panel ${screen} col-lg-5 d-none d-lg-block`}>
      <div className="container flex-column justify-content-center align-items-center d-flex ">
        <img src={logo} alt="tailored" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vestibulum auctor nulla, ut malesuada nisi.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
}
