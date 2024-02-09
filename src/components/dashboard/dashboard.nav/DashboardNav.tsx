import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { Activity, UserPlus, Hexagon, Users } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function DashboardNav() {
  const navigate = useNavigate();
  const {t} = useTranslation()
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
        <span>{t("pacient")}</span>
      </div>
      <div
        className="dashboard-item"
        onClick={() => sendUrl("/dashboard/newpacients")}
      >
        <UserPlus />
        <span>{t('newpacient')}</span>
      </div>
      <div  onClick={() => sendUrl("/dashboard/exams")} className="dashboard-item">
        <Activity />
        <span>{t('exams')}</span>
      </div>
      <div  onClick={() => sendUrl("/dashboard/newexams")} className="dashboard-item">
        <Hexagon />
        <span>{t("newexams")}</span>
      </div>
    </nav>
  );
}

export default DashboardNav;
