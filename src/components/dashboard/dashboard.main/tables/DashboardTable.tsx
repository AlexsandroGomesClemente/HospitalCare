import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import Table from "react-bootstrap/Table";
import { TableProps } from "../../../../interfaces/dashboard.interface";

function DashboardTable(props: TableProps) {
  const getData =
    props.type === "EXAMS"
      ? JSON.parse(localStorage.getItem("exams"))
      : JSON.parse(localStorage.getItem("pacients"));

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
            {getData?.length > 0 ? getData.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.nome}</td>
                <td>{item.responsavel}</td>
                <td>{item.dataIni}</td>
                <td>{item.dataFim}</td>

              </tr>
            )) : ""}
           
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DashboardTable;
