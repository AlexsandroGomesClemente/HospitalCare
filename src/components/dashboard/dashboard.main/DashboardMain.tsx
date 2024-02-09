import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import DashboardMainTitle from "./DashboardMainTitle";
//import DashboardChats from "./charts/DashboardChats";
import DashboardForm from "./forms/DashboardForm";

function DashboardMain() {
  return (
    <div className="dashboard-main">
      <DashboardMainTitle />
      <DashboardForm />
    </div>
  );
}

export default DashboardMain;
