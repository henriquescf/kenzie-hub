import { useNavigate } from "react-router-dom"
import { LoginForm } from "../components/LoginForm"
import "../styles/login.scss"
import { useEffect } from "react"

export const Login = ({setUser}) => {

    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("@User:Token"))

    useEffect(() => {
        if (token != null) {
          navigate("/dashboard")
        }
      }, [])
      
    return (
        <div className="login-content">
            <header className="login-header">
                <img src="/Logo.svg"/>
            </header>

            <main>
                <LoginForm {...{setUser}}/>
            </main>
        </div>
    )
}