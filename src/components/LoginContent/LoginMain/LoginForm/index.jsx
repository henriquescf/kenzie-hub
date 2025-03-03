import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useUserContext } from "../../../../providers/UserContext"

export const LoginForm = () => {

    const { userLogin } = useUserContext()

    const loginSchema = z.object({
      email: z.string().email("Email inválido."),
      password: z.string().min(8, "Sua senha deve conter no mínimo 8 caracteres, pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial."),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})

    const submit = (data) => {
        userLogin(data)
    }

    return (
        <form className="login-form" onSubmit={handleSubmit(submit)}>
            <h1>Login</h1>
            <div className="form-email">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" id="email" {...register("email")}/>
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="form-password">
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="********" id="password" {...register("password")} autoComplete="new-password"/>
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button>Entrar</button>
            <span>Ainda não possui uma conta?</span>
            <Link to="/register" className={"register-btn"}>Cadastre-se</Link>
        </form>
    )
}