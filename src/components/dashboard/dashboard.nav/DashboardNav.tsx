import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import {Activity, UserPlus, Hexagon, Users } from "react-feather";

function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <div className="dashboard-item">
        <Users />
        <span>Pacientes Cadastrados</span>
      </div>
      <div className="dashboard-item">
        <UserPlus />
        <span>Cadastro de Pacientes</span>
      </div>
      <div className="dashboard-item">
        <Activity />
        <span>Exames Cadastrados</span>
      </div>
      <div className="dashboard-item">
        <Hexagon />
        <span>Cadastro de Exames</span>
      </div>
    </nav>
  );
}

export default DashboardNav;
