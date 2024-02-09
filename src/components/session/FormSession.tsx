import "../../assets/styles/components.css/session.css/CardSession.css";

function FormSession() {
  return (
    <form className="form-session">
      <div className="form-input">
        <label>Email Address</label>
        <input type="text" placeholder="email@email.com" />
      </div>
      <div className="form-input">
        <label>Senha</label>
        <input type="password" placeholder="********" />
      </div>

     <div className="form-check">
      <input type="checkbox" />
      <label>Lembrar senha</label>
     </div>
      <button className="form-button" type="submit"> Enviar </button>
    </form>
  );
}

export default FormSession;
