import CardSession from "../components/session/CardSession";
import "../assets/styles/pages.css/Session.css";
import logo from "../../public/img/Logo.png";
import { SessionValidateCard, ConfigInicial } from "../interfaces/session.interface";

const register: SessionValidateCard = {
  title: "Register",
  subtitle: "Insira seu nome, e-mail e senha",
  type: "REGISTER",
  selector: "Aceito os termos de uso.",
  button: "Registrar",
  frase: "Você já possui uma conta?",
  sendAction: "Entrar",
};

const login: SessionValidateCard = {
  title: "Entrar",
  subtitle: "Insira seu e-mail e senha",
  type: "LOGIN",
  selector: "Lembrar senha",
  button: "Entrar",
  frase: "Ainda não tem uma conta?",
  sendAction: "Criar",
};

function Session(props: ConfigInicial) {
  const sessionConfig: SessionValidateCard = props.configInicial === "LOGIN" ? login : register;

  return (
    <div className="session-area">
      <img src={logo} width={"120px"} height={"80px"} />
      <CardSession sessionConfig={sessionConfig} />
    </div>
  );
}

export default Session;
