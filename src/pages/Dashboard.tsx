import "../assets/styles/pages.css/Dashboard.css"
import DashboardHeader from "../components/dashboard/dashboard.header/DashboardHeader";
import DashboardNav from "../components/dashboard/dashboard.nav/DashboardNav";
import DashboardMain from "../components/dashboard/dashboard.main/DashboardMain";
import DashboardFooter from "../components/dashboard/dashboard.footer.tsx/DashboardFooter";

function Dashboard() {
  return (
    <div className="dashboard-area">
      <DashboardHeader />
      <DashboardNav />
      <DashboardMain />
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;
