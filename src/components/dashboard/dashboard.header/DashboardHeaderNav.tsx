import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { Maximize, User, Globe } from "react-feather";

function DashboardHeaderNav() {
  return (
    <div className="dashboard-config">
      <div className="dashboard-circle">
        <Globe color={"#86909c"} />
      </div>
      <div className="dashboard-circle">
        <Maximize color={"#86909c"} />
      </div>
      <div className="dashboard-circle ">
        <User color={"#86909c"} />
      </div>
    </div>
  );
}

export default DashboardHeaderNav;
