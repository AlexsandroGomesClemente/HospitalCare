import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { Maximize, User, Globe } from "react-feather";
import DashboardList from "../dashboard.helpers/DashboardList";
import { useState } from "react";
import { DashboardList as DashboardListInterface } from "../../../interfaces/dashboard.interface";
import { useTranslation } from "react-i18next";
import japao from "../../../assets/img/japao.jpg";
import eua from "../../../assets/img/eua.jpg";
import brasil from "../../../assets/img/brasil.jpg";
import setting from "../../../assets/img/setting.png";
import logout from "../../../assets/img/logout.png";
import { LogOut } from "react-feather";
import { useNavigate } from "react-router-dom";

function DashboardHeaderNav() {
  const [showListLanguage, setShowListLanguage] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const configLanguage: DashboardListInterface[] = [
    {
      image: brasil,
      text: "Portugues",
      action: () => changeLanguage("pt"),
    },
    {
      image: eua,
      text: "English",
      action: () => changeLanguage("en"),
    },
    {
      image: japao,
      text: "Japones",
      action: () => changeLanguage("jp"),
    },
  ];

  const configProfile: DashboardListInterface[] = [
    {
      image: setting,
      text: "Perfil",
      action: () => {
        navigate("/dashboard/profile")
        window.location.reload()
      },
    },
    {
      image: logout,
      text: "Sair",
      action: () => {
       navigate('/')
       window.location.reload()
      },
    },
  ];

  function ativarDesativarFS() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <div className="dashboard-config">
      <div
        className="dashboard-circle"
        onClick={() => setShowListLanguage(!showListLanguage)}
      >
        <Globe color={"#86909c"} />
      </div>
      {showListLanguage && <DashboardList config={configLanguage} />}
      <div className="dashboard-circle" onClick={() => ativarDesativarFS()}>
        <Maximize color={"#86909c"} />
      </div>
      <div
        className="dashboard-circle "
        onClick={() => setShowProfile(!showProfile)}
      >
        <User color={"#86909c"} />
      </div>
      {showProfile && <DashboardList config={configProfile} />}
    </div>
  );
}

export default DashboardHeaderNav;
