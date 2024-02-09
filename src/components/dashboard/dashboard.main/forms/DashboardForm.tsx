import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";

function DashboardForm() {
  return (
    <div className="dashboard-form">
      <div className="card-view">
        <div className="card-view-title">
          <h4>My Profile</h4>
        </div>

        <div className="card-view-content">
          <div className="card-view-profile">
            <img />
            <span>
              <h6>Alex</h6>
              <p>Programador</p>
            </span>
          </div>

          <div className="card-view-info">
            <label>Email:</label>
            <span>teste@teste.com</span>
          </div>
          <div className="card-view-info">
            <label>Endereço:</label>
            <span>Rua Tal</span>
          </div>
        </div>
      </div>

      <div className="card-edit">
        <div className="card-edit-title">
          <h4>Edit</h4>
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

        <button className="card-edit-button"> Editar</button>
      </div>
    </div>
  );
}

export default DashboardForm;
