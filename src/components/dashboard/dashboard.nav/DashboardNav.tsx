import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { Activity, UserPlus, Hexagon, Users } from "react-feather";
import { useNavigate } from "react-router-dom";

function DashboardNav() {
  const navigate = useNavigate();
  const sendUrl = (url: string) => {
    navigate(url);
    window.location.reload();
  };
  return (
    <nav className="dashboard-nav">
      <div
        onClick={() => sendUrl("/dashboard/pacients")}
        className="dashboard-item"
      >
        <Users />
        <span>Pacientes Cadastrados</span>
      </div>
      <div
        className="dashboard-item"
        onClick={() => sendUrl("/dashboard/newpacients")}
      >
        <UserPlus />
        <span>Cadastro de Pacientes</span>
      </div>
      <div  onClick={() => sendUrl("/dashboard/exams")} className="dashboard-item">
        <Activity />
        <span>Exames Cadastrados</span>
      </div>
      <div  onClick={() => sendUrl("/dashboard/newexams")} className="dashboard-item">
        <Hexagon />
        <span>Cadastro de Exames</span>
      </div>
    </nav>
  );
}

export default DashboardNav;
