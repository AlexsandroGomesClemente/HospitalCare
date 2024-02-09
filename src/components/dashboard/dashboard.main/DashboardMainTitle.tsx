import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

function DashboardMainTitle() {
  return (
    <div className="dashboard-main-header">
      <h4>Titulo</h4>
      <div style={{ textDecoration: "none" }}>
        <Breadcrumb>
          <BreadcrumbItem active={false}>Home</BreadcrumbItem>
          <BreadcrumbItem active={false}>Teste</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default DashboardMainTitle;
