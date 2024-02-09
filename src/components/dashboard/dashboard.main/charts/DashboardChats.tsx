import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import DashboardChatMain from "./DashboardChartMain";
import DashboardChartSecond from "./DashboardChartSecond";

function DashboardChats() {
  return (
    <div className="dashboard-conteudo">
      <DashboardChatMain />

      <DashboardChartSecond />
      <DashboardChartSecond />
      <DashboardChartSecond />
    </div>
  );
}

export default DashboardChats;
