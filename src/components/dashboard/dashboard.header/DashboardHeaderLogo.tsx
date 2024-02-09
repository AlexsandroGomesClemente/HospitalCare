import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import logo from "../../../../public/img/Logo.png";
import gif from "../../../assets/img/gif/hand.75bedf03d0bbd960c6ed.gif";
import { useTranslation } from "react-i18next";

function DashboardHeaderLogo() {
  const getUser = JSON.parse(localStorage.getItem("user"))
  const { t } = useTranslation();
  return (
    <div className="dashboard-logo">
      <img src={logo} />
      <div className="dashboard-welcome">
        <span>
          <h2>{t("hello")} {getUser[0].name} </h2>
          <img src={gif} />
        </span>
        <span>{t('welcome')}</span>
      </div>
    </div>
  );
}

export default DashboardHeaderLogo;
