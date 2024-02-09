import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import logo from "../../../../public/img/Logo.png";
import gif from "../../../assets/img/gif/hand.75bedf03d0bbd960c6ed.gif";

function DashboardHeaderLogo() {
  return (
    <div className="dashboard-logo">
      <img src={logo} />
      <div className="dashboard-welcome">
        <span>
          <h2>Olá Alex </h2>
          <img src={gif} />
        </span>
        <span>Frase de boas vindas</span>
      </div>
    </div>
  );
}

export default DashboardHeaderLogo;
