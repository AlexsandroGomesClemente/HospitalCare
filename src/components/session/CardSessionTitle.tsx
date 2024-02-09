import "../../assets/styles/components.css/session.css/CardSession.component.css";
import { SessionCardTitle } from "../../interfaces/session.interface";

function CardTitle(props: SessionCardTitle) {
  return (
    <div className="card-titles">
      <h1 className="card-title-main">{props.title}</h1>
      <span className="card-subtitle">{props.subtitle}</span>
    </div>
  );
}

export default CardTitle;
