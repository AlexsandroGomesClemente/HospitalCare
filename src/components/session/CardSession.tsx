import "../../assets/styles/components.css/session.css/CardSession.css";
import CardTitle from "./CardSessionTitle";
import FormSession from "./FormSession";
import CardSessionFooter from "./CardSessionFooter";

function CardSession() {
  return (
    <div className="card-main">
      <CardTitle />
      <FormSession />
      <CardSessionFooter />
    </div>
  );
}

export default CardSession;
