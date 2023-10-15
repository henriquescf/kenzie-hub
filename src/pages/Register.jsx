import { Link } from "react-router-dom"
import { RegisterForm } from "../components/RegisterForm"
import "../styles/register.scss"

export const Register = () => {
    return (
        <div className="register-content">
            <header className="register-header">
                <img src="/Logo.svg"></img>
                <Link to="/" className={"back-btn"}>Voltar</Link>
            </header>
            <main>
                <RegisterForm/>
            </main>
        </div>
    )
}