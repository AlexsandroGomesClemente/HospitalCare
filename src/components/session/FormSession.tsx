import "../../assets/styles/components.css/session.css/CardSession.component.css";
import {
  SessionForm,
  SessionHandelSubmit,
} from "../../interfaces/session.interface";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSession(props: SessionForm) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigate();

  const handelSubmit: SessionHandelSubmit = (event) => {
    event?.preventDefault();
    if (props.formConfig.type === "LOGIN") {
      if (email !== "" || password !== "") {
        const users = JSON.parse(localStorage.getItem("users"));
        const filterUser = users.filter((user) => user.email === email);
        localStorage.setItem("user", JSON.stringify(filterUser))
        if (
          filterUser.length > 0 &&
          filterUser[0].email === email &&
          filterUser[0].password === password
        )
        {
          return navigation(`/dashboard`);
        }
      }
    }

    if (props.formConfig.type === "REGISTER") {
      if (email !== "" || password !== "" || name !== "") {
        const user: any = [{ name, email, password }];
        localStorage.setItem("users", JSON.stringify(user));
        return navigation(`/`);
      }
    }
  };

  return (
    <form
      className="form-session"
      onSubmit={(event: Event) => handelSubmit(event)}
    >
      {props.formConfig.type === "REGISTER" && (
        <div className="form-input">
          <label>Nome</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="nome"
          />
        </div>
      )}
      <div className="form-input">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email@email.com"
        />
      </div>
      <div className="form-input">
        <label>Senha</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
        />
      </div>

      <div className="form-checks">
        <input type="checkbox" />
        <label>{props.formConfig.selector}</label>
      </div>
      <button className="form-button" type="submit">
        {props.formConfig.button}
      </button>
    </form>
  );
}

export default FormSession;
