import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import Table from "react-bootstrap/Table";
import { TableProps } from "../../../../interfaces/dashboard.interface";

function DashboardTable(props: TableProps) {
  return (
    <div className="dashboard-table">
      <div className="dashboard-table-card">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {props.tableHeader.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DashboardTable;
