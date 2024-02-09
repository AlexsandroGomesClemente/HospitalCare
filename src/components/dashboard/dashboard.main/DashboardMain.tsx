import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import DashboardMainTitle from "./DashboardMainTitle";
import DashboardChats from "./DashboardChats";

function DashboardMain() {
  return (
    <div className="dashboard-main">
      <DashboardMainTitle />
      <DashboardChats />
    </div>
  );
}

export default DashboardMain;
