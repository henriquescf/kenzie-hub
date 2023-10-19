import "../styles/login.scss"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { LoginContent } from "../components/LoginContent"
import { LoginHeader } from "../components/LoginContent/LoginHeader"
import { LoginMain } from "../components/LoginContent/LoginMain"
import { LoginForm } from "../components/LoginContent/LoginMain/LoginForm"

export const Login = ({setUser}) => {

    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("@User:Token"))

    useEffect(() => {
        if (token != null) {
          navigate("/dashboard")
        }
      }, [])
      
    return (
        <LoginContent>
            <LoginHeader/>
            <LoginMain>
                <LoginForm {...{setUser}}/>
            </LoginMain>
        </LoginContent>
    )
}