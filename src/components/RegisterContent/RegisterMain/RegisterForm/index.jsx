import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { api } from "../../../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const RegisterForm = () => {

    const navigate = useNavigate()

    const registerSchema = z.object({
        name: z.string().min(1, "Digite um nome."),
        email: z.string().email("Digite um email válido."),
        password: z.string().min(8, "Sua senha deve conter no mínimo 8 caracteres, pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial."),
        confirmpassword: z.string().min(8, "A confirmação de senha deve conter pelo menos 8 dígitos."),
        bio: z.string().min(1, "Nos fale um pouco sobre você."),
        contact: z.string().min(1, "Digite uma forma de contato."),
        course_module: z.string(),
      }).refine(({password, confirmpassword}) => password === confirmpassword, {
        message: "As senhas não correspondem.",
        path: ["confirmpassword"],
      })
  
      const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(registerSchema)})
  
      const submit = (data) => {
          const filteredData = {
            email: data.email,
            password: data.password,
            name: data.name,
            bio: data.bio,
            contact: data.contact,
            course_module: data.course_module,
          }
          registerRequest(filteredData)
      }
  
      const registerRequest = async (formData) => {
          try{
              const { data } = await api.post("/users", formData)
              toast.success("Cadastro efetuado com sucesso.")
              navigate("/")
          } catch(error){
              if(error.response.data.message == "Email already exists"){
                toast.error("Email já existente, tente novamente.")
            } else{
                toast.error("Ooops, algo deu errado, tente novamente.")
            }
          }
      }

    return (
        <form className="register-form" onSubmit={handleSubmit(submit)}>
            <h1>Crie sua conta</h1>
            <span>Rápido e grátis, vamos nessa</span>

            <div className="form-name">
                <label htmlFor="name">Nome</label>
                <input  type="text" placeholder="Digite aqui seu nome" id="name" {...register("name")}/>
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div className="form-email">
                <label htmlFor="email">Email</label>
                <input  type="text" placeholder="Digite aqui seu email" id="email" {...register("email")}/>
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="form-password">
                <label htmlFor="password">Senha</label>
                <input  type="password" placeholder="Digite aqui sua senha" id="password" {...register("password")} autoComplete="new-password"/>
                {errors.password && <span>{errors.password.message}</span>}
            </div>


            <div className="form-confirmpassword">
                <label htmlFor="confirm-password">Confirmar Senha</label>
                <input  type="password" placeholder="Digite novamente sua senha" id="confirm-password" {...register("confirmpassword")} autoComplete="new-password"/>
                {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
                {errors.object && <span>{errors.object.message}</span>}
            </div>

            <div className="form-bio">
                <label htmlFor="bio">Bio</label>
                <input  type="text" placeholder="Fale sobre você" id="bio" {...register("bio")}/>
                {errors.bio && <span>{errors.bio.message}</span>}
            </div>

            <div className="form-contact">
                <label htmlFor="contact">Contato</label>
                <input  type="text" placeholder="Opção de contato" id="contact" {...register("contact")}/>
                {errors.contact && <span>{errors.contact.message}</span>}
            </div>

            <div className="form-module">
                <label htmlFor="module">Selecionar módulo</label>
                <select id="module" {...register("course_module")}> 
                    <option>Primeiro módulo (Introdução ao Frontend)</option>
                    <option>Segundo módulo (Frontend Avançado)</option>
                    <option>Terceiro módulo (Introdução ao Backend)</option>
                    <option>Quarto módulo (Backend Avançado)</option>
                </select>
                {errors.course_module && <span>{errors.course_module.message}</span>}
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    )
}