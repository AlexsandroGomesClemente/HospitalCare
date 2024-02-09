import "../assets/styles/pages.css/Dashboard.css";
import DashboardHeader from "../components/dashboard/dashboard.header/DashboardHeader";
import DashboardNav from "../components/dashboard/dashboard.nav/DashboardNav";
import DashboardMain from "../components/dashboard/dashboard.main/DashboardMain";
import DashboardFooter from "../components/dashboard/dashboard.footer/DashboardFooter";
import { useEffect, useState } from "react";
import {
  ConfigInicial,
  DashboardMain as DashboardMainInterface,
  DashboardForm,
} from "../interfaces/dashboard.interface";

const dashboardMain: DashboardMainInterface = {
  title: "Dashboard",
  breadcumb: "dashboard",
  type: "MAIN",
};

const dashboardProfile: DashboardForm = {
  title: "Perfil",
  breadcumb: "perfil",
  type: "PROFILE",
};

const dashboardRegisterExams: DashboardForm = {
  title: "Novo exame",
  breadcumb: "novo exame",
  type: "REGISTEREXAM",
};

const dashboardExams: DashboardForm = {
  title: "Exame",
  breadcumb: "exame",
  type: "EXAMS",
};

const dashboardRegisterPacients: DashboardForm = {
  title: "Novo paciente",
  breadcumb: "novo paciente",
  type: "REGISTERPACIENT",
};

const dashboardPacient: DashboardForm = {
  title: "Pacientes",
  breadcumb: "Pacientes",
  type: "PACIENTS",
};

function Dashboard(props?: ConfigInicial) {
  const [config, setConfig] = useState< object | DashboardForm>({});

  useEffect(() => {
    switch (props?.configInicial) {
      case "MAIN":
        setConfig(dashboardMain);
        break;
      case "PROFILE":
        setConfig(dashboardProfile);
        break;
      case "EXAMS":
        setConfig(dashboardExams);
        break;
      case "REGISTEREXAMS":
        setConfig(dashboardRegisterExams);
        break;
      case "PACIENTS":
        setConfig(dashboardPacient);
        break;
      case "REGISTERPACIENTS":
        setConfig(dashboardRegisterPacients);
        break;
    }
  }, []);
  return (
    <div className="dashboard-area">
      <DashboardHeader />
      <DashboardNav />
      <DashboardMain config={config} />
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;
