import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { DashboardMainHeader } from "../../../interfaces/dashboard.interface";

function DashboardMainTitle(props: DashboardMainHeader) {
  return (
    <div className="dashboard-main-header">
      <h4>{props.title}</h4>
      <div style={{ textDecoration: "none" }}>
        <Breadcrumb>
          <BreadcrumbItem href={"/dashboard"} active={false}>home</BreadcrumbItem>
          <BreadcrumbItem active={false}>{props.breadcumb}</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default DashboardMainTitle;
