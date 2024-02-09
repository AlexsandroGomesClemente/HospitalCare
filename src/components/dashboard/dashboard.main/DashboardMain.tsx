import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { DashboardMainConfig } from "../../../interfaces/dashboard.interface";
import DashboardMainTitle from "./DashboardMainTitle";
import DashboardChats from "./charts/DashboardChats";
import DashboardForm from "./forms/DashboardForm";
import DashboardTable from "./tables/DashboardTable";

const exams: string[] = [
  "Exame",
  "Responsavel",
  "Data do Pedido",
  "Data do Resultado",

];
const pacients: string[] = [
  "Nome",
  "Causa",
  "Data de Entrada",
  "Data de Alta",

];

function DashboardMain(props: DashboardMainConfig) {
  return (
    <div className="dashboard-main">
      <DashboardMainTitle
        title={props.config.title}
        breadcumb={props.config.breadcumb}
      />
      {props.config.type === "MAIN" && <DashboardChats />}
      {props.config.type === "PROFILE" && (
        <DashboardForm type={props.config.type} />
      )}
      {props.config.type === "REGISTEREXAM" && (
        <DashboardForm type={props.config.type} />
      )}
      {props.config.type === "REGISTERPACIENT" && (
        <DashboardForm type={props.config.type} />
      )}
      {props.config.type === "EXAMS" && <DashboardTable tableHeader={exams} type={"EXAMS"}/>}
      {props.config.type === "PACIENTS" && (
        <DashboardTable tableHeader={pacients} type={"PACIENTS"} />
      )}
    </div>
  );
}

export default DashboardMain;
