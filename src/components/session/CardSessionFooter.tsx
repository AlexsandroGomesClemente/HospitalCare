import "../../assets/styles/components.css/session.css/CardSession.component.css";
import { Link } from "react-router-dom";
import { SessionCardFooter } from "../../interfaces/session.interface";

function CardSessionFooter(props: SessionCardFooter) {
  const sendUrl: string = props.type === "LOGIN" ? "/register" : "/";
  return (
    <div className="card-footer">
      <span>
        {props.frase}
        <Link to={sendUrl}>{props.sendAction}</Link>
      </span>
    </div>
  );
}

export default CardSessionFooter;
