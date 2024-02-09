import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import DashboardHeaderLogo from "./DashboardHeaderLogo";
import DashboardHeaderNav from "./DashboardHeaderNav";

function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <DashboardHeaderLogo />
      <DashboardHeaderNav />
    </div>
  );
}

export default DashboardHeader;
