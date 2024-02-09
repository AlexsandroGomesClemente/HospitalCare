import CardSession from "../components/session/CardSession"
import "../assets/styles/pages.css/Session.css"
import logo from "../../public/img/Logo.png"

function Session() {

    return(
        <div className="session-area">
            <img src={logo} width={'120px'} height={"80px"}/>
            <CardSession />
        </div>
    )
}

export default Session