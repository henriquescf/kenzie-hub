import "../styles/login.scss"
import { LoginContent } from "../components/LoginContent"
import { LoginHeader } from "../components/LoginContent/LoginHeader"
import { LoginMain } from "../components/LoginContent/LoginMain"
import { LoginForm } from "../components/LoginContent/LoginMain/LoginForm"

export const Login = () => {

    return (
        <LoginContent>
            <LoginHeader/>
            <LoginMain>
                <LoginForm/>
            </LoginMain>
        </LoginContent>
    )
}