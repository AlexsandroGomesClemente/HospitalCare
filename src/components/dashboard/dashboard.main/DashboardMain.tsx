import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import DashboardMainTitle from "./DashboardMainTitle";
//import DashboardChats from "./charts/DashboardChats";
//import DashboardForm from "./forms/DashboardForm";
import DashboardTable from "./tables/DashboardTable";

function DashboardMain() {
  return (
    <div className="dashboard-main">
      <DashboardMainTitle />
      <DashboardTable />
    </div>
  );
}

export default DashboardMain;
