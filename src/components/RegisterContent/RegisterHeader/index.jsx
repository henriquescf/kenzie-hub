import { Link } from "react-router-dom"

export const RegisterHeader = () => {
    return (
        <header className="register-header">
            <img src="/Logo.svg"></img>
            <Link to="/" className={"back-btn"}>Voltar</Link>
        </header>
    )
}