import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const exams: string[] = [
  "Exame",
  "Responsavel",
  "Data do Pedido",
  "Data do Resultado",
];
const pacients: string[] = ["Nome", "Causa", "Data de Entrada", "Data de Alta"];

const profile: string[] = ["Nome", "Profissão", "E-mail", "Endereço"];

function DashboardForm(props: any) {
  const getUser = JSON.parse(localStorage.getItem("user"));
  const [arrayPrincipal, setArrayPrinciapl] = useState<any[]>([]);
  const navigate = useNavigate();
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
        setBtn("Editar");
        setCampoOne(getUser[0].name);
        setCampoTwo(getUser[0]?.profissao);
        setCampoThree(getUser[0].email);
        setCampoFour(getUser[0]?.endereco);
        break;

      case "REGISTERPACIENT":
        setArrayPrinciapl(pacients);
        setTitle("Pacientes");
        setAction("Novo paciente");
        setBtn("Registrar");
        break;

      case "REGISTEREXAM":
        setArrayPrinciapl(exams);
        setTitle("Exames");
        setAction("Novo exame");
        setBtn("Registrar");
        break;
    }
  }, []);

  function saveContent() {
    switch (props.type) {
      case "PROFILE":
        // eslint-disable-next-line no-case-declarations
        const user: any = [
          {
            name: campoOne,
            profissao: campoTwo,
            email: campoThree,
            endereco: campoFour,
          },
        ];

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
        window.location.reload();
        break;

      case "REGISTERPACIENT":
        let pacients = localStorage.getItem("pacients") || [];
        // eslint-disable-next-line no-case-declarations
        const pacient = {
          nome: campoOne,
          responsavel: campoTwo,
          dataIni: campoThree,
          dataFim: campoFour,
        };
        if (pacients?.length > 0) {
          const pacientsArray = JSON.parse(localStorage.getItem("pacients"));
          pacientsArray.push(pacient);
          localStorage.setItem("pacients", JSON.stringify(pacientsArray));
        } else {
          pacients.push(pacient);
          localStorage.setItem("pacients", JSON.stringify(pacients));
        }

        navigate("/dashboard/pacients");
        window.location.reload();
        break;

      case "REGISTEREXAM":
        let exams = localStorage.getItem("exams") || [];
        // eslint-disable-next-line no-case-declarations
        const exam = {
          nome: campoOne,
          responsavel: campoTwo,
          dataIni: campoThree,
          dataFim: campoFour,
        };

        if (exams?.length > 0) {
          const examsArray = JSON.parse(localStorage.getItem("exams")) || [];
          examsArray.push(exam);
          localStorage.setItem("exams", JSON.stringify(examsArray));
        } else {
          exams.push(exam)
          localStorage.setItem("exams", JSON.stringify(exams));
        }

        navigate("/dashboard/exams");
        window.location.reload();
        break;
    }
  }

  return (
    <div className="dashboard-form">
      <div className="card-view">
        <div className="card-view-title">
          <h4>{title}</h4>
        </div>

        <div className="card-view-content">
          <div className="card-view-info">
            <label>{arrayPrincipal[0]}</label>
            <span>{campoOne}</span>
          </div>

          <div className="card-view-info">
            <label>{arrayPrincipal[1]}</label>
            <span>{campoTwo}</span>
          </div>

          <div className="card-view-info">
            <label>{arrayPrincipal[2]}</label>
            <span>{campoThree}</span>
          </div>
          <div className="card-view-info">
            <label>{arrayPrincipal[3]}</label>
            <span>{campoFour}</span>
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
              <label>{arrayPrincipal[0]}</label>
              <input
                value={campoOne}
                type="text"
                onChange={(e) => setCampoOne(e.target.value)}
              />
            </div>
            <div className="card-edit-item">
              <label>{arrayPrincipal[1]}</label>
              <input
                value={campoTwo}
                type="text"
                onChange={(e) => setCampoTwo(e.target.value)}
              />
            </div>
            <div className="card-edit-item">
              <label>{arrayPrincipal[2]}</label>
              <input
                value={campoThree}
                type="text"
                onChange={(e) => setCampoThree(e.target.value)}
              />
            </div>
            <div className="card-edit-item">
              <label>{arrayPrincipal[3]}</label>
              <input
                value={campoFour}
                type="text"
                onChange={(e) => setCampoFour(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button onClick={() => saveContent()} className="card-edit-button">
          {btn}
        </button>
      </div>
    </div>
  );
}

export default DashboardForm;
