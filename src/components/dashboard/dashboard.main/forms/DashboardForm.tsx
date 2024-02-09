import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { useEffect, useState } from "react";

const exams: string[] = [
  "Exame",
  "Responsavel",
  "Data do Pedido",
  "Data do Resultado",
];
const pacients: string[] = ["Nome", "Causa", "Data de Entrada", "Data de Alta"];

const profile: string[] = ["Foto", "Nome", "Profissão", "Endereço"];

function DashboardForm(props: any) {
  const [arrayPrincipal, setArrayPrinciapl] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [btn, setBtn] = useState<string>("");
  const [campoOne, setCampoOne] = useState<string>("");
  const [campoTwo, setCampoTwo] = useState<string>("");
  const [campoThree, setCampoThree] = useState<string>("");
  const [campoFour, setCampoFour] = useState<string>("");

  useEffect(() => {
    switch (props.type) {
      case "PROFILE":
        setArrayPrinciapl(profile);
        setTitle("Perfil");
        setAction("Editar");
        setBtn("Editar")
        break;

      case "REGISTERPACIENT":
        setArrayPrinciapl(pacients);
        setTitle("Pacientes");
        setAction("Novo paciente");
        setBtn("Registrar")
        break;

      case "REGISTEREXAM":
        setArrayPrinciapl(exams);
        setTitle("Exames");
        setAction("Novo exame");
        setBtn("Registrar")
        break;
    }
  }, []);

  return (
    <div className="dashboard-form">
      <div className="card-view">
        <div className="card-view-title">
          <h4>{title}</h4>
        </div>

        <div className="card-view-content">
          <div className="card-view-profile">
            <img />
            <span>
              <h6>{arrayPrincipal[0]}</h6>
              <p>{arrayPrincipal[1]}</p>
            </span>
          </div>

          <div className="card-view-info">
            <label>{arrayPrincipal[2]}</label>
            <span>teste@teste.com</span>
          </div>
          <div className="card-view-info">
            <label>{arrayPrincipal[3]}</label>
            <span>Rua Tal</span>
          </div>
        </div>
      </div>

      <div className="card-edit">
        <div className="card-edit-title">
          <h4>{action}</h4>
        </div>

        <div className="card-edit-content">
          <div className="card-edit-items">
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>

            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
            <div className="card-edit-item">
              <label>Nome Campo</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <button className="card-edit-button">{btn}</button>
      </div>
    </div>
  );
}

export default DashboardForm;
