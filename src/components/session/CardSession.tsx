import "../../assets/styles/components.css/session.css/CardSession.component.css";
import CardTitle from "./CardSessionTitle";
import FormSession from "./FormSession";
import CardSessionFooter from "./CardSessionFooter";
import { SessionConfig } from "../../interfaces/session.interface";

function CardSession(props: SessionConfig) {
  return (
    <div className="card-main">
      <CardTitle title={props.sessionConfig.title} subtitle={props.sessionConfig.subtitle} />
      <FormSession formConfig={props.sessionConfig} />
      <CardSessionFooter frase={props.sessionConfig.frase} sendAction={props.sessionConfig.sendAction} type={props.sessionConfig.type}/>
    </div>
  );
}

export default CardSession;
