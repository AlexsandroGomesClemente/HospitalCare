import "../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { DashboardConfigList } from "../../../interfaces/dashboard.interface";

function DashboardList(props: DashboardConfigList) {
  console.log(props);
  return (
    <div className="list-main">
      {props.config.map((item, index) => (
        <div key={index} onClick={() => item.action()} className="list-item">
          <img src={item.image} />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default DashboardList;
