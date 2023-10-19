import "../styles/register.scss"
import { RegisterContent } from "../components/RegisterContent"
import { RegisterHeader } from "../components/RegisterContent/RegisterHeader"
import { RegisterMain } from "../components/RegisterContent/RegisterMain"
import { RegisterForm } from "../components/RegisterContent/RegisterMain/RegisterForm"

export const Register = () => {
    return (
        <RegisterContent>
            <RegisterHeader/>
            <RegisterMain>
                <RegisterForm/>
            </RegisterMain>
        </RegisterContent>
    )
}